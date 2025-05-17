"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Rightside from "./rightside";
import { HiOutlineMenu } from "react-icons/hi";
import useGsapAnimations from "../../hooks/useGsapAnimations";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
const FoodFastComponent = () => {
    useGsapAnimations();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    // const [login, setLogin] = useState(true);

    const router = useRouter();


    const handleButtonClick = () => {
        router.push('/contact-form');
    };


    // const handleLoginClick = () => {
    //     setLogin(true);
    // };


    const handleNavigation = (path: string) => {
        router.push(path);
    };


    useEffect(() => {
        setMenuOpen(false);
        // setLogin(true);
    }, []);

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
                className={`fixed top-0 left-1/2 w-[70%]  bg-[#fca23b] text-[#973131] font-semibold z-50 transform transition-transform duration-300 ease-in-out rounded-b-3xl shadow-lg border-b-2 border-yellow-100 ${menuOpen ? "translate-y-0 -translate-x-1/2" : "-translate-y-full -translate-x-1/2"
                    }`}
            >
                <div className="flex justify-between p-4 w-full ">
                    <div className="text-[18px]  text-center font-bold">Home <br /> Cooked</div>
                    <div className="flex gap-10">
                        <button onClick={() => handleNavigation("/home")} className="hover:underline bg-[#FFF2D7] border-2 border-[#DEAC80] rounded-3xl px-2 py-1">Home</button>
                        <button onClick={() => handleNavigation("/foodmenu")} className="hover:underline bg-[#FFF2D7] border-2 border-[#DEAC80] rounded-3xl px-2 py-1">Menu</button>
                        <button onClick={() => handleNavigation("/about")} className="hover:underline bg-[#FFF2D7] border-2 border-[#DEAC80] rounded-3xl px-2 py-1">About</button>
                        <button onClick={() => handleNavigation("/contact-form")} className="hover:underline bg-[#FFF2D7] border-2 border-[#DEAC80] rounded-3xl px-2 py-1 ">Contact Us</button>
                        <button onClick={() => handleNavigation("/subscriptions")} className="hover:underline bg-[#FFF2D7] border-2 border-[#DEAC80] rounded-3xl px-2 py-1">Subscription</button>
                        <Link href="/login">
                            <button className="hover:underline bg-[#FFF2D7] border-2 border-[#DEAC80] rounded-3xl px-2 py-1 text-red-800">LOGIN</button>
                        </Link>

                    </div>
                    <button
                        className="px-4 py-2 border border-white rounded-full hover:bg-yellow-200 text-red-700 transition"
                        onClick={toggleMenu}
                    >
                        <IoCloseSharp />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between h-full ">

                <div className="z-10 max-w-lg">
                    <h1 className="text-4xl font-bold text-orange-900 mb-4">
                        Satisfy<br />
                        <span className="text-5xl">Your Hunger with Just One Click!!!</span>
                    </h1>
                    <p className="text-orange-500 mb-8 font-semibold">
                        Taste the Best Home Cooked Meals, Now on Your Doorstep!
                    </p>
                    <button className="px-6 py-3 bg-[#C14600] text-[#FEF9E1] font-bold rounded-3xl  border-4 border-[#FFF2E1] hover:bg-[#f1ce82] hover:text-[#FFF0BD]" onClick={handleButtonClick}>
                        Order Now
                    </button>
                </div>

                <div className="flex-1 flex items-center justify-center relative overflow-hidden ">
                    <Rightside />
                </div>
            </div>
        </div>
    );
};

export default FoodFastComponent;
