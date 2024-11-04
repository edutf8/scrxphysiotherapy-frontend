"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg p-5 z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:flex space-x-8">
                            <Link href="/services" className="text-gray-800 hover:text-blue-600 transition duration-300">Services</Link>
                            <Link href="/physio-at-home" className="text-gray-800 hover:text-blue-600 transition duration-300">Physiotherapy At Home</Link>
                            <Link href="/clinics" className="text-gray-800 hover:text-blue-600 transition duration-300">Clinics</Link>
                            <Link href="/team" className="text-gray-800 hover:text-blue-600 transition duration-300">Team</Link>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src={"/SCRx-logo.jpeg"}
                                alt={"logo"}
                                className={"w-48 md:w-48 lg:w-72 mx-auto"}
                                width={300} height={500}
                            />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <div className="hidden md:flex space-x-8">
                            <Link href="/first-aid-4-sport" className="text-gray-800 hover:text-blue-600 transition duration-300">First Aid 4 Sport</Link>
                            <Link href="/education" className="text-gray-800 hover:text-blue-600 transition duration-300">Education</Link>
                            <Link href="/vision" className="text-gray-800 hover:text-blue-600 transition duration-300">Vision</Link>
                            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact Us</Link>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-800 hover:text-blue-600 focus:outline-none ml-auto"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center z-50">
                        <Link href="/services" className="block text-gray-800 hover:text-blue-600">Services</Link>
                        <Link href="/physio-at-home" className="block text-gray-800 hover:text-blue-600">Physiotherapy At Home</Link>
                        <Link href="/clinics" className="block text-gray-800 hover:text-blue-600">Clinics</Link>
                        <Link href="/team" className="block text-gray-800 hover:text-blue-600">Team</Link>
                        <Link href="/first-aid-4-sport" className="block text-gray-800 hover:text-blue-600">First Aid 4 Sport</Link>
                        <Link href="/education" className="block text-gray-800 hover:text-blue-600">Education</Link>
                        <Link href="/vision" className="block text-gray-800 hover:text-blue-600">Vision</Link>
                        <Link href="/contact" className="block text-gray-800 hover:text-blue-600">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
