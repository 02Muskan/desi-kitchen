"use client";
import React from "react";
import Image from "next/image";

const Card = ({ name, price, imgSrc, onClose }) => {
    return (
        <div className="max-w-xs mx-auto rounded-3xl shadow-lg overflow-hidden relative bg-[#fefae0] ">
            <div>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="-bottom-20 -left-3 relative">
                <Image
                    src={imgSrc}
                    alt={name}
                    width={400}
                    height={400}
                    className="object-cover mx-auto rounded-full p-4"
                />

            </div>

            <div className="p-4 text-gray-700 rounded-3xl border bg-[#ff9f1c] ">

                <div className="">
                    <p className="text-sm">
                        Rice Noodles with shrimps, egg, pork, choy, cabbage. Noodles fave or trying
                        something completely new, we want your tastebuds to be your happy buds.
                    </p>
                    <h3 className="text-xl font-bold mt-2">{name}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <p>300g/530 kcal</p>
                        <p>1 portion</p>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/images/Thalitwo.png"
                                alt="restaurant"
                                width={30}
                                height={30}
                                className="object-cover rounded-full"
                            />
                            <div>
                                <p className="text-sm font-medium">Chin Club</p>
                                <p className="text-xs text-gray-400">3.1 km from you</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="text-yellow-400 text-sm">★★★★★</span>
                            <span className="text-gray-400 text-sm ml-1">(4.5)</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="text-left">
                            <p className="text-sm text-gray-400 line-through">$9.20</p>
                            <p className="text-lg font-bold text-green-500">{price}</p>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 5v14m7-7H5"
                                />
                            </svg>
                            Add to cart
                        </button></div>

                </div>
            </div>
        </div>
    );
};

export default Card;
