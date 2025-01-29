import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from "@/features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.cartQuantity ?? 1), // Default to 1 if cartQuantity is undefined
    0
  );

  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleRemoveItem = (itemId: string) => {
    // Dispatch the action to remove the item from the cart (assuming you have this action)
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}/api/orders/initiate-payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({
            total_amount: cartTotal,
            currency: "BDT",
            tran_id: `TRX-${Date.now()}`,
            success_url: `${import.meta.env.BASE_URL}/success`,
            fail_url: `${import.meta.env.BASE_URL}/fail`,
            cancel_url: `${import.meta.env.BASE_URL}/cancel`,
            customer: {
              name: user?.name,
              email: user?.email,
              phone: user?.phone || "123",
              address: user?.address || "Dhaka",
              city: "Dhaka",
              country: "Bangladesh",
            },
          }),
        }
      );

      const data = await response.json();

      if (data.success && data.GatewayPageURL) {
        window.location.href = data.GatewayPageURL;
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("An error occurred while initiating payment.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 md:py-10 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 my-8 md:mb-10">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-lg py-8"
              >
                <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6">
                  <img
                    src={item.productImg}
                    alt={item.name}
                    className="w-40 h-40 object-cover rounded-md"
                  />
                  <div className="text-left md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-800 py-2">
                      {item.name}
                    </h3>
                    <p className="text-lg text-gray-500 py-1">
                      Description: {item.description || "N/A"}
                    </p>
                    <p className="text-lg text-gray-500 py-1">
                      Category: {item.category}
                    </p>
                    <p className="text-lg text-gray-500 py-1">
                      Brand: {item.brand || "Unknown"}
                    </p>
                    <p className="text-lg text-gray-500 py-1">
                      Quantity: {item.cartQuantity || 1}
                    </p>
                  </div>
                </div>

                {/* Price and Button in One Row on Mobile */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-auto mt-4 md:mt-0">
                  <div className="flex flex-row justify-between items-center w-full">
                    <span className="text-gray-700 text-2xl font-semibold">
                      BDT {item.price * (item.cartQuantity ?? 1)}{" "}
                      {/* Display cartQuantity */}
                    </span>
                    <button
                      className="text-red-600 hover:text-red-800 ml-6"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      <FaTrashAlt className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 md:mt-12 bg-white p-6 rounded-lg shadow-lg py-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Cart Summary
          </h3>

          <div className="flex justify-between mb-4">
            <span className="text-lg text-gray-700">Subtotal</span>
            <span className="text-lg text-gray-700">
              BDT {cartTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-lg text-gray-700">Shipping</span>
            <span className="text-lg text-gray-700">Free</span>
          </div>

          <div className="flex justify-between mb-6">
            <span className="text-xl font-semibold text-gray-800">Total</span>
            <span className="text-xl font-semibold text-gray-800">
              BDT {cartTotal.toFixed(2)}
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full py-6 text-xl bg-purple-600 text-white rounded-lg font-semibold"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
