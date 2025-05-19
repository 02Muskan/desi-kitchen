"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import Image from "next/image";

import { IoEyeOff, IoEye } from "react-icons/io5";

const LoginSignup = () => {
    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
    const [isPhoneLogin, setIsPhoneLogin] = useState(false);
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [inputValue, setInputValue] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);


    const resetStates = () => {
        setIsPhoneLogin(false);
        setStep("phone");

    };
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isPhoneLogin) {
            if (step === "phone") {
                if (
                    !inputValue ||
                    isNaN(Number(inputValue)) ||
                    inputValue.length !== 10
                ) {
                    alert("Please enter a valid phone number.");
                    return;
                }
                alert(`OTP sent to ${inputValue}`);
                setStep("otp");
                setInputValue("");
            } else if (step === "otp") {
                if (inputValue === "1234") {
                    alert("Phone Login successful!");
                    resetStates();
                } else {
                    alert("Invalid OTP. Please try again.");
                }
            }
        } else {
            alert("Logging in with Email and Password.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cream ">
            <div className="w-[450px] bg-white overflow-hidden relative border rounded-3xl">
                <div className="bg-orange-100 p-4 text-center absolute h-[200px] rounded-b-full border-4 border-orange-400 w-full -top-10">
                    <h1 className="text-xl font-bold text-orange-500 p-2 mt-8">
                        Create An Account
                    </h1>
                    <p className="text-orange-400">
                        Login and Get started  with us instantly!
                    </p>
                    <div className="mt-2 relative">
                        <div className="bg-white w-[60%] mx-auto flex rounded-full border border-gray-200 overflow-hidden shadow-md">
                            <button
                                className={`flex-1 py-2 text-sm font-medium ${activeTab === "login"
                                    ? "bg-orange-500 text-white border rounded-full"
                                    : "text-gray-500"
                                    } transition`}
                                onClick={() => {
                                    setActiveTab("login");
                                    resetStates();
                                }}
                            >
                                Log In
                            </button>
                            <button
                                className={`flex-1 py-2 text-sm font-medium ${activeTab === "signup"
                                    ? "bg-orange-500 text-white border rounded-full"
                                    : "text-gray-500"
                                    } transition`}
                                onClick={() => {
                                    setActiveTab("signup");
                                    resetStates();
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-[160px] px-6 pb-8">
                    {activeTab === "login" ? (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    {isPhoneLogin && step === "otp"
                                        ? "OTP"
                                        : isPhoneLogin
                                            ? "Phone Number"
                                            : "Email"}
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                    placeholder={
                                        isPhoneLogin && step === "otp"
                                            ? "Enter the 4-digit OTP"
                                            : isPhoneLogin
                                                ? "Enter your phone number"
                                                : "Enter your email"
                                    }

                                    onChange={(e) => setInputValue(e.target.value)}
                                    required
                                />

                            </div>
                            {!isPhoneLogin && (
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                            placeholder="Create a password"

                                        />
                                        <div
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={handlePasswordToggle}
                                        >
                                            {showPassword ? (
                                                <IoEye className="text-gray-500 size-6" />
                                            ) : (
                                                <IoEyeOff className="text-gray-500 size-6" />
                                            )}
                                        </div>
                                    </div>
                                    <span
                                        className="text-blue-500 text-sm hover:text-blue-700 "
                                        onClick={() => {
                                            setIsPhoneLogin(true);
                                            setStep("phone");
                                            setInputValue("");
                                        }}
                                    >
                                        {" "}
                                        Forgot Password ?
                                    </span>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
                            >
                                {isPhoneLogin && step === "otp"
                                    ? "Verify OTP"
                                    : isPhoneLogin
                                        ? "Send OTP"
                                        : "Log In"}
                            </button>
                            <p className="flex justify-center items-center">Didn t Have account ?
                                <button className="text-blue-500 font-semibold ml-2" onClick={() => {
                                    setActiveTab("signup");
                                    resetStates();
                                }}>Signup</button>
                            </p>
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
                                <label className="block text-sm text-gray-600 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="Create a password"
                                    />
                                    <div
                                        className="absolute right-3 top-3 cursor-pointer"
                                        onClick={handlePasswordToggle}
                                    >
                                        {showPassword ? (
                                            <IoEye className="text-gray-500 size-6" />
                                        ) : (
                                            <IoEyeOff className="text-gray-500 size-6" />
                                        )}
                                    </div>
                                    <span
                                        className="text-blue-500 text-sm hover:text-blue-700 "
                                        onClick={() => {
                                            setActiveTab("login")
                                            setIsPhoneLogin(true);
                                            setStep("phone");
                                            setInputValue("");
                                        }}
                                    >
                                        {" "}
                                        Forgot Password ?
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
                            >
                                Sign Up
                            </button>
                            <p className="flex justify-center items-center">Have an account?
                                <button className="text-blue-500 font-semibold ml-2" onClick={() => {
                                    setActiveTab("login");
                                    resetStates();
                                }}>Login</button>
                            </p>
                        </form>
                    )}
                </div>
                <div className="relative flex justify-center gap-4 py-4">
                    <div
                        className="border rounded-full w-12 h-12 flex items-center justify-center border-gray-300 shadow-md cursor-pointer"
                        onClick={() => {
                            setActiveTab("login");
                            setIsPhoneLogin(true);
                            setStep("phone");
                            setInputValue("");
                        }}
                    >
                        <IoCall className="text-green-600 text-2xl" />
                    </div>
                    <div
                        className="border rounded-full w-12 h-12 flex items-center justify-center border-gray-300 shadow-md cursor-pointer"
                        onClick={() => {
                            setActiveTab("login");
                            setIsPhoneLogin(false);
                        }}
                    >
                        <Image
                            src="/images/icons8-google.svg"
                            alt="Google Icon"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginSignup;
