"use client"
import {useRouter} from "next/navigation"
import { useCart } from "../../cart/CartContext";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useCart(); // Get cart functions

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <div className="min-h-screen bg-white p-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center w-full">Shopping Cart</h2>
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} width="80" height="80" className="rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:rotate-3" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500">£{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <select
                      className="border rounded p-1 focus:outline-none focus:ring-0"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    >
                      {[...Array(5).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                      ))}
                    </select>
                    <button onClick={() => removeFromCart(item.id)} className=" hover:text-gray-600 cursor-pointer">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <img src="/empty.jpg" alt="empty-cart" className="w-full h-full object-cover" />
          )}
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">Summary</h3>
          <div className="flex flex-col justify-between text-gray-600 mb-2 gap-2">
            <p>SUBTOTAL</p>
            <p className="text-gray-500 text-sm mb-4">
              The subtotal represents the total cost of the selected items in your cart before applying any discounts, taxes, or shipping charges.
              Final pricing, including taxes and delivery fees, will be calculated at checkout.
            </p>
            <p className="text-1xl font-semibold text-black">£{subtotal.toLocaleString()}</p>
          </div>
          <button onClick={() => router.push("/cart/checkout")} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Checkout</button>
        </div>
      </div>
    </div>
  );
}
