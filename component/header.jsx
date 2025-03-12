'use client'
import Link from "next/link";
import React, { useState } from "react";
import { RiShoppingCartLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useCart } from "../src/cart/CartContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  return (
    <nav className=" fixed top-0 left-0 flex justify-between items-center w-full shadow-md p-5 md:p-7 bg-white z-[9999]">
      {/* Logo */}
      <h1 className="text-3xl">
        TrendTrunk.
      </h1>

      {/* Menu for larger screens */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-10">
          <li className="cursor-pointer hover:text-amber-500">New & Featured</li>
          <li className="cursor-pointer hover:text-amber-500">Men</li>
          <li className="cursor-pointer hover:text-amber-500">Women</li>
        </ul>
      </div>

      {/* Cart Icon */}
      <div className="relative flex items-center gap-5">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center relative">
          <Link href={"/cart"}><RiShoppingCartLine className="text-black text-xl" /></Link> 
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0  bg-white shadow-md w-full md:hidden">
          <ul className="flex flex-col items-center gap-5 py-5">
            <li className="cursor-pointer hover:text-gray-700">New & Featured</li>
            <li className="cursor-pointer hover:text-gray-700">Men</li>
            <li className="cursor-pointer hover:text-gray-700">Women</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
