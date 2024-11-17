"use client";

import Image from 'next/image';

const PartnersGrid = ({ partners }) => {
    const itemsPerRow = 7; // Default number of columns for rows
    const numItems = partners.length;
    const lastRowItems = numItems % itemsPerRow;

    return (
        <div className="grid gap-4 p-4"
             style={{
                 gridTemplateColumns: `repeat(${lastRowItems === 0 ? itemsPerRow : Math.max(lastRowItems, 6)}, minmax(0, 1fr))`,
             }}>
            {partners.map((partner, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center overflow-hidden bg-gray-100 p-4 rounded-lg transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={150} // Consistent max width
                        height={100} // Fixed height
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default PartnersGrid;
