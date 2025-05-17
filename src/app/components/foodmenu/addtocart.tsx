import React from "react";
import { X, Trash2, Minus, Plus } from "lucide-react";
import Image from "next/image";

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems?: CartItem[];
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems = [
    {
        id: 1,
        name: "Standard Veg Thali",
        price: 10.99,
        image: "/images/ThaliOne.png",
        quantity: 1,
    },
] }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div
            className={`fixed top-0 right-0 h-screen w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart ({cartItems.length})</h2>
                <button onClick={onClose}>
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div className="px-4 py-2 text-gray-500 text-sm border-b">
                Review your items and proceed to checkout.
            </div>

            <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="rounded-md"
                        />
                        <div className="flex-1 ml-3">
                            <h3 className="font-medium text-sm text-green-900">{item.name}</h3>
                            <p className="text-xs text-gray-500">₹{item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="border rounded px-2 py-0.5 text-sm"><Minus className="w-3 h-3" /></button>
                            <span className="text-sm">{item.quantity}</span>
                            <button className="border rounded px-2 py-0.5 text-sm"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button className="ml-3 text-gray-400 hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t p-4 bg-white">
                <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="font-medium">Total:</span>
                    <span className="text-orange-600 font-semibold">₹{total.toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 border border-red-500 text-red-500 text-sm py-2 rounded">
                        <Trash2 className="w-4 h-4" /> Clear Cart
                    </button>
                    <button className="flex-1 bg-orange-500 text-white text-sm py-2 rounded hover:bg-orange-600 transition">
                        Checkout & Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
