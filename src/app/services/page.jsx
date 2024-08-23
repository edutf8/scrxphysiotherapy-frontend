"use client";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
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
                <div className={"container mx-auto mt-10"}>
                    <CallToAction/>
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

const images = [
    "https://via.placeholder.com/200x150?text=1",
    "https://via.placeholder.com/200x150?text=2",
    "https://via.placeholder.com/200x150?text=3",
    "https://via.placeholder.com/200x150?text=4",
    "https://via.placeholder.com/200x150?text=5",
    "https://via.placeholder.com/200x150?text=6",
    "https://via.placeholder.com/200x150?text=7",
    "https://via.placeholder.com/200x150?text=8"
];

const testimonials = [
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Charles Dickens",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "William Shakespeare",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Edgar Allan Poe",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Jane Austen",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Herman Melville",
    },
];