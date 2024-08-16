import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InstagramGallery() {
    const [images, setImages] = useState([]);
    const [fetched, setFetched] = useState(false); // Flag to track if images have been fetched

    useEffect(() => {
        // Function to determine if the device is mobile
        const isMobileDevice = () => window.innerWidth <= 768;

        // Function to fetch images if on mobile and not already fetched
        const fetchImages = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
                if (!isMobileDevice() && !fetched) {
                    setImages(response.data.slice(0, 6));
                    setFetched(true); // Set the flag to true after fetching
                } else {
                    setImages(response.data.slice(0, 1));
                    setFetched(true); // Set the flag to true after fetching
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages(); // Call the async function inside useEffect
    }, [fetched]); // Dependency array includes 'fetched' to ensure it only runs once

    return (
        <div className={"flex justify-center items-center p-5"}>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-10"}>
                {images.map((image, index) => (
                    <div key={index} className={"max-w-sm rounded overflow-hidden shadow-lg"}>
                        <img src={image.url} alt={image.title} className={"w-full"} />
                        <div className={"px-6 py-4"}>
                            <div className={"font-bold text-xl mb-2"}>{image.title}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"mt-5 block md:hidden"}>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                >
                    Check Out Our Instagram
                </a>
            </div>
        </div>
    );
}
