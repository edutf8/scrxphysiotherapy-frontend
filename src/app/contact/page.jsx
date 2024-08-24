"use client"

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import {useState} from "react";
import CTA from "../components/CTA";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.subject) errors.subject = 'Subject is required';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        try {
            //await axios.post('/api/contact', formData);
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={"bg-gray-100 min-h-screen flex flex-col"}>
            <section id={"navigation"}>
                <Navbar />
                <Header />
            </section>
            <section id={"contact"}>
                <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg mb-10">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
                    {submitted ? (
                        <div className="text-green-500">Thank you for your message!</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    placeholder={"John Smith"}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    placeholder={"example@example.com"}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">Subject</label>
                                <input
                                    placeholder={"General Enquiry"}
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.subject ? 'border-red-500' : ''}`}
                                />
                                {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone</label>
                                <input
                                    placeholder={"01234 567890"}
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    placeholder={"Your message here..."}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                                    rows="5"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
            <section id={"call-to-action"}>
                <CTA />
            </section>
            <section id={"footer"}>
                <Footer />
            </section>
        </div>
    );
}