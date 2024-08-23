"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamLayout from "../components/TeamLayout";

export default function Team() {
    return (
        <div className={"bg-white min-h-screen"}>
            <section id={"navigation"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"team"}>
                <div className={"container mx-auto"}>
                    <TeamLayout />
                </div>
            </section>
            <section id={"footer"}>
                <Footer />
            </section>
        </div>
    )
}