import Link from "next/link";
import React from "react";

export default function CTA() {
    return (
        <section className="bg-blue-600 text-white py-6 md:py-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Experience the Difference?</h2>
                <p className="text-lg mb-8">
                    Book your appointment now and start your journey to better health and well-being.
                </p>
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