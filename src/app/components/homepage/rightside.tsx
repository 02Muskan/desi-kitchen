import React from "react";
import Image from "next/image";

const Rightside = () => {
    return (
        <div className="relative w-full h-[800px] flex items-center justify-center">
            <div
                className="absolute w-[700px] h-[550px] border-t-2 border-dotted border-blue-500 rounded-t-full z-0 opacity-70 bottom-10 top-28"
                style={{ borderBottom: "none" }}
            ></div>
            <div className="absolute w-[700px] h-[450px] flex items-center justify-center top-36">
                <div
                    className="absolute"
                    style={{
                        left: "10%",
                        top: "70%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Image
                        src="/images/ThaliOne.png"
                        alt="Thali 1"
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                    />
                </div>
                <div
                    className="absolute"
                    style={{
                        left: "28%",
                        top: "32%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Image
                        src="/images/ThaliOne.png"
                        alt="Thali 2"
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                    />
                </div>
                <div
                    className="absolute"
                    style={{
                        left: "50%",
                        top: "20%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Image
                        src="/images/ThaliOne.png"
                        alt="Thali 3"
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                    />
                </div>
                <div
                    className="absolute"
                    style={{
                        left: "73%",
                        top: "34%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Image
                        src="/images/ThaliOne.png"
                        alt="Thali 4"
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                    />
                </div>
                <div
                    className="absolute"
                    style={{
                        left: "90%",
                        top: "70%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Image
                        src="/images/ThaliOne.png"
                        alt="Thali 5"
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                    />
                </div>
            </div>
            <div className="absolute flex items-center justify-center gap-4 bottom-20">
                <div className="flex items-center">
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
                <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-500 transition">
                    Explore Now
                </button>
                <Image
                    src="/images/ThaliOne.png"
                    alt="Thali 1"
                    width={100}
                    height={100}
                    className="rounded-full shadow-lg"
                />
                <div className="flex items-center">
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
