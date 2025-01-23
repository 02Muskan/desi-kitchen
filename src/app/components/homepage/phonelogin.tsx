"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import Image from "next/image";

const LoginSignup = () => {
    const [activeTab, setActiveTab] = useState("login");
    const [showPhoneLogin, setShowPhoneLogin] = useState(false);
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [inputValue, setInputValue] = useState("");

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (step === "phone") {
            // Mock sending OTP
            alert(`OTP sent to ${inputValue}`);
            setStep("otp");
            setInputValue(""); // Clear input for OTP
        } else {
            // Mock verifying OTP
            if (inputValue === "1234") {
                alert("Login successful!");
                setShowPhoneLogin(false); // Close modal on success
            } else {
                alert("Invalid OTP. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cream">
            <div className="w-[400px] bg-white rounded-3xl shadow-lg overflow-hidden relative">
                <div className="bg-orange-100 p-6 text-center relative">
                    <h1 className="text-3xl font-bold text-orange-500">Glazed</h1>
                    <div className="absolute bottom-[-20px] left-0 right-0">
                        <div className="bg-white w-[80%] mx-auto flex rounded-full border border-gray-200 overflow-hidden shadow-md">
                            <button
                                className={`flex-1 py-2 text-sm font-medium ${activeTab === "login"
                                    ? "bg-orange-500 text-white"
                                    : "text-gray-500"
                                    } transition`}
                                onClick={() => setActiveTab("login")}
                            >
                                Log In
                            </button>
                            <button
                                className={`flex-1 py-2 text-sm font-medium ${activeTab === "signup"
                                    ? "bg-orange-500 text-white"
                                    : "text-gray-500"
                                    } transition`}
                                onClick={() => setActiveTab("signup")}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-16 px-6 pb-8">
                    {activeTab === "login" ? (
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="Enter your password"
                                    required
                                />
                                <a
                                    href="#"
                                    className="text-xs text-orange-500 float-right mt-1"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
                            >
                                Log In
                            </button>
                            <div className="flex items-center space-x-2">
                                <hr className="flex-1" />
                                <span className="text-sm text-gray-400">or</span>
                                <hr className="flex-1" />
                            </div>
                        </form>
                    ) : (
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <div className="flex items-center text-sm text-gray-600 mb-1">
                                    <span>Password</span>
                                    <span className="text-red-500 ml-1">*</span>
                                </div>
                                <input
                                    type="password"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder="Create a password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
                            >
                                Sign Up
                            </button>
                        </form>
                    )}
                </div>
                <div className="bg-cream relative flex justify-center gap-4 py-4">
                    <div
                        className="border rounded-full w-12 h-12 flex items-center justify-center border-gray-300 shadow-md cursor-pointer"
                        onClick={() => {
                            setShowPhoneLogin(true);
                            setStep("phone");
                            setInputValue("");
                        }}
                    >
                        <IoCall className="text-green-600 text-2xl" />
                    </div>
                    <div className="border rounded-full w-12 h-12 flex items-center justify-center border-gray-300 shadow-md">
                        <Image
                            src="/images/icons8-google.svg"
                            alt="Google Icon"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </div>

            {showPhoneLogin && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            {step === "phone" ? "Phone Login" : "Verify OTP"}
                        </h2>
                        <form onSubmit={handlePhoneSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    {step === "phone" ? "Phone Number" : "OTP"}
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder={
                                        step === "phone"
                                            ? "Enter your phone number"
                                            : "Enter the 4-digit OTP"
                                    }
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
                            >
                                {step === "phone" ? "Send OTP" : "Verify OTP"}
                            </button>
                        </form>
                        <button
                            className="mt-4 w-full bg-gray-200 text-gray-600 p-2 rounded-md hover:bg-gray-300 transition"
                            onClick={() => setShowPhoneLogin(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginSignup;
