"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const fetchData = async () => {
    try {
        const response = await fetch("https://scrxcdn.fra1.cdn.digitaloceanspaces.com/services.json");
        if (!response.ok) {
            throw new Error("Failed to fetch services.");
        }
        const data = await response.json();
        console.log("Fetched services:", data); // Debug fetched data
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
};

export function ServiceCard() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        fetchData()
            .then((data) => {
                if (data) {
                    setServices(Array.isArray(data) ? data : [data]);
                    setError(false);
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    // Helper function to safely format prices
    const formatPrice = (price) => {
        if (price === null || price === undefined) return "N/A";
        return Number.isInteger(price) ? `£${price}` : `£${Number(price).toFixed(2)}`;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="spinner border-t-blue-600 border-4 border-solid rounded-full w-12 h-12 animate-spin"></div>
            </div>
        );
    }

    if (error || !services || services.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500 text-lg font-semibold">Failed to load services, please try again.</p>
            </div>
        );
    }

    return (
        <>
            {/* Collapsed Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        layout
                        onClick={() => setActiveCard(service)}
                        className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden"
                        aria-labelledby={`${service.id}-title`}
                        role="button"
                        tabIndex={0}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={500}
                            height={300}
                            className="object-cover w-full h-48"
                        />
                        <div className="p-4">
                            <h3 id={`${service.id}-title`} className="font-bold text-lg text-center text-blue-600">
                                {service.title}
                            </h3>
                            {/* Price List */}
                            <ul className="mt-2 space-y-1">
                                {Object.entries(service.prices || {}).map(([priceType, value]) => {
                                    if (priceType === "bulk_packages") return null; // Skip bulk_packages in collapsed view

                                    if (Array.isArray(value)) {
                                        // Handle session lengths
                                        return value.map((item, idx) => (
                                            <li key={`${priceType}-${idx}`}>
                                                <span>{item.length}:</span>
                                                <span className="ml-2">
                                                    {item.discounted != null ? ( // Check for null and undefined
                                                        <>
                                                            <s className="text-red-500">{formatPrice(item.original)}</s>
                                                            <span className="ml-2 text-blue-600 font-medium">
                                                                {formatPrice(item.discounted)}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span className="text-blue-600 font-medium">
                                                            {formatPrice(item.original)}
                                                        </span>
                                                    )}
                                                </span>
                                            </li>
                                        ));
                                    } else if (typeof value === "object") {
                                        // Handle single prices (e.g., initial, follow_up)
                                        return (
                                            <li key={priceType}>
                                                <span className="capitalize">{priceType.replace(/_/g, " ")}:</span>
                                                <span className="ml-2">
                                                    {value.discounted != null ? (
                                                        <>
                                                            <s className="text-red-500">{formatPrice(value.original)}</s>
                                                            <span className="ml-2 text-blue-600 font-medium">
                                                                {formatPrice(value.discounted)}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span className="text-blue-600 font-medium">
                                                            {formatPrice(value.original)}
                                                        </span>
                                                    )}
                                                </span>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Expanded Card */}
            <AnimatePresence>
                {activeCard && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveCard(null)}
                        />
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center z-20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <div
                                className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative"
                                role="dialog"
                                aria-labelledby="service-dialog-title"
                            >
                                <button
                                    onClick={() => setActiveCard(null)}
                                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                                <Image
                                    src={activeCard.image}
                                    alt={activeCard.title}
                                    width={600}
                                    height={400}
                                    className="rounded-lg mb-4"
                                />
                                <h2 id="service-dialog-title" className="text-2xl font-bold text-blue-600 mb-4">
                                    {activeCard.title}
                                </h2>
                                <p className="text-gray-600">{activeCard.description}</p>
                                {/* Expanded Price List */}
                                <ul className="mt-4 space-y-2">
                                    {Object.entries(activeCard.prices || {}).map(([priceType, value]) => {
                                        if (Array.isArray(value)) {
                                            // Handle session lengths and bulk packages
                                            return value.map((item, idx) => (
                                                <li key={`${priceType}-${idx}`}>
                                                    {priceType === "session_lengths" && (
                                                        <span>{item.length}:</span>
                                                    )}
                                                    {priceType === "bulk_packages" && (
                                                        <span>{item.quantity} sessions:</span>
                                                    )}
                                                    <span className="ml-2">
                                                        {item.discounted != null ? (
                                                            <>
                                                                <s className="text-red-500">
                                                                    {formatPrice(item.original)}
                                                                </s>
                                                                <span className="ml-2 text-blue-600 font-medium">
                                                                    {formatPrice(item.discounted)}
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <span className="text-blue-600 font-medium">
                                                                {formatPrice(item.original)}
                                                            </span>
                                                        )}
                                                        {priceType === "bulk_packages" && item.discount && (
                                                            <span className="ml-2 text-green-600">
                                                                ({item.discount})
                                                            </span>
                                                        )}
                                                    </span>
                                                </li>
                                            ));
                                        } else if (typeof value === "object") {
                                            // Handle single prices (e.g., initial, follow_up)
                                            return (
                                                <li key={priceType}>
                                                    <span className="capitalize">
                                                        {priceType.replace(/_/g, " ")}:
                                                    </span>
                                                    <span className="ml-2">
                                                        {value.discounted != null ? (
                                                            <>
                                                                <s className="text-red-500">
                                                                    {formatPrice(value.original)}
                                                                </s>
                                                                <span className="ml-2 text-blue-600 font-medium">
                                                                    {formatPrice(value.discounted)}
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <span className="text-blue-600 font-medium">
                                                                {formatPrice(value.original)}
                                                            </span>
                                                        )}
                                                    </span>
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
