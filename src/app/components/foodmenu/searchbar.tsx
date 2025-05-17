"use client";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
    return (
        <div className="absolute inset-x-0 top-[55%] transform -translate-y-1/2 z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-between shadow-lg rounded-full px-4 py-2 bg-gradient-to-r from-[#F9655B] to-[#EE821A]">

                <div className="flex justify-between space-x-4 gap-60">
                    <div className="rounded-full p-4 bg-white/20 ">
                        <Search className="size-8 text-black" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label className="text-sm font-medium text-black text-center mb-1">
                            Track Your Order
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Order ID"
                            className="text-sm font-semibold px-4 py-1.5 rounded-full border border-white/40 bg-white/30 placeholder:text-black text-black focus:outline-none text-center w-72"
                        />
                    </div>
                </div>
                <button className="bg-[#f8edeb] text-black px-5 py-2 rounded-full font-semibold hover:bg-white/90 transition">
                    Track Now
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
