"use client";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import {ServiceCard} from "../components/ServiceCard";


export default function Services() {
    return (
        <div className={"bg-white min-h-screen flex flex-col mb-5"}>
            <section id={"navigation-section"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"services"}>
                <div className={"container mx-auto"}>
                    <ServiceCard />
                </div>
            </section>
            <section id={"call-to-action"}>
                <div className={"mx-auto mt-10"}>
                    <CTA />
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