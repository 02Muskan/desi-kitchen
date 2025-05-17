"use client";

import React, { useState } from "react";
import { History, Repeat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";


const FavoritesSection: React.FC = () => {
    const favoriteItems = [
        {
            id: "burger",
            name: "Cheese Burger",
            imageUrl: "/images/ThaliOne.png",
            aiHint: "Fast food",
        },
        {
            id: "pizza",
            name: "Pepperoni Pizza",
            imageUrl: "/images/Thalitwo.png",
            aiHint: "Italian",
        },
        {
            id: "pasta",
            name: "Creamy Pasta",
            imageUrl: "/images/Thalithree.png",
            aiHint: "Comfort food",
        },
    ];

    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                    <History className="h-8 w-8 text-orange-500" /> Reorder Your Favorites
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {favoriteItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
                            onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.name}
                                        width={400}
                                        height={400}
                                        className="rounded-full overflow-hidden"
                                    />
                                </div>
                                <div className="flip-card-back flex flex-col items-center justify-center border-orange-400 border-2 bg-[#ffeedd]">
                                    <CardTitle className="text-lg font-semibold mb-3 text-gray-800">
                                        {item.name}
                                    </CardTitle>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-orange-500 text-orange-600 hover:bg-orange-100 hover:text-orange-800 rounded-full"
                                    >
                                        <Link href={`/menu#${item.id}`}>
                                            <Repeat className="mr-2 h-4 w-4" /> Reorder
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-xs text-gray-400 text-center mt-8">
                    (Favorites are simulated for demonstration)
                </p>
            </div>
        </div>
    );
};

export default FavoritesSection;
