"use client";
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
    return (
        <div className="relative flex items-center justify-between h-screen bg-yellow-50 border rounded-3xl px-8 py-16">
            <div className="flex flex-col space-y-8 w-1/2">
                <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Image
                            src={"/images/romantic-dinner_14702310.png"}
                            alt="food"
                            width={60}
                            height={60}
                            className="object-cover rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-yellow-600">Freshly Prepared with Love</h2>
                            <p className="text-lg text-gray-600">
                                Every meal is made with the finest ingredients, bringing the warmth and taste of a home-cooked meal straight to your table.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 ml-20">
                        <Image
                            src={"/images/Purple_Flat_Illustrative_Food_Place_and_Restaurant_Logo-removebg-preview.png"}
                            alt="food"
                            width={80}
                            height={80}
                            className="object-cover rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-yellow-600">Personalized to Your Taste</h2>
                            <p className="text-lg text-gray-600">
                                We understand your unique preferences. Our meals can be customized to suit your taste and dietary needs, ensuring satisfaction in every bite.
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center space-x-4">
                        <Image
                            src={"/images/food-delivery_9519363.png"}
                            alt="food"
                            width={60}
                            height={60}
                            className="object-cover rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-yellow-600">Affordable and Convenient</h2>
                            <p className="text-lg text-gray-600">
                                Enjoy healthy, delicious, and wholesome food without breaking the bank. Delivered straight to your door, hassle-free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/2 flex justify-center">
                <Image
                    src="/images/logo.jpg" // Assuming you want the same logo here as well
                    alt="Desi Kitchen Logo"
                    width={400}
                    height={400}
                    className="object-contain rounded-full shadow-lg border-4 border-yellow-600"
                />
            </div>
        </div>
    );
};

export default About;
