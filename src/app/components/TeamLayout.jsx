"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

const fetchData = async () => {
    try {
        const response = await fetch('https://scrxcdn.fra1.cdn.digitaloceanspaces.com/team.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        const dataArray = Array.isArray(data) ? data : [data];
        return dataArray;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export function TeamLayout() {
    const [teamData, setTeamData] = useState([]);
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        fetchData().then(data => {
            setTeamData(data);
        });
    }, []);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setActive(null);
            }
        };

        if (active) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    if (!Array.isArray(teamData) || !teamData.length) return <div>Loading...</div>;

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && typeof active === "object" && (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.div
                            layoutId={`card-${active.name}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.name}-${id}`}>
                                <Image
                                    layout={"responsive"}
                                    width={1328}
                                    height={768}
                                    src={active.image}
                                    alt={active.name}
                                    className="rounded-lg object-cover object-top"
                                    unoptimized
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <motion.h3
                                        layoutId={`name-${active.name}-${id}`}
                                        className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                                    >
                                        {active.name}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`position-${active.position}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400 text-base"
                                    >
                                        {active.position}
                                    </motion.p>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {active.description}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <ul className="container mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
                {teamData.map((team) => (
                    <motion.div
                        layoutId={`card-${team.name}-${id}`}
                        key={team.name}
                        onClick={() => setActive(team)}
                        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-5 transition duration-300 transform hover:shadow-2xl hover:-translate-y-2 mb-5">
                            <div className="flex gap-4 flex-col w-full">
                                <motion.div layoutId={`image-${team.name}-${id}`}>
                                    <Image
                                        layout={"responsive"}
                                        width={1328}
                                        height={768}
                                        src={team.image}
                                        alt={team.name}
                                        className="rounded-lg object-cover object-top"
                                        unoptimized
                                    />
                                </motion.div>
                                <div className="flex justify-center items-center flex-col">
                                    <motion.h3
                                        layoutId={`name-${team.name}-${id}`}
                                        className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                    >
                                        {team.name}
                                    </motion.h3>
                                    <motion.p className="text-neutral-600 dark:text-neutral-400">
                                        {team.position}
                                    </motion.p>
                                </div>
                            </div>
                            <div className="border-t-4 border-b-4 border-blue-500"></div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}
