"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

const fetchData = async () => {
    try {
        const response = await fetch('https://scrxcdn.fra1.cdn.digitaloceanspaces.com/services.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export function ServiceCard() {
    const [cards, setCards] = useState([]);
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        fetchData().then(setCards);
    }, []);

    useOutsideClick(ref, () => setActive(null));

    if (!cards.length) return <div>Loading...</div>;

    return (
        <>
            <AnimatePresence>
                {active && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 h-full w-full z-10"
                        />
                        <div className="fixed inset-0 grid place-items-center z-[100]">
                            <motion.div
                                layoutId={`card-${active.id}`}
                                ref={ref}
                                className="bg-white dark:bg-neutral-900 p-4 rounded-xl max-w-[500px]"
                            >
                                <Image
                                    src={active.image}
                                    alt={active.title}
                                    layout="responsive"
                                    width={1328}
                                    height={768}
                                    className="rounded-lg"
                                />
                                <h3 className="text-lg font-bold mt-4">{active.title}</h3>
                                <p className="text-sm mt-2">{active.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {active?.prices &&
                                        Object.entries(active.prices).map(([priceType, value]) => {
                                            if (priceType === "session_lengths" && Array.isArray(value) && value.length > 0) {
                                                return (
                                                    <li key={priceType}>
                                                        <h4 className="font-bold mt-2">Session Lengths</h4>
                                                        {value.map(({length, original, discounted}) => (
                                                            <div key={length} className="flex justify-between">
                                                                <span>{length}</span>
                                                                <span>
                                    <s className={discounted ? "mr-2 text-red-500" : ""}>£{original}</s>
                                                                    {discounted && <span>£{discounted}</span>}
                                </span>
                                                            </div>
                                                        ))}
                                                    </li>
                                                );
                                            }

                                            if (priceType === "bulk_packages" && Array.isArray(value) && value.length > 0) {
                                                return (
                                                    <li key={priceType}>
                                                        <h4 className="font-bold mt-2">Bulk Packages</h4>
                                                        {value.map(({quantity, price_per_session, discount}) => (
                                                            <div
                                                                key={quantity}
                                                                className="tooltip"
                                                                data-tooltip={discount}
                                                            >
                                                                {quantity} sessions @ £{price_per_session} each
                                                            </div>
                                                        ))}
                                                    </li>
                                                );
                                            }

                                            if (typeof value === "object" && value?.original) {
                                                return (
                                                    <li key={priceType} className="flex justify-between">
                                                        <span
                                                            className="capitalize">{priceType.replace(/_/g, " ")}</span>
                                                        <span>
                            <s className={value.discounted ? "mr-2 text-red-500" : ""}>
                                £{value.original}
                            </s>
                                                            {value.discounted && <span>£{value.discounted}</span>}
                        </span>
                                                    </li>
                                                );
                                            }

                                            return null; // Skip rendering if the price type doesn't match expected formats
                                        })}
                                </ul>

                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        onClick={() => setActive(card)}
                        className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden p-4"
                    >
                        <Image
                            src={card.image}
                            alt={card.title}
                            layout="responsive"
                            width={1328}
                            height={768}
                            className="rounded-lg"
                        />
                        <h3 className="font-bold mt-4 text-center">{card.title}</h3>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}
