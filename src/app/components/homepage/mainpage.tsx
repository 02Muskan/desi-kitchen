"use client";
import React, { useState } from "react";
import Image from "next/image";
import Rightside from "./rightside";

const FoodFastComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="h-screen bg-gradient-to-br from-yellow-200 to-yellow-100 relative">
            {/* Logo */}
            <div className="absolute top-4 left-4">
                <Image src="/images/desilogo.png" alt="Logo" width={90} height={90} />
            </div>

            {/* Hamburger Menu */}
            <div className="absolute top-4 right-4 z-50">
                <button onClick={toggleMenu} className="p-4 bg-blue-500 text-white rounded-full">
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu */}
            <div
                className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out w-[70%] justify-center ${menuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex justify-between px-8 py-4 bg-blue-800 text-white w-full border-b rounded-b-xl">
                    <div className="text-lg font-bold">FoodFast</div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">Menu</a>
                        <a href="#" className="hover:underline">Food</a>
                        <a href="#" className="hover:underline">Services</a>
                    </div>
                    <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-blue-800 transition">
                        Log In
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex items-center justify-between h-full px-8 py-16">
                {/* Left Side Content */}
                <div className="z-10 max-w-lg">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">
                        Hungry? <br />
                        <span className="text-5xl">Grab FoodFast Now!</span>
                    </h1>
                    <p className="text-gray-700 mb-8">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit amet.
                    </p>
                    <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-500">
                        Order Now
                    </button>
                </div>

                {/* Right Side Component */}
                <div className="flex-1 flex items-center justify-center h-full relative overflow-hidden">
                    <div className=" w-full h-[90%] rounded-tl-[50px] rounded-bl-[50px] flex items-center justify-center">
                        <Rightside />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodFastComponent;
