"use client";

import Image from 'next/image';

const PartnersGrid = ({ partners }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4 justify-items-center">
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
        </div>
    );
};

export default PartnersGrid;

