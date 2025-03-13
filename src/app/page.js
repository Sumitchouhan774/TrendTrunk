"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../component/header";
import PopularProduct from "../../component/product";
import Loader from "../../component/loader"; // Import your loader component
import Footer from "../../component/footer"

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate a delay for the loader
    }, 2000); // Change duration as needed
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {loading ? (
        // Show loader while loading
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          {/* Fixed Header */}
          <Header />

          {/* Main Content */}
          <div className="w-full flex flex-col pt-30 px-4 sm:px-8 lg:px-16">
            {/* Express Yourself Section */}
            <div className="flex flex-wrap items-center w-full gap-4 md:gap-6 justify-center text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold">Express</h1>
              <div className="w-10 sm:w-16 md:w-20 h-[5px] md:h-[8px] bg-amber-500 rounded-full"></div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold">Yourself</h1>
            </div>

            {/* Second Section */}
            <div className="flex flex-col lg:flex-row items-center w-full gap-6 md:gap-10 justify-center mt-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold">Through</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-[600px] leading-relaxed px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold">
                Style<span className="text-amber-500">.</span>
              </h1>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center mt-10 px-4">
            <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-[300px] rounded-full bg-gradient-to-r from-lime-200 to-lime-400 flex items-center justify-center p-5 shadow-md">
              <img
                width="500"
                height="500"
                className="w-full h-auto hover:scale-110 transition-transform duration-300 -rotate-45"
                src="https://res.cloudinary.com/dtzc8igyz/image/upload/v1741846951/slide-3-removebg-preview_syqb5s.png"
                alt="local"
              />
            </div>
          </div>

          {/* Popular Products */}
          <PopularProduct />

          {/* Shoes Section */}
          <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
            {/* Left Content */}
            <div className="md:w-1/2 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
                Find the <span className="font-semibold">Perfect</span> <br />
                Shoes <span className="text-yellow-500">—</span>
                <br />
                Essentials.
                <span className="block text-yellow-500 text-6xl sm:text-7xl md:text-8xl font-bold mt-2">
                  98%
                </span>
              </h1>
              <p className="mt-6 text-gray-600 text-sm sm:text-base">
                TrendTrunk is your go-to destination for stylish and trendy clothing, offering a curated collection of modern fashion for every occasion. With a seamless shopping experience, high-quality apparel, and the latest styles, TrendTrunk ensures you stay ahead in fashion. Explore our collection and redefine your wardrobe with effortless elegance!
              </p>

              {/* Care Instructions & Fabric Material */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-400">
                    +
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Care Instructions</p>
                    <p className="text-xs sm:text-sm text-gray-500">Machine wash at 30</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-400">
                    +
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Fabric Material</p>
                    <p className="text-xs sm:text-sm text-gray-500">84% Cotton, 16% Polyester</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <div className="relative">
                <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-full scale-125"></div>
                <img
                  src="https://res.cloudinary.com/dtzc8igyz/image/upload/v1741846958/funky_q9furl.jpg"
                  alt="Person with Camera"
                  className="relative w-[250px] sm:w-[300px] md:w-[350px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
