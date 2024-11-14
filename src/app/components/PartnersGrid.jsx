"use client";

import Image from 'next/image';

const PartnersGrid = ({ partners }) => {
    // Calculate how many empty items are needed to fill the row
    const itemsPerRow = 7; // Adjust based on the largest column count you want on the largest screen size
    const emptySlots = (itemsPerRow - (partners.length % itemsPerRow)) % itemsPerRow;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4">
            {partners.map((partner, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center overflow-hidden bg-gray-100 p-4 rounded-lg transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={150} // Maximum width
                        height={100} // Fixed height to ensure visual consistency
                        className="object-contain"
                    />
                </div>
            ))}

            {/* Render empty items to fill the last row */}
            {Array.from({ length: emptySlots }).map((_, index) => (
                <div
                    key={`empty-${index}`}
                    className="flex items-center justify-center p-4"
                />
            ))}
        </div>
    );
};

export default PartnersGrid;


