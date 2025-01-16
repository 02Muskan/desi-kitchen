"use client";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <div className="relative w-full h-[350px] overflow-hidden bg-transparent">

            <div className="absolute w-full h-[700px] bg-orange-200 rounded-t-full border-4 border-orange-400 bottom-0 left-0 transform translate-y-[350px]">

                <div className="flex items-center justify-center w-full mt-10 space-x-8">
                    <div className="rounded-full border-4 border-red-900 p-4 shadow-md">
                        <BsInstagram className="text-3xl" />
                    </div>
                    <div className="rounded-full border-4 border-red-900 p-4 shadow-md">
                        <FaFacebook className="text-3xl" />
                    </div>
                    <div className="rounded-full border-4 border-red-900 p-4 shadow-md">
                        <SiGmail className="text-3xl" />
                    </div>
                </div>

                <div className="mt-10 w-full text-center text-yellow-900 text-2xl font-semibold">
                    <h2>Contact Us For Delicious Home-Cooked Meals</h2>
                </div>

                <div className="mt-6 w-full text-center">
                    <button className="px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
