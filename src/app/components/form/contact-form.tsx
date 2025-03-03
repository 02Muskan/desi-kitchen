"use client";
import React, { useState } from "react";
import OrderDetailsModal from "./Modalorder"; // Import the modal component

const ContactForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderItems, setOrderItems] = useState([{ item: "Pizza", quantity: 1 }]);

    const handleItemChange = (index, key, value) => {
        const updatedItems = [...orderItems];
        updatedItems[index][key] = value;
        setOrderItems(updatedItems);
    };

    const addOrderItem = () => {
        setOrderItems([...orderItems, { item: "", quantity: 1 }]);
    };

    const removeOrderItem = (index) => {
        const updatedItems = orderItems.filter((_, i) => i !== index);
        setOrderItems(updatedItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Details Submitted:", {
            name: e.target.name.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            orderItems,
        });
        alert("Order placed successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent border rounded-[70px]">

            <div className="w-[550px] h-[550px] bg-[#FFF8DB] border-2 border-gradient-to-r from-red-400 to-yellow-500   rounded-full flex items-center justify-center">

                <div
                    onSubmit={handleSubmit}
                    className="size-[97%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 rounded-full flex flex-col items-center   gap-6 p-4 shadow-md"
                >
                    <h2 className="text-xl font-bold text-[#607274] px-4">Order Form</h2>
                    <div className="w-[90%] p-3">
                        <label className="block font-bold text-gray-700 px-5">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-2 mt-1 rounded-full border-2 border-gradient-to-r from-red-400 to-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="w-[90%] px-4">
                        <label className="block font-bold text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            className="w-full p-2 mt-1 rounded-full border-2 border-gradient-to-r from-red-400 to-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="w-[90%] px-2">
                        <label className="block font-bold text-gray-700">Address</label>
                        <textarea
                            name="address"
                            placeholder="Enter your address"
                            className="w-full  p-2  mt-1 rounded-full border-2 border-gradient-to-r from-red-400 to-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        ></textarea>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="px-4 py-2 bg-amber-100 text-yellow-800 font-semibold rounded-full hover:bg-yellow-200 hover:scale-105 transition-all"
                        >
                            View Your Order
                        </button>

                        <button
                            type="submit"
                            className="relative inline-flex items-center justify-center  px-4 overflow-hidden font-medium text-yellow-800 transition duration-300 bg-amber-100  ease-out border-2 border-gradient-to-r from-red-400 to-yellow-500 rounded-full shadow-md group"
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-yellow-800 hover:bg-yellow-200 duration-300 -translate-x-full group-hover:translate-x-0 ease">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-yellow-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                                Place Order
                            </span>
                            <span className="relative invisible">Place Order</span>
                        </button>

                    </div>
                </div>
            </div>
            <OrderDetailsModal
                isModalOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                orderItems={orderItems}
                handleItemChange={handleItemChange}
                addOrderItem={addOrderItem}
                removeOrderItem={removeOrderItem}
            />
        </div>
    );
};

export default ContactForm;
