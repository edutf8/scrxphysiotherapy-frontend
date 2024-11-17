import Image from 'next/image';
import { FaHome, FaWalking, FaClipboardList } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function PhysiotherapyAtHome() {
    return (
        <div className="bg-gray-100">
            <section id={"navigation-section"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"main-content"} className={"container mx-auto"}>
                <section
                    className="px-6 py-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/physio-at-home.jpg" // Replace with the actual image path
                            alt="Physiotherapist working with a client in a home setting"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                Physiotherapy at Home
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Whether you have recently been discharged from hospital, or struggling
                                with long-term pain, discomfort or immobility, we will be able to help
                                you. Our home Physiotherapy assessment and rehabilitation service is led
                                by a band 7 NHS Physiotherapist who has a wealth of experience of working
                                in Elderly Medicine.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Each initial consultation will include a comprehensive assessment and
                                rehabilitation plan tailored to your goals.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our service currently supports people living in a PO1-PO6 postcode.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Services Section */}
                <section className="py-10">
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
                <section className="px-6 py-10 max-w-4xl mx-auto text-center">
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
            <section id={"call-to-action"}>
                <div className={"mx-auto mt-10"}>
                    <CTA/>
                </div>
            </section>
            <section id={"footer"}>
                <div className={"mx-auto text-center"}>
                    <Footer/>
                </div>
            </section>
        </div>
    );
}
