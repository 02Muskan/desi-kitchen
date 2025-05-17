"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"

const About: React.FC = () => {
    return (
        <div className="relative flex items-center justify-between h-[70vh] bg-gradient-to-br from-yellow-300 to-yellow-100 border rounded-[70px] px-2 py-4">
            <div className="flex flex-col space-y-8 w-1/2">
                <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
                <div className="space-y-6 ">

                    <div className="flex items-center space-x-4 ">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex items-center space-x-4 ml-20"
                        >
                            <Image
                                src={"/images/romantic-dinner_14702310.png"}
                                alt="food"
                                width={60}
                                height={60}
                                className="object-cover rounded-full"
                            />
                            <div>
                                <h2 className="text-xl font-semibold text-yellow-600 ">Freshly Prepared with Love</h2>
                                <p className="text-lg text-gray-600 ">
                                    Every meal is made with the finest ingredients, bringing the warmth and taste of a home-cooked meal straight to your table.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex items-center space-x-4 ml-20">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex items-center space-x-4 ml-20"
                        >
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
                        </motion.div>
                    </div>


                    <div className="flex items-center space-x-4">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex items-center space-x-4 ml-20"
                        >
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
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="w-1/2 flex justify-center">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}

                >
                    <Image
                        src="/images/logo.jpg"
                        alt="Desi Kitchen Logo"
                        width={400}
                        height={400}
                        className="object-contain rounded-full shadow-lg border-4 border-yellow-600"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
