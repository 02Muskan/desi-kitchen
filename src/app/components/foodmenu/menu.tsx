"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "./hovercard";

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState("Thalis");

    const items = [
        { id: 1, name: "Noodles", price: "$7.2", imgSrc: "/images/Thalifour.png", category: "Snacks" },
        { id: 2, name: "Pasta", price: "$6.2", imgSrc: "/images/Thalitwo.png", category: "Snacks" },
        { id: 3, name: "Biryani", price: "$9.5", imgSrc: "/images/Thalithree.png", category: "Thalis" },
        { id: 4, name: "Spring Rolls", price: "$5.0", imgSrc: "/images/Thalifour.png", category: "Snacks" },
        { id: 5, name: "Soup", price: "$4.5", imgSrc: "/images/Thalifour.png", category: "Snacks" },
        { id: 6, name: "Thali", price: "$10.0", imgSrc: "/images/Thalifour.png", category: "Thalis" },
        { id: 7, name: "Spring Rolls", price: "$5.0", imgSrc: "/images/Thalifour.png", category: "Snacks" }
    ];

    const categories = ["Thalis", "Snacks"];

    return (
        <div className="relative bg-yellow-50 py-8 px-4 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center text-gray-800 m-4">Specials</h2>
            <div className="flex gap-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-6 py-2 font-medium rounded-full ${activeTab === category
                            ? " text-gray-600"
                            : " text-red-600 border-b-2 "
                            }`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                    </button>

                ))}
            </div>
            <div className="flex overflow-x-auto gap-6 py-4">
                {items
                    .filter((item) => item.category === activeTab)
                    .map((item) => (
                        <div
                            key={item.id}
                            className="bg-yellow-200 shadow-lg rounded-3xl w-48 h-64 p-4 flex flex-col relative items-center border border-gray-200"
                        >
                            <div className="absolute -top-10 -left-5 overflow-visible">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.name}
                                    width={140}
                                    height={140}
                                    className="rounded-full "
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center h-full mt-32">
                                <h3 className="text-lg font-bold text-black">{item.name}</h3>
                                <p className="text-sm font-medium text-gray-800">{item.price}</p>
                            </div>

                            <div className="mt-auto w-full flex justify-between items-center px-2">
                                <p className="text-sm font-medium text-gray-600">See Details</p>
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
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
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
