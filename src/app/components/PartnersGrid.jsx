"use client";

import Image from 'next/image';

const PartnersGrid = ({ partners }) => {
    const itemsPerRow = 7; // Adjust based on the maximum number of columns you want on the largest screen size
    const numItems = partners.length;
    const lastRowItems = numItems % itemsPerRow;

    return (
        <div className="grid gap-4 p-4">
            {partners.map((partner, index) => {
                // Check if this is part of the last row
                const isLastRow = index >= numItems - lastRowItems && lastRowItems > 0;

                return (
                    <div
                        key={index}
                        className={`grid ${
                            isLastRow
                                ? 'grid-cols-6' // Last row has 6 columns
                                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7'
                        } flex items-center justify-center overflow-hidden bg-gray-100 p-4 rounded-lg transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg`}
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={150} // Maximum width
                            height={100} // Fixed height to ensure visual consistency
                            className="object-contain"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PartnersGrid;
