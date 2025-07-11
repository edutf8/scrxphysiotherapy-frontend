"use client";

import { useState, useEffect } from 'react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative mx-auto mb-3" style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '200px' }}>
            <img
                src={`/${images[currentIndex]}`}
                alt={`Clinic image ${currentIndex + 1}`}
                className="w-auto h-1/2 max-w-full max-h-full object-contain mx-auto rounded-md"
            />
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-1 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-1 rounded-full"
            >
                ›
            </button>
        </div>
    );
}
