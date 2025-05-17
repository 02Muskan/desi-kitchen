import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Placeorder = ({ isModalOpen, onClose }) => {
    const router = useRouter();

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="relative w-[450px] h-[500px] bg-white border rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 border rounded-full px-2 py-1"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="relative">
                    <Image
                        src="/images/check_15578688.gif"
                        alt="Order Placed"
                        width={290}
                        height={250}
                        className="rounded-full bg-transparent"
                    />
                    {/* <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                        ✅
                    </div> */}
                </div>
                <h2 className="text-2xl font-bold text-gray-700 mt-6">Order Placed Successfully!</h2>
                <p className="text-gray-500 text-center mt-2">
                    Your delicious meal is on the way. Get ready to enjoy your food!
                </p>
                <button
                    className="mt-6 text-orange-300 underline font-semibold rounded-full hover:text-yellow-400 transition"
                    onClick={() => {
                        onClose();
                        router.push("/home");
                    }}
                >
                    If You Close This window You will be redirected to Home
                </button>
            </div>
        </div>
    );
};

export default Placeorder;
