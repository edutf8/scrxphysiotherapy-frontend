"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamLayout from "../components/TeamLayout";
import CTA from "../components/CTA";

export default function Team() {
    return (
        <div className={"bg-white min-h-screen flex flex-col"}>
            <section id={"navigation"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"team"}>
                <div className={"container mx-auto mt-5"}>
                    <TeamLayout />
                </div>
            </section>
            <section id={"call-to-action"}>
                <div className={"mx-auto mt-5"}>
                    <CTA />
                </div>
            </section>
            <section id={"footer"}>
                <Footer />
            </section>
        </div>
    )
}