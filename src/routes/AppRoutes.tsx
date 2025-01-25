import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import useAuth from "../hooks/useAuth";

// Private Route Wrapper
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Admin Route Wrapper
const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  return user?.role === "admin" ? children : <Navigate to="/" />;
};

const appRoutes = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      // Public Routes
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/all-products", element: <AllProducts /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      // Private Routes
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },

      // Admin Routes
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },

      // Fallback Route
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default appRoutes;
