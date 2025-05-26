"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Placeorder = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center z-50 min-h-screen">
      <div className="bg-white w-full max-w-md mx-auto p-6 rounded-3xl shadow-2xl text-center animate-fade-in">
        <div className="flex justify-center">
          <Image
            src="/images/check_15578688.gif"
            alt="Order Placed"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-500 mt-2">
          Your delicious meal is on the way. Get ready to enjoy your food!
        </p>
        <button
          onClick={() => router.push("/home")}
          className="mt-6 text-orange-500 underline font-semibold hover:text-orange-600 transition-colors"
        >
          Close and go to Home
        </button>
      </div>
    </div>
  );
};

export default Placeorder;
