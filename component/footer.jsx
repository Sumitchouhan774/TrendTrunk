"use -client" 
import React from 'react'

const footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 text-center ">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm">Step into style with our premium collection of shoes, where fashion meets comfort. From casual sneakers to elegant formal wear, we offer footwear designed for every occasion. Crafted with high-quality materials and innovative designs, our shoes ensure durability and a perfect fit. Elevate your look and walk with confidence!</p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-500">Home</a></li>
            <li><a href="#" className="hover:text-amber-500">Product</a></li>
            <li><a href="#" className="hover:text-amber-500">About</a></li>
            <li><a href="#" className="hover:text-amber-500">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="mt-8 text-sm">
        <p>&copy; 2025 TrendsTrunk | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default footer