import Link from "next/link";
import React from "react";

export default function CTA() {
    return (
        <section className="bg-blue-600 text-white py-3 md:py-4">
            <div className="container mx-auto px-4 text-center">
                <p className="text-lg">South Coast Rx Physiotherapy<br/>We keep you doing the things you love</p>
                <h1 className="text-2xl md:text-3xl font-semibold mt-4 mb-4 uppercase">
                    Start your recovery with South Coast Rx today
                </h1>
                <Link href="/https://south-coast-rx-physiotherapy12.selectandbook.com/">
                    <button
                        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                        Book Now
                    </button>
                </Link>
            </div>
        </section>
    )
}