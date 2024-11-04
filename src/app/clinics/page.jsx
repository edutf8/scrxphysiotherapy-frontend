import Head from 'next/head';
import Map from '../components/Map';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClinicCardsLayout from "../components/ClinicCardsLayout";
import CTA from "../components/CTA";

export default function Clinics() {
    const clinics = [
        {
            title: "Ravelin Sports Centre",
            description: "The South Coast Rx clinic is based in Portsmouth’s newest and most advanced leisure centre. With a spacious and modern clinic room, 175 station gym, 25 metre pool, climbing wall, ski simulator and cafe; this is the perfect environment to recover, rehabilitate and optimise performance with SCRx",
            address: "Ravelin Sports Centre, Cambridge Rd, Portsmouth PO1 2LQ"
        },
        {
            title: "Alexandra Sports",
            description: "South Coast Rx are delighted to partner one of the UK’s leading running specialist retailers to provide a Physiotherapy service which is run out of the clinic room located on the first floor. <br />" +
                "<br />" +
                "Alexandra Sports pride themselves on industry leading technology, product knowledge and most of all, customer service. If you are a keen runner, triathlete or simply live in the north of Portsmouth, this is a great environment to be assessed by one of our expert team. ",
            address: "Alexandra Sports, 40 Gladys Ave, Hilsea, Portsmouth PO2 9BL"
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
                    <ClinicCardsLayout clinics={clinics} />
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