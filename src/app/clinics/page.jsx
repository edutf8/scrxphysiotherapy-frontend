"use client"

import Map from '../components/Map';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { useState } from 'react';

export default function Clinics() {
    const clinics = [
        {
            title: "Ravelin Sports Centre",
            description: "The South Coast Rx clinic is based in Portsmouth’s newest and most advanced leisure centre...",
            address: "Ravelin Sports Centre, Cambridge Rd, Portsmouth PO1 2LQ",
            parkingInfo: "Free parking of up to 90 minutes is provided at the University of Portsmouth Ravelin Centre. Please see the centre reception after your appointment for a ticket.",
            coordinates: [-1.0984100389059392, 50.792669006490684]
        },
        {
            title: "Alexandra Sports",
            description: "South Coast Rx are delighted to partner one of the UK’s leading running specialist retailers...",
            address: "Alexandra Sports, 40 Gladys Ave, Hilsea, Portsmouth PO2 9BL",
            coordinates: [-1.0874, 50.8241]
        }
    ];

    return (
        <div className={"bg-gray-100 min-h-screen flex flex-col"}>
            <section id={"navigation"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"clinics"}>
                <div className={"container mx-auto mb-5 flex-grow"}>
                    {clinics.map((clinic, index) => (
                        <ClinicCard key={index} clinic={clinic} />
                    ))}
                </div>
            </section>
            <section id={"call-to-action"}>
                <div className="mx-auto mt-5">
                    <CTA/>
                </div>
            </section>
            <section id={"footer"}>
                <Footer />
            </section>
        </div>
    );
}

function ClinicCard({ clinic }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border rounded-md p-4 mb-4 shadow-md bg-white">
            <h2 className="text-lg font-semibold">{clinic.title}</h2>
            <p className="text-sm text-gray-600">{clinic.address}</p>
            <button
                className="mt-2 text-blue-500 hover:underline"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Collapse" : "Click to expand"}
            </button>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)' }}
            >
                <p className="mt-2 text-sm text-gray-700">{clinic.description}</p>
                {clinic.parkingInfo && (
                    <p className="mt-2 text-xs text-gray-500">{clinic.parkingInfo}</p>
                )}
                <div className="mt-3 h-64">
                    <Map coordinates={clinic.coordinates} title={clinic.title} />
                </div>
            </div>
        </div>
    );
}
