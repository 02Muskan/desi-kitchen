import React, { useState } from "react";
import Image from "next/image";

const Rightside = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const circleColors = ["#F56C6C", "#E6A23C", "#67C23A", "#909399", "#409EFF"];

    const thaliPositions = [
        { left: "10%", top: "70%" },
        { left: "28%", top: "32%" },
        { left: "50%", top: "20%" },
        { left: "73%", top: "34%" },
        { left: "90%", top: "70%" },
    ];

    const thaliImages = [
        "/images/ThaliOne.png",
        "/images/Thalitwo.png",
        "/images/Thalithree.png",
        "/images/Thalifour.png",
        "/images/Thalitwo.png",
    ];

    const rotateThalis = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === "right") {
                return (prevIndex + 1) % thaliImages.length;
            } else {
                return (prevIndex - 1 + thaliImages.length) % thaliImages.length;
            }
        });
    };

    return (
        <div className=" h-[800px] flex items-center justify-center">
            <div
                className="absolute  w-full h-full z-0 rounded-full opacity-90 -top-[253px] left-12"
                style={{
                    background: `radial-gradient(circle, ${circleColors[currentIndex]} 60%, transparent 100%)`,
                }}
            ></div>
            <div className="absolute w-[700px] h-[450px] flex items-center justify-center top-[10rem]">
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
            <div className="relative flex items-center justify-center gap-4 -bottom-[10rem]">
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => rotateThalis("left")}
                >
                    <Image
                        src="/images/Ellipse 9.png"
                        alt="Left Spoon"
                        width={80}
                        height={40}
                    />
                    <Image
                        src="/images/Vector 1.png"
                        alt="Left Handle"
                        width={40}
                        height={80}
                    />
                </div>
                <div className="relative flex items-center">
                    <Image
                        src={thaliImages[currentIndex]}
                        alt="Thali"
                        width={200}
                        height={200}
                        className="absolute -top-40 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg transition-all duration-500"
                    />
                    <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-500 transition relative z-10">
                        Explore Now
                    </button>
                </div>
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => rotateThalis("right")}
                >
                    <Image
                        src="/images/Vector 2.png"
                        alt="Right Handle"
                        width={40}
                        height={80}
                    />
                    <Image
                        src="/images/Ellipse 11.png"
                        alt="Right Spoon"
                        width={80}
                        height={40}
                    />
                </div>
            </div>
        </div>
    );
};

export default Rightside;
