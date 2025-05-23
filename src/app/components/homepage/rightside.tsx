import React, { useState } from "react";
import Image from "next/image";

const Rightside = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const circleColors = ["#F56C6C", "#E6A23C", "#67C23A", "#909399", "#409EFF"];
  const thaliPositions = [
    { left: "15%", top: "62%" },
    { left: "33%", top: "36%" },
    { left: "50%", top: "24%" },
    { left: "67%", top: "36%" },
    { left: "85%", top: "62%" },
  ];

  const thaliImages = [
    "/images/ThaliOne.png",
    "/images/Thalitwo.png",
    "/images/Thalithree.png",
    "/images/Thalifour.png",
    "/images/Thalitwo.png",
  ];

  const rotateThalis = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev === 0 ? thaliImages.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === thaliImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="h-[920px] flex items-center justify-center relative">
      <div
        className="absolute w-[90%] h-[780px] rounded-full -top-[220px] left-28"
        style={{
          background: `radial-gradient(circle, ${circleColors[currentIndex]} 80%, transparent 20%)`,
        }}
      ></div>

      <div className="absolute w-[700px] h-[450px] flex items-center justify-center top-[11rem] right-[5rem]">
        {thaliPositions.map((position, index) => {
          const adjustedIndex = (index - currentIndex + thaliImages.length) % thaliImages.length;

          return (
            <div
              key={index}
              className="absolute transition-all duration-500"
              style={{
                left: thaliPositions[adjustedIndex].left,
                top: thaliPositions[adjustedIndex].top,
                transform: "translate(-50%, -50%)",
                opacity: adjustedIndex < thaliPositions.length ? 1 : 0,
              }}
            >
              <Image
                src={thaliImages[index]}
                alt={`Thali ${index + 1}`}
                width={100}
                height={100}
                className="rounded-full shadow-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Center Thali with Zoom Effect */}
      <div className="relative flex items-center justify-center gap-4 -bottom-[10rem]">
        {/* Left Arrow */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => rotateThalis("left")}
        >
          <Image src="/images/Ellipse 9.png" alt="Left Spoon" width={80} height={40} />
          <Image src="/images/Vector 1.png" alt="Left Handle" width={40} height={80} />
        </div>

        {/* Center Image with Zoom */}
        <div className="relative flex flex-col items-center">
          <Image
            src={thaliImages[currentIndex]}
            alt="Thali"
            width={220}
            height={220}
            className={`absolute -top-36 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg transition-all duration-500 ${
              zoom ? "scale-150 opacity-100" : "scale-100 opacity-100"
            }`}
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          />
          <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-500 transition relative z-10 mt-4">
            Explore Now
          </button>
        </div>

        {/* Right Arrow */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => rotateThalis("right")}
        >
          <Image src="/images/Vector 2.png" alt="Right Handle" width={40} height={80} />
          <Image src="/images/Ellipse 11.png" alt="Right Spoon" width={80} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Rightside;
