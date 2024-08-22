"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useState} from "react";

const fetchData = async () => {
    try {
        const response = await fetch('https://scrxcdn.fra1.cdn.digitaloceanspaces.com/faq.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        // Check if the data is an array, if not, convert it into an array
        const dataArray = Array.isArray(data) ? data : [data];

        console.log('Data as array:', dataArray);
        return dataArray;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default function FAQ() {
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [faqData, setFaqData] = useState([]);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    React.useEffect(() => {
        fetchData().then(data => {
            setFaqData(data);
        });
    });

    if (!Array.isArray(faqData) || !faqData.length) return <div>Loading...</div>; // Handle the loading state

    return (
        <div className={"bg-white min-h-screen"}>
            <section id={"navigation"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"team"}>
                <div className={"container mx-auto max-w-2xl mt-10 p-6"}>
                    <h2 className={"text-3xl font-bold mb-6 text-gray-900"}>Frequently Asked Questions</h2>
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`mb-4 p-4 bg-white shadow-md rounded-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-16'}`}
                            onClick={() => handleClick(index)}
                        >
                            <h3 className={"text-lg font-semibold text-gray-900"}>{faq.question}</h3>
                            <p className={`mt-2 text-gray-700 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id={"footer"}>
                <Footer/>
            </section>
        </div>
    )
}