"use client";

import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('https://south-coast-rx-physiotherapy12.selectandbook.com/');
    };

    return (
        <div
            className="flex justify-center items-center mx-auto relative text-white text-center py-20 px-4 bg-black bg-opacity-50 overflow-hidden"
            style={{
                backgroundImage: "url('https://scrxcdn.fra1.cdn.digitaloceanspaces.com/luke.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '768px',
            }}
        >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
            <div className="relative flex flex-col justify-center items-center h-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">We keep you doing the things you love.</h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl">
                    South Coast Rx is a Private Physiotherapy practice located in Portsmouth.
                    <br/>
                    We are a team of experienced clinicians who love sport and exercise.
                    <br/>
                    We specialise in rehabilitation and believe passionately in an active
                    <br/>
                    treatment approach with one central goal - <strong>to keep you doing the things you love.</strong>
                </p>
                <button className="mt-5 p-[3px] text-lg sm:text-xl md:text-xl relative" onClick={handleClick}>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"/>
                    <div
                        className="px-8 py-2 bg-blue-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Book Today
                    </div>
                </button>
                <a href="/contact" className="text-sm sm:text-base underline pt-4">
                    Unsure? Contact us today.
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
