'use client'
import React, { useState } from "react";
import { useCart } from "../../../cart/CartContext";
import Header from "../../../../component/header";
import Footer from "../../../../component/footer";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { cart } = useCart();
  const router = useRouter();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.50;
  const tax = 0.21;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !shippingDetails.firstName ||
      !shippingDetails.lastName ||
      !shippingDetails.streetAddress ||
      !shippingDetails.state ||
      !shippingDetails.zip
    ) {
      setErrors("Please fill in all shipping details.");
      return false;
    }

    if (paymentMethod === "card" && (!shippingDetails.cardNumber || !shippingDetails.expiry || !shippingDetails.cvv)) {
      setErrors("Please enter your card details.");
      return false;
    }

    setErrors("");
    return true;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setOrderPlaced(true);
    }
  };

  const handleGoHome = () => {
    router.push("/"); // Redirects user to the home page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto p-6 mt-20">
          {orderPlaced ? (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
              <div className="text-center border border-gray-300 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-600">🎉 Order Placed Successfully! 🎉</h2>
                <p className="mt-4 text-lg">Thank you for your purchase. Your order is being processed.</p>
                <button onClick={handleGoHome} className="bg-amber-500 text-white px-6 py-2 mt-6 rounded shadow-lg hover:bg-amber-400 transition">
                  Go to Home
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Shipping Address */}
              <div className="border border-gray-300 p-6 rounded-lg shadow-md mb-6">
                <h2 className="font-semibold mb-4">Shipping Address</h2>
                <input name="firstName" value={shippingDetails.firstName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="First Name" />
                <input name="lastName" value={shippingDetails.lastName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Last Name" />
                <input name="streetAddress" value={shippingDetails.streetAddress} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Street Address" />
                <div className="grid grid-cols-3 gap-2">
                  <input name="aptNumber" value={shippingDetails.aptNumber} onChange={handleChange} className="p-2 border border-gray-300 rounded" placeholder="Apt Number" />
                  <input name="state" value={shippingDetails.state} onChange={handleChange} className="p-2 border border-gray-300 rounded" placeholder="State" />
                  <input name="zip" value={shippingDetails.zip} onChange={handleChange} className="p-2 border border-gray-300 rounded" placeholder="Zip" />
                </div>
              </div>

              {/* Payment Method */}
              <div className="border border-gray-300 p-6 rounded-lg shadow-md mb-6">
                <h2 className="font-semibold mb-4">Payment Method</h2>
                <div>
                  <label className="flex items-center space-x-2 mb-2">
                    <input type="radio" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                    <span>Credit or Debit Card</span>
                  </label>
                  {paymentMethod === "card" && (
                    <div className="mt-2">
                      <input name="cardNumber" value={shippingDetails.cardNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Card Number" />
                      <div className="grid grid-cols-3 gap-2">
                        <input name="expiry" value={shippingDetails.expiry} onChange={handleChange} className="p-2 border border-gray-300 rounded" placeholder="MM/YY" />
                        <input name="cvv" value={shippingDetails.cvv} onChange={handleChange} className="p-2 border border-gray-300 rounded" placeholder="CVV" />
                        <input className="p-2 border border-gray-300 rounded" placeholder="Zip" />
                      </div>
                    </div>
                  )}
                </div>

                <label className="flex items-center space-x-2 mt-4">
                  <input type="radio" name="payment" checked={paymentMethod === "bitcoin"} onChange={() => setPaymentMethod("bitcoin")} />
                  <span>Bitcoin</span>
                </label>
                <label className="flex items-center space-x-2 mt-2">
                  <input type="radio" name="payment" checked={paymentMethod === "googlepay"} onChange={() => setPaymentMethod("googlepay")} />
                  <span>Google Pay</span>
                </label>
                <label className="flex items-center space-x-2 mt-2">
                  <input type="radio" name="payment" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} />
                  <span>Paypal</span>
                </label>
              </div>

              {/* Order Summary - Now at the end */}
              <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-gray-100">
                <h2 className="font-semibold mb-4">Order Summary</h2>
                <p>Items ({cart.length}): <span className="float-right">£{subtotal.toFixed(2)}</span></p>
                <p>Shipping & Handling: <span className="float-right">£{shipping.toFixed(2)}</span></p>
                <p>Before Tax: <span className="float-right">£{total.toFixed(2)}</span></p>
                <p>Tax Collected: <span className="float-right">£{tax.toFixed(2)}</span></p>
                <hr className="my-2" />
                <p className="font-semibold">Order Total: <span className="float-right">£{total.toFixed(2)}</span></p>
                <button onClick={handlePlaceOrder} className="bg-amber-500 text-white w-full py-2 mt-4 rounded shadow-lg hover:bg-amber-400 transition">
                  Place Order
                </button>
              </div>

              {/* Display validation errors */}
              {errors && <p className="text-red-500 mt-4 text-center">{errors}</p>}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
