"use client";
import React from "react";
import Image from "next/image";

const Card = ({ name, price, imgSrc, onClose }) => {
  return (
    <div className="max-w-xs mx-auto rounded-3xl shadow-lg overflow-hidden relative bg-[#fefae0] max-h-[400px]">
      <div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="-bottom-2 relative flex justify-center">
        <Image
          src={imgSrc}
          alt={name}
          width={180}
          height={180}
          className="rounded-full border-[3px] border-dashed border-red-600 p-0 m-0"
        />
      </div>
      <div className="p-3 text-gray-700 rounded-3xl border bg-[#ff9f1c] -mt-10">
        <div>
          <p className="text-xs pt-4">
            Maharaja Thali - A royal platter with **Paneer Butter Masala, Dal
            Tadka, Mix Veg, Jeera Rice, Tandoori Roti, Papad, Salad, Gulab
            Jamun, and Chaas.** A feast for true food lovers! 🍛🥗
          </p>

          <h3 className="text-lg font-bold mt-2">{name}</h3>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <p>850g / 1200 kcal</p>
            <p>1 Thali</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/Thalitwo.png"
                alt="restaurant"
                width={28}
                height={28}
                className="object-cover rounded-full"
              />
              <div>
                <p className="text-xs font-medium">Royal Thali House</p>
                <p className="text-[10px] text-gray-400">2.5 km from you</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 text-xs">★★★★★</span>
              <span className="text-gray-400 text-xs ml-1">(4.8)</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-left">
              <p className="text-xs text-gray-400 line-through">₹499</p>
              <p className="text-base font-bold text-green-500">{price}</p>
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m7-7H5"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
