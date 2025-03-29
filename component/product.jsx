"use client"
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import {fetchData} from "../src/utils/FetchProduct";

export default function PopularProducts() {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchData("https://admin-sooty-mu.vercel.app/api/products");
      if (data) {
        setProducts(data);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

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
        {loading ? (
          <div className="text-center py-4">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-4">No products found</div>
        ) : (
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          >
            {products.map(product => (
              <div key={product._id} className="min-w-[200px] sm:min-w-[250px] text-center">
              {/* Circle Background */}
              <Link href={{
                pathname: "/product",
                query: { name: product.title, img: product.image, price: product.price, colors: product.color },
              }}>
                <div className="w-[200px] h-[200px] overflow-hidden sm:w-[250px] sm:h-[250px] bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[150px] rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:rotate-3"
                  />
                </div>
              </Link>
              {/* Product Details */}
              <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.color}</p>

              {/* Price */}
              <p className="font-bold text-amber-500 text-xl mt-2">${product.price}</p>
            </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
