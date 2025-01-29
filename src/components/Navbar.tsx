import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FaCartPlus,
  FaUser,
  FaSignInAlt,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { setSearchQuery } from "@/features/products/productsSlice";
import { RootState } from "@/app/store";
import { clearCart } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const searchQuery = useSelector(
    (state: RootState) => state.products.searchQuery
  ); // Get the search query from Redux store
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (total, item) => total + (item.cartQuantity ?? 1), // Default to 1 if cartQuantity is undefined
      0
    )
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    toast.success("Logged out successfuly", {
      duration: 3000,
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value)); // Dispatch search query to the store
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // Trigger navigation to the All Products page
      navigate("/all-products"); 
    }
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-10">
      <div className="px-16 container mx-auto flex justify-between items-center p-6 py-4">
        <div className="flex items-center space-x-16">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-widest text-gray-200"
          >
            <div className="flex flex items-center mx-auto">
              <img
                src="/logo.png"
                alt="logo"
                className="rounded-sm h-14 w-14 mr-2"
              />
              <span>Stationary</span>
            </div>
          </Link>
          <nav className="hidden lg:flex space-x-6">
            <Link
              to="/all-products"
              className="text-lg text-gray-300 hover:text-white transition-all"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lg text-gray-300 hover:text-white transition-all"
            >
              About
            </Link>
            {isAuthenticated && (
              <Link
                to={
                  user?.role === "admin"
                    ? "/dashboard/admin"
                    : "/dashboard/user"
                }
                className="text-lg text-gray-300 hover:text-white transition-all"
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>

        {/* Show search bar only on large screens */}
        <div className="ml-24 hidden lg:block flex-grow items-center justify-center mr-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery} // Controlled input
              onChange={handleSearchChange} // Handle search input change
              onKeyPress={handleSearchKeyPress} // Handle Enter key press for search
              placeholder="Search..."
              className="bg-gray-800 text-white py-2 px-4 rounded-full pl-12 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="hidden lg:flex space-x-4 items-center">
          {isAuthenticated ? (
            <Link
              to="/login"
              onClick={handleLogout}
              className="text-lg text-gray-300 hover:text-white transition-all flex items-center"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg text-gray-300 hover:text-white transition-all flex items-center"
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>
              <Link
                to="/login"
                className="text-lg text-gray-300 hover:text-white transition-all flex items-center"
              >
                <FaUser className="mr-2" /> Sign Up
              </Link>
            </>
          )}
          <Button
            variant="outline"
            size="default"
            className="relative text-gray-200 hover:text-gray-900 flex items-center"
            onClick={() => navigate("/cart")} // Go to the cart page when clicked
          >
            <FaCartPlus />
            {/* Show item count */}
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 text-xs text-white bg-purple-600 rounded-full w-4 h-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>

        <div className="lg:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white p-4">
          <nav className="space-y-4">
            <Link to="/all-products" className="block text-lg">
              Products
            </Link>
            <Link to="/about" className="block text-lg">
              About
            </Link>
            <Link to="/dashboard/user" className="block text-lg">
              Dashboard
            </Link>
            {isAuthenticated ? (
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center justify-center"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="mr-2 text-gray-600 hover:text-white-600" />{" "}
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login" className="block text-lg">
                  Login
                </Link>
                <Link to="/login" className="block text-lg">
                  Sign Up
                </Link>
              </>
            )}
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center"
              onClick={() => navigate("/cart")} 
            >
              <FaCartPlus className="mr-2" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
