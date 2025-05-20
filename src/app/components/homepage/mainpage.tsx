"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const FoodFastComponent = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-screen w-full relative rounded-[70px] overflow-hidden fade-in">
      <Image
        src="/images/finalhoempage.png"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute top-4 left-0 right-0 z-20 flex justify-center items-center">
        <div className="bg-[#fca23b] border border-yellow-200 rounded-full px-8 py-2 flex gap-6 items-center shadow-lg">
          <button
            onClick={() => handleNavigation("/home")}
            className="hover:underline text-[#973131] font-semibold text-sm"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/foodmenu")}
            className="hover:underline text-[#973131] font-semibold text-sm"
          >
            Menu
          </button>
          <button
            onClick={() => handleNavigation("/about")}
            className="hover:underline text-[#973131] font-semibold text-sm"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("/contact-form")}
            className="hover:underline text-[#973131] font-semibold text-sm"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleNavigation("/subscriptions")}
            className="hover:underline text-[#973131] font-semibold text-sm"
          >
            Subscription
          </button>
          <Link href="/login">
            <button className="hover:underline text-red-800 font-semibold text-sm">
              LOGIN
            </button>
          </Link>
          <FaUserCircle
            className="text-red-800 text-2xl ml-2 cursor-pointer hover:text-orange-700 transition"
            onClick={() => handleNavigation("/userprofile")}
          />
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-4 left-4 z-10">
        <Image src="/images/desilogo.png" alt="Logo" width={90} height={90} />
      </div>

      {/* Centered Buttons */}
      {/* Left Side Caption and Buttons */}
      <div className="absolute bottom-20 left-10 z-10 flex flex-col gap-4 animate-fadeInUp transition-all duration-700 ease-in-out">
        <p className="text-[#FFF9DC] text-xl md:text-2xl font-semibold max-w-xs">
          Ghar jaisa khaana, maa ke haathon se bana.
        </p>
        <button
          onClick={() => handleNavigation("/contact-form")}
          className="px-6 py-3 bg-[#C14600] text-[#FEF9E1] font-bold rounded-3xl border-4 border-[#FFF2E1] hover:bg-[#f1ce82] hover:text-[#FFF0BD] text-sm w-fit"
        >
          Order Now
        </button>
        <button
          onClick={() => handleNavigation("/foodmenu")}
          className="px-6 py-3 bg-[#FFCD88] text-[#6A3400] font-bold rounded-3xl border-4 border-[#FFF2E1] hover:bg-[#FFE5B4] hover:text-[#C14600] text-sm w-fit"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default FoodFastComponent;
