// pages/first-aid-4-sport.js
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function FirstAid4Sport() {
    return (
        <div className="bg-gray-100">
            <section id={"navigation-section"}>
                <Navbar/>
                <Header/>
            </section>
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Our Partnership with First Aid 4 Sport
                </h1>
                <p className="mt-4 text-gray-600">
                    South Coast Rx Physiotherapy is proud to work alongside First Aid 4
                    Sport. This collaboration enhances care for clients with expert rehab
                    services and top-tier sports injury supplies.
                </p>
            </div>

            {/* Content Section */}
            <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Supporting Your Recovery
                    </h2>
                    <p className="mt-4 text-gray-600">
                        As part of this sponsorship, First Aid 4 Sport provides SCRx
                        clients with 10% off purchases. Use the code{" "}
                        <span className="font-semibold text-blue-500">RXSC10</span> at
                        checkout on their website.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Together, we promote evidence-based injury management, recovery,
                        and prevention strategies through workshops and educational
                        initiatives.
                    </p>
                    <p className="mt-4 text-gray-600">
                        This partnership signifies our shared commitment to health and
                        wellness, ensuring top-tier care from prevention to recovery.
                    </p>
                    {/* Call to Action */}
                    <a
                        href="https://www.firstaid4sport.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Visit First Aid 4 Sport
                    </a>
                </div>

                {/* Image Section */}
                <div className="grid grid-cols-2 gap-4 relative">
                    <div className="col-span-1 relative">
                        <Image
                            src="/images/product1.jpg"
                            alt="First Aid 4 Sport product 1"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="col-span-1 relative top-10">
                        <Image
                            src="/images/product2.jpg"
                            alt="First Aid 4 Sport product 2"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="col-span-1 relative -top-6">
                        <Image
                            src="/images/product3.jpg"
                            alt="First Aid 4 Sport product 3"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <Image
                            src="/images/product4.jpg"
                            alt="First Aid 4 Sport product 4"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
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
