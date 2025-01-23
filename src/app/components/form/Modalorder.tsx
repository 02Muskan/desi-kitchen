"use client";
import React from "react";

const OrderDetailsModal = ({
    isModalOpen,
    onClose,
    orderItems,
    handleItemChange,
    addOrderItem,
    removeOrderItem,
}) => {
    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[90%] max-w-lg bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-lg font-bold text-blue-900 mb-4">Your Order Details</h2>
                <ul>
                    {orderItems.map((orderItem, index) => (
                        <li key={index} className="flex items-center gap-4 mb-2">
                            <input
                                type="text"
                                value={orderItem.item}
                                onChange={(e) => handleItemChange(index, "item", e.target.value)}
                                placeholder="Item name"
                                className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none"
                            />
                            <input
                                type="number"
                                min="1"
                                value={orderItem.quantity}
                                onChange={(e) =>
                                    handleItemChange(index, "quantity", e.target.value)
                                }
                                className="w-[20%] p-2 rounded-md border border-gray-300 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => removeOrderItem(index)}
                                className="px-3 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                    <button
                        type="button"
                        onClick={addOrderItem}
                        className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600"
                    >
                        Add Item
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;
