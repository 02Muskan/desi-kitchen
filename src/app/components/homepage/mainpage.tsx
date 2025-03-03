"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import Rightside from "./rightside";
import ContactForm from "../form/contact-form";
import Mainlogin from "./mainlogin";
import { HiOutlineMenu } from "react-icons/hi";
import useGsapAnimations from "../../hooks/useGsapAnimations";


const FoodFastComponent = () => {
    useGsapAnimations();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const [openOrder, setopenOrder] = useState(true);
    const [login, setLogin] = useState(true);

    const router = useRouter();

    const handleButtonClick = () => {
        setopenOrder(true);
    };
    const handleLoginClick = () => {
        setLogin(true);
    };


    const handleNavigation = (path: string) => {
        router.push(path);
        setMenuOpen(false);
    };

    return (
        <div className="h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 relative border rounded-[70px] fade-in">

            <div className="absolute top-4 left-4">
                <Image src="/images/desilogo.png" alt="Logo" width={90} height={90} />
            </div>

            <div className="absolute top-4 right-4 z-50">
                <button onClick={toggleMenu} className="p-4 bg-orange-300 text-white border rounded-full ">
                    <HiOutlineMenu />
                </button>
            </div>

            <div
                className={`fixed top-0 left-1/2 w-[70%]  bg-[#ff9f2e] text-[#973131] font-semibold z-50 transform transition-transform duration-300 ease-in-out rounded-b-lg shadow-lg border-b-2 border-yellow-100 ${menuOpen ? "translate-y-0 -translate-x-1/2" : "-translate-y-full -translate-x-1/2"
                    }`}
            >
                <div className="flex justify-between p-4 w-full ">
                    <div className="text-lg font-bold">Home Cooked</div>
                    <div className="flex gap-20">
                        <button onClick={() => handleNavigation("/home")} className="hover:underline">Home</button>
                        <button onClick={() => handleNavigation("/foodmenu")} className="hover:underline">Menu</button>
                        <button onClick={() => handleNavigation("/about")} className="hover:underline">About</button>
                        <button onClick={() => handleNavigation("/contact-form")} className="hover:underline">Contact Us</button>
                    </div>
                    <button
                        className="px-4 py-2 border border-white rounded-md hover:bg-yellow-200 hover:text-orange-800 transition"
                        onClick={toggleMenu}
                    >
                        Close
                    </button>
                </div>
            </div>


            <div className="flex items-center justify-between h-full ">

                <div className="z-10 max-w-lg">
                    <h1 className="text-4xl font-bold text-orange-900 mb-4">
                        Hungry? <br />
                        <span className="text-5xl">Grab FoodFast Now!</span>
                    </h1>
                    <p className="text-orange-500 mb-8">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit amet.
                    </p>
                    <button className="px-6 py-3 bg-[#C14600] text-[#FEF9E1] font-bold rounded-lg hover:bg-[#E9762B] hover:text-[#FFF0BD]" onClick={handleButtonClick}>
                        Order Now
                    </button>
                </div>

                <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                    <Rightside />
                </div>
            </div>
        </div>
    );
};

export default FoodFastComponent;
