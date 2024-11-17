"use client";

import Image from 'next/image';

const PartnersGrid = ({ partners }) => {
    const itemsPerRow = 7; // Number of columns for full rows
    const numItems = partners.length;
    const lastRowItems = numItems % itemsPerRow || itemsPerRow;

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Full grid for rows */}
            <div className="grid grid-cols-7 gap-4">
                {partners.slice(0, numItems - lastRowItems).map((partner, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center overflow-hidden bg-gray-100 p-4 rounded-lg transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={150}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Centered last row */}
            {lastRowItems > 0 && (
                <div
                    className={`grid gap-4`}
                    style={{
                        gridTemplateColumns: `repeat(${lastRowItems}, minmax(0, 1fr))`,
                        justifyContent: 'center',
                    }}
                >
                    {partners.slice(numItems - lastRowItems).map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center overflow-hidden bg-gray-100 p-4 rounded-lg transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={150}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PartnersGrid;
