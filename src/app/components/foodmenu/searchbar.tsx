"use client";
import React from "react";

const SearchBar = () => {
    return (
        <div className="absolute inset-x-0 top-[55%] transform -translate-y-1/2 z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-between shadow-lg rounded-full px-6 py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="bg-gray-200 rounded-full p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657A8 8 0 118.343 7.343a8 8 0 019.314 9.314zm-2.83-4.829h-.01"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-lg font-bold">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-gray-200 rounded-full p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Cuisine Type</p>
                            <p className="text-lg font-bold">Italian</p>
                        </div>
                    </div>
                </div>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
