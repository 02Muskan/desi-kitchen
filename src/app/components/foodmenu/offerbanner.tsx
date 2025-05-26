import React from "react";
import Image from "next/image";

const OfferBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#F9655B] to-[#EE821A] rounded-[70px] flex items-center justify-between w-full overflow-hidden text-white">
      <div className="pl-4 pb-5 pt-4 ml-6">
        {/* Animated Badge */}
        <div className="absolute top-[1rem] left-[3rem] bg-yellow-100 text-red-500 text-xs font-semibold px-4 py-1 rounded-full animate-pulse scale-105 transition-transform duration-500 ease-in-out">
          Limited Time Offer
        </div>

        {/* Content with spacing from the badge */}
        <div className="flex-1 pr-6 mt-10">
          {" "}
          {/* Add mt-10 here */}
          <h2 className="text-3xl font-bold mb-2">
            20% off on your first food
          </h2>
          <p className="text-white mb-4">
            Customers get 20% off their first order
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-[#F9655B] px-5 py-2 rounded-md font-semibold hover:bg-gray-100">
              Order Now
            </button>
            <button className="border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-[#F9655B] transition">
              View All Offers
            </button>
          </div>
        </div>
      </div>

      {/* Right Image flush to the edge */}
      <div className="h-52 w-1/2 flex-shrink-0">
        <Image
          src="/images/homepage.png"
          alt="food"
          width={600}
          height={208}
          className="object-cover h-full w-full rounded-r-[70px]"
        />
      </div>
    </div>
  );
};

export default OfferBanner;
