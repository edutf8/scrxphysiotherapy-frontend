import Head from 'next/head';
import Map from '../components/Map';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Clinics() {
    return (
        <div className={"bg-white min-h-screen"}>
            <section id={"navigation"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"clinics"}>

            </section>
            <section id={"map"}>
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center min-h-screen py-2">
                        <Map/>
                    </div>
                </div>
            </section>
            <section id={"footer"}>
                <Footer />
            </section>
        </div>
);
}