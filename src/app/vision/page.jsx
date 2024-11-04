// app/vision-and-values/page.js

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaTrophy, FaBalanceScale, FaHandsHelping } from 'react-icons/fa';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CTA from "../components/CTA";

export default function Vision() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <section id="navigation">
                <Navbar />
                <Header />
            </section>

            <section className="relative h-[66vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/camanddan.png"
                    alt="Vision and Values Hero Image"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    className="z-0"
                />
                <div className="relative z-10 p-5 text-center max-w-3xl text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        At South Coast Rx, we strive to raise the bar for Physiotherapy and health and well-being provision.
                    </h1>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12">Our Vision & Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaUsers className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">People</h3>
                            <p className="text-gray-700 text-center">
                                The people we work with matter most. Our clients, staff, and stakeholders are at the center of everything we do. We listen, provide support, and deliver individualized services tailored to your goals.
                            </p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaTrophy className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">Effort</h3>
                            <p className="text-gray-700 text-center">
                                We strive to raise the bar in everything we do. Committed to excellence, we continuously improve our standards of care, client experience, and innovation within the field.
                            </p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaBalanceScale className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">Integrity</h3>
                            <p className="text-gray-700 text-center">
                                We do what is right. Accountable and honest, we utilize evidence-based research and continually engage in self-reflection to improve as individuals and as a company.
                            </p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaHandsHelping className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">Together</h3>
                            <p className="text-gray-700 text-center">
                                We work together and are all united in our vision. Trusting, respecting, and caring for each other, we collaborate to achieve our goal of raising the bar for physiotherapy and health and well-being provision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"our-purpose"}>
                <div className={"container mx-auto px-4 mt-10"}>
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12">Our Purpose</h2>
                    <div
                        className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <FaHandsHelping className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
                        </div>
                        <p className="text-gray-700 text-center">
                            To improve the lives of others
                        </p>
                    </div>
                </div>
            </section>
            <section id={"call-to-action"}>
                <div className={"mx-auto mt-5"}>
                    <CTA/>
                </div>
            </section>

            <section id="footer">
                <Footer/>
            </section>
        </div>
    );
}
