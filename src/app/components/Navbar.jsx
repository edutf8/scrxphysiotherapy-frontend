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
                            <Link href="/clinics" className="text-gray-800 hover:text-blue-600 transition duration-300">Clinics</Link>
                            <Link href="/team" className="text-gray-800 hover:text-blue-600 transition duration-300">Team</Link>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
                                >
                                    Partners
                                    <svg
                                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
                                        <Link href="/partners/partner1" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Partner 1</Link>
                                        <Link href="/partners/partner2" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Partner 2</Link>
                                        <Link href="/partners/partner3" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Partner 3</Link>
                                    </div>
                                )}
                            </div>
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
                            <Link href="/journey" className="text-gray-800 hover:text-blue-600 transition duration-300">Journey</Link>
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
                        <Link href="/clinics" className="block text-gray-800 hover:text-blue-600">Clinics</Link>
                        <Link href="/team" className="block text-gray-800 hover:text-blue-600">Team</Link>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="block w-full text-gray-800 hover:text-blue-600 flex justify-center"
                        >
                            Partners
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="bg-white border border-gray-300 shadow-lg rounded-lg z-50">
                                <Link href="/partners/partner1" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Partner 1</Link>
                                <Link href="/partners/partner2" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Partner 2</Link>
                                <Link href="/partners/partner3" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Partner 3</Link>
                            </div>
                        )}
                        <Link href="/journey" className="block text-gray-800 hover:text-blue-600">Journey</Link>
                        <Link href="/vision" className="block text-gray-800 hover:text-blue-600">Vision</Link>
                        <Link href="/contact" className="block text-gray-800 hover:text-blue-600">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
