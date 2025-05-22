"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import CartDrawer from "./addtocart";

const menuItems = [
  {
    name: "Desi Power Thali",
    image: "/images/ThaliOne.png",
    description: "A wholesome meal with dal, roti, sabzi, rice, salad & sweet.",
    align: "right",
  },

  {
    name: "Samosa Squad",
    image: "/images/ThaliOne.png",
    description: "Crispy bite-sized samosas filled with spiced potatoes.",
    align: "left",
  },
  {
    name: "Office Wali Thali",
    image: "/images/newthalione.png",
    description: "Rotating menu with simple yet tasty North Indian dishes.",
    align: "right",
  },
  {
    name: "Rollercoaster Bhakarwadi",
    image: "/images/Thalithree.png",
    description: "Spicy and sweet crispy rolls – a perfect tea-time snack.",
    align: "left",
  },
  {
    name: "Maharaja King Thali",
    image: "/images/ThaliOne.png",
    description: "A royal feast loaded with every dish your stomach fears!",
    align: "right",
  },
  {
    name: "Mathri Masti",
    image: "/images/Thalithree.png",
    description: "Traditional flaky and salty snack popular in North India.",
    align: "left",
  },
  {
    name: "Pulao Party Pack",
    image: "/images/ThaliOne.png",
    description: "Aromatic rice with fresh vegetables and Indian spices.",
    align: "right",
  },

  {
    name: "Dhokla Delight",
    image: "/images/Thalithree.png",
    description:
      "Soft bread with a spicy paneer filling grilled to perfection.",
    align: "left",
  },

  {
    name: "Naughty Nimki",
    image: "/images/namkeens.png",
    description: "Crispy, flaky snack with a salty twist — Nimki goes wild!",
    align: "right",
  },
  {
    name: "Chhoti Kachori Bombs",
    image: "/images/ThaliOne.png",
    description: "Mini kachoris that pack maximum punch. One bite, full drama!",
    align: "left",
  },
  {
    name: "Super Sandwich",
    image: "/images/ThaliOne.png",
    description: "Delicious layered sandwich with fresh veggies and sauces.",
    align: "right",
  },
];

const Menu = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = () => {
    setIsCartOpen(true);
  };
  return (
    <div className="bg-[#503321]  border rounded-[70px]  px-4 py-10 flex flex-col items-center font-sans relative overflow-hidden">
      <h1 className="text-4xl font-bold text-[#f5e5b8] tracking-widest mb-16 z-10">
        OUR MENU
      </h1>

      <div className="relative w-full max-w-4xl z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-24 bg-[#e9dbb0] rounded-full z-0" />

        <div className=" relative z-10">
          {menuItems.map((item, index) => {
            const isLeft = item.align === "left";

            return (
              <div
                key={index}
                className={`flex justify-${isLeft ? "start left-16" : "end right-16"
                  } w-full relative `}
              >
                <div
                  className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"
                    } items-center gap-6 border-2 bg-[#7a4419] rounded-full `}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width="128"
                    height="128"
                    className="w-32 h-32 rounded-full"
                  />
                  <div
                    className={`max-w-[200px] px-2 ${isLeft ? "left" : "right ml-4 px-4 "
                      } `}
                  >
                    <h2 className="text-xl font-semibold text-[#f5e5b8]">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-300">{item.description}</p>
                    <button
                      className="mt-2 bg-[#f5e5b8] text-[#503321] px-3 py-1 rounded-full text-xs hover:bg-[#fff4e6] transition flex gap-1"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="size-4" />
                      <p>Add to Cart</p>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Menu;
