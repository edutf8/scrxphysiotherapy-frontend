// pages/vision-and-values.jsx

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaUsers, FaTrophy, FaBalanceScale, FaHandsHelping } from 'react-icons/fa';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Vision() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <section id={"navigation"}>
                <Navbar/>
                <Header/>
            </section>
            <section
                className="relative bg-blue-600 text-white h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://via.placeholder.com/1920x1080?text=Hero+Background)',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                ></div>
                <div className="relative z-10 p-5 text-center max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                        At South Coast Rx, we strive to raise the bar for Physiotherapy and health and well-being
                        provision.
                    </h1>
                    <p className="text-xl md:text-2xl">
                        Our purpose is to improve the lives of others.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-50"></div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaUsers className="text-blue-600 w-12 h-12"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">People</h3>
                            <p className="text-gray-700 text-center">
                                The people we work with matter most. Our clients, staff, and stakeholders are at the
                                center of everything we do. We listen, provide support, and deliver individualized
                                services tailored to your goals.
                            </p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaTrophy className="text-blue-600 w-12 h-12"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Effort</h3>
                            <p className="text-gray-700 text-center">
                                We strive to raise the bar in everything we do. Committed to excellence, we continuously
                                improve our standards of care, client experience, and innovation within the field.
                            </p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaBalanceScale className="text-blue-600 w-12 h-12"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Integrity</h3>
                            <p className="text-gray-700 text-center">
                                We do what is right. Accountable and honest, we utilize evidence-based research and
                                continually engage in self-reflection to improve as individuals and as a company.
                            </p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <FaHandsHelping className="text-blue-600 w-12 h-12"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Together</h3>
                            <p className="text-gray-700 text-center">
                                We work together and are all united in our vision. Trusting, respecting, and caring for
                                each other, we collaborate to achieve our goal of raising the bar for physiotherapy and
                                health and well-being provision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-blue-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Our Collaborative Vision</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <Image
                                src="https://via.placeholder.com/600x400?text=Team+Collaboration"
                                alt="Team Collaboration"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <p className="text-lg text-gray-700 mb-4">
                                At South Coast Rx, our diverse team collaborates seamlessly to empower others in their
                                pursuit of health, well-being, and physical fitness. Through evidence-informed practice,
                                continuous self-reflection, and the integration of innovative technology and systems, we
                                achieve our shared vision.
                            </p>
                            <p className="text-lg text-gray-700">
                                Our commitment to teamwork and unity ensures that we provide the highest standard of
                                care, fostering an environment where everyone thrives together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Difference?</h2>
                    <p className="text-lg mb-8">
                        Book your appointment now and start your journey to better health and well-being.
                    </p>
                    <Link href="/contact">
                        <button
                            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                            Book Now
                        </button>
                    </Link>
                </div>
            </section>

            <section id={"footer"}>
                <Footer/>
            </section>
        </div>
    );
}
