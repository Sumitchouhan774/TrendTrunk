"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "../../cart/CartContext";
import Header from "../../../component/header";
import Loader from "../../../component/loader";
import Footer from "../../../component/footer";

export default function ProductPage() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Fall Limited Edition Sneakers";
  const img = searchParams.get("img") || "/p1.png";
  const price = searchParams.get("price") || "$125.00";
  const colors = searchParams.get("colors") || "1 Colour";

  const [selectedImage, setSelectedImage] = useState(img);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const productImages = [img, "https://res.cloudinary.com/dtzc8igyz/image/upload/v1741846953/p2_yalj6c.png", "https://res.cloudinary.com/dtzc8igyz/image/upload/v1741846953/p5_b6q6gl.png", "https://res.cloudinary.com/dtzc8igyz/image/upload/v1741846951/p6_abhvtf.png", "https://res.cloudinary.com/dtzc8igyz/image/upload/v1741846952/p3_ox8urs.png", "https://res.cloudinary.com/dtzc8igyz/image/upload/v1741846953/p7_omj7bs.png"];

  // ✅ Define the product object
  const product = {
    id: name, // Use name as a unique identifier
    name: name,
    image: img,
    price: price, // Convert price to a number
    colors: colors,
    quantity: 1, // Default quantity
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <Header />
          <main className="flex flex-col lg:flex-row items-center justify-center flex-grow px-6 pt-40 pb-25 md:pb-40">
            {/* Left Side - Product Images */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="w-full max-w-[500px] lg:max-w-[600px] h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg transition hover:scale-105">
                <img src={selectedImage} alt="Sneaker" className="object-cover w-full h-full" />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 lg:gap-4 mt-4 flex-wrap justify-center">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 lg:w-24 lg:h-24 rounded-lg overflow-hidden transition ${
                      selectedImage === img ? "blur-xs" : "shadow-md"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="object-cover w-full h-full hover:scale-110 transition" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
              <h2 className="text-orange-500 font-bold text-sm uppercase tracking-wider">TrendTrunk</h2>
              <h1 className="text-3xl lg:text-4xl font-extrabold mt-2 text-gray-900">{name}</h1>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer.
              </p>
              <div className="mt-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-900">{price}</span>
                  <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded text-sm">50% OFF</span>
                </div>
                <p className="text-gray-400 line-through text-lg">£250.00</p>
              </div>

              {/* ✅ Fixed Add to Cart Button */}
              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                <button
                  className={`px-6 py-3 text-white rounded-lg transition font-semibold shadow-md ${
                    isActive 
                      ? 'bg-gray-500 hover:bg-gray-400' 
                      : 'bg-orange-500 hover:bg-orange-400'
                  }`}
                  onClick={() => {
                    addToCart(product);
                    setIsActive(true);
                  }}
                >
                  {isActive ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
