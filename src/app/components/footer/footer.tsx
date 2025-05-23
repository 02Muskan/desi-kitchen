"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    const router = useRouter();
    const handleContactClick = () => {

        router.push('/contact-form');

    };
    return (
        <div className="relative w-full h-[350px] overflow-hidden bg-transparent">

            <div className="absolute w-full h-[700px] bg-[#884A39] rounded-t-full border-4 border-[#C6C5B3] bottom-0 left-0 transform translate-y-[350px]">
                <div className="flex items-center justify-center w-full mt-10 space-x-8">
                    <div className="rounded-full border-2 border-[rgb(250,238,209)] p-4 shadow-md">
                        <BsInstagram className="text-3xl text-[#FADA7A]" />
                    </div>
                    <div className="rounded-full border-2 border-[#FAEED1] p-4 shadow-md">
                        <FaFacebook className="text-3xl text-[#FADA7A]" />
                    </div>
                    <div className="rounded-full border-2 border-[#FAEED1]  p-4 shadow-md">
                        <SiGmail className="text-3xl text-[#FADA7A]" />
                    </div>
                </div>

                <div className="mt-10 w-full text-center text-yellow-200 text-xl font-semibold">
                    <h2>Contact Us For Delicious Home-Cooked Meals</h2>
                </div>

                <div className="mt-6 w-full text-center">
                    <button className="px-6 py-3 bg-yellow-100 text-red-500  font-semibold text-lg rounded-3xl shadow-md hover:bg-red-700 transition duration-300" onClick={handleContactClick}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
