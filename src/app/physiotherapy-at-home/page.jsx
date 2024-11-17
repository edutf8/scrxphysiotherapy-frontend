import Image from 'next/image';
import { FaHome, FaWalking, FaClipboardList } from 'react-icons/fa';
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import React from "react";

export default function PhysiotherapyAtHome() {
    return (
        <div className="bg-gray-100">
            <section id={"navigation-section"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"main-content"} className={"container mx-auto"}>
                {/* Hero Section */}
                <div className="relative w-full h-72">
                    <Image
                        src="/path-to-your-image.jpg" // Replace with the actual image path
                        alt="Physiotherapist working with a client in a home setting"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-b-lg"
                    />
                </div>

                {/* Introduction Section */}
                <section className="px-6 py-10 max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Physiotherapy at Home
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Whether you have recently been discharged from hospital, or struggling
                        with long-term pain, discomfort or immobility, we will be able to
                        help you. Our home Physiotherapy assessment and rehabilitation service
                        is led by a band 7 NHS Physiotherapist who has a wealth of experience
                        of working in Elderly Medicine.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Each initial consultation will include a comprehensive assessment and
                        rehabilitation plan tailored to your goals.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Our service currently supports people living in a PO1-PO6 postcode.
                    </p>
                </section>

                {/* Services Section */}
                <section className="bg-white py-10">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                            Services Offered
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <div
                                className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <FaHome className="text-blue-600 text-5xl mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Home Assessments
                                </h3>
                            </div>

                            {/* Service 2 */}
                            <div
                                className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <FaWalking className="text-blue-600 text-5xl mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    1:1 Rehabilitation
                                </h3>
                            </div>

                            {/* Service 3 */}
                            <div
                                className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <FaClipboardList className="text-blue-600 text-5xl mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Equipment Ordering
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="px-6 py-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        Pricing
                    </h2>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <p className="text-lg text-gray-700">
                            <strong>Initial appointment:</strong> £95
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            <strong>Follow-up (1 hour):</strong> £75
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            <strong>Follow-up (30 minutes):</strong> £50
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-10">
                    <a
                        href="/enquiry" // Update with the actual enquiry page URL
                        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Make an Enquiry
                    </a>
                </section>
            </section>
        </div>
    );
}
