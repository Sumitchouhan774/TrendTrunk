"use client"
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PopularProducts() {
  const scrollRef = useRef(null);

  // Scroll Function
  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="mt-16 px-6 sm:px-12 lg:px-20 w-full">
      {/* Section Title with Arrows */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-bold">Popular Product</h2>

        {/* Arrows */}
        <div className="flex space-x-3">
          <button
            onClick={() => scroll(-300)}
            className="bg-white shadow-md p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll(300)}
            className="bg-white shadow-md p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Scrollable Products Container */}
      <div className="relative mt-4">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {[
            { name: "Nike Dunk Low", price: "£109.95", img: "/p1.png", colors: "1 Colour" },
            { name: "Air Jordan 1 Low", price: "£69.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ed8d46c0-d433-467c-a72a-c850d6380c85/NIKE+SB+DUNK+LOW+PRO.png", img1: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a8ce5d7c-a802-4b74-9803-b3d94d2d9e5d/W+NIKE+TERRA+MANTA.png", colors: "1 Colour" },
            { name: "Nike Air Max Plus 3", price: "£184.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e8b0d625-4da5-4cc6-b7d8-92c5605078d0/NIKE+P-6000.png", colors: "1 Colour" },
            { name: "Nike Air Force 1", price: "£109.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/0745eae3-6834-4a84-b310-8d66651f7472/AIR+FORCE+1+%28GS%29.png", colors: "1 Colour" },
            { name: "Nike Air Max 270", price: "£69.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/25f65767-43dd-4ff7-8eac-7aa5610bbb4d/W+NIKE+TERRA+MANTA.png", colors: "1 Colour" },
            { name: "Nike Air Max Plus (TN)", price: "£184.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f14e8f51-b56a-4e57-8019-95415b627784/AIR+ZOOM+PEGASUS+41.png", colors: "1 Colour" },
            { name: "Nike Blazer Mid '77", price: "£109.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7f9d51b3-b45d-4083-a633-5cc68ecf789b/NIKE+DUNK+LOW+SE.png", colors: "1 Colour" },
            { name: "Nike ZoomX Vaporfly NEXT%", price: "£69.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7ccbde3c-6b29-4027-ad8a-bdbd84426c1d/W+AIR+FORCE+1+%2707+NEXT+NATURE.png", colors: "1 Colour" },
            { name: "Nike SB Dunk", price: "£184.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/2d8047dd-01e6-4abc-a62c-ade7dada3bf2/M+NIKE+MC+TRAINER+3.png", colors: "1 Colour" },
            { name: "Nike Pegasus 40", price: "£109.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/91765057-6d98-4e3b-af63-64fb6c16883b/W+NIKE+AL8.png", colors: "1 Colour" },
            { name: "Nike LeBron 21", price: "£69.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a8b57506-df90-4c6a-a474-f51241422b03/AIR+FORCE+1+LV8+2+%28GS%29.png", colors: "1 Colour" },
            { name: "Nike Air Jordan 1", price: "£184.95", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/73627869-5239-40d9-b41f-5dcdaba413e4/KILLSHOT+2+LEATHER.png", colors: "1 Colour" },
          ].map((product, index) => (
            <div key={index} className="min-w-[200px] sm:min-w-[250px] text-center">
              {/* Circle Background */}
              <Link href={{
                pathname: "/product",
                query: { name: product.name, img: product.img, img1: product.img1, price: product.price, colors: product.colors },
              }}>
              <div className="w-[200px] h-[200px] overflow-hidden sm:w-[250px] sm:h-[250px] bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-[150px] rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:rotate-3"
                />
              </div>
              </Link>
              {/* Product Details */}
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.colors}</p>

              {/* Price */}
              <p className="font-bold text-amber-500 text-xl mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
