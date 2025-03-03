"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./hovercard";

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState("Thalis");

    const items = [
        { id: 1, name: "Maharaja Thali", price: "$7.2", imgSrc: "/images/Thalifour.png", category: "Thalis" },
        { id: 2, name: "Desi's Specials", price: "$6.2", imgSrc: "/images/Thalitwo.png", category: "Thalis" },
        { id: 3, name: "Regular Thali", price: "$9.5", imgSrc: "/images/Thalithree.png", category: "Thalis" },
        { id: 8, name: "Falhari Thali", price: "$9.5", imgSrc: "/images/Thalithree.png", category: "Thalis" },
        { id: 4, name: "Kachori", price: "$5.0", imgSrc: "/images/Thalifour.png", category: "Snacks" },
        { id: 5, name: "Samosa", price: "$4.5", imgSrc: "/images/Thalifour.png", category: "Snacks" },
        { id: 6, name: "Chura Fry", price: "$10.0", imgSrc: "/images/Thalifour.png", category: "Snacks" },
        { id: 7, name: "Khaman Dhokla", price: "$5.0", imgSrc: "/images/Thalifour.png", category: "Dessert" }
    ];

    const categories = ["Thalis", "Snacks", "Deserts"];

    return (
        <div className="relative bg-yellow-50 py-8 px-4 flex flex-col items-center border rounded-[70px]">
            <h2 className="text-3xl font-bold text-center text-gray-800 m-4">Specials</h2>
            <div className="flex gap-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`relative px-6 py-2 font-medium transition duration-500 ease-in-out ${activeTab === category
                            ? "text-black"
                            : "text-yellow-600 hover:text-orange-400"
                            }`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                        {activeTab === category && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-[4px] w-6 h-[2px] bg-orange-600"></span>
                        )}
                    </button>
                ))}
            </div>


            <div className="flex overflow-x-auto gap-6 py-4">
                {items
                    .filter((item) => item.category === activeTab)
                    .map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="card-gradient shadow-lg rounded-3xl w-48 h-64 p-4 flex flex-col relative items-center border-2 border-gray-400 transform transition-transform hover:scale-105 overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.08 }}
                        >
                            {/* Gradient Hover Effect */}
                            <motion.div
                                className="absolute inset-0 bg-[#ffd686] opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />

                            {/* Image Section */}
                            <div className="absolute -top-10 -left-5 overflow-visible">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.name}
                                    width={140}
                                    height={140}
                                    className="rounded-full"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="relative z-10 flex flex-col items-center justify-center h-full mt-32">
                                <h3 className="text-lg font-bold text-[#8B4513]">{item.name}</h3>
                                <p className="text-sm font-medium text-gray-800">{item.price}</p>
                            </div>

                            {/* "See Details" Section (Now Stays Visible) */}
                            <div className="relative z-10 mt-auto w-full flex justify-between items-center px-2">
                                <p className="text-sm font-medium text-[#F2E6B5]">See Details</p>
                                <button
                                    className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                    ))}
            </div>

            {selectedItem && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <Card
                        name={selectedItem.name}
                        price={selectedItem.price}
                        imgSrc={selectedItem.imgSrc}
                        onClose={() => setSelectedItem(null)}
                    />
                </div>
            )}
        </div>
    );
};

export default Menu;
