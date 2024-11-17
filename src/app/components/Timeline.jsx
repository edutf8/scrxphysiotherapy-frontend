import React from 'react';

const Timeline = () => {
    const timelineData = [
        {
            year: '1984',
            title: 'First Macintosh computer',
            description:
                'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with an integrated carrying handle; it came with a keyboard and single-button mouse.',
        },
        {
            year: '1998',
            title: 'iMac',
            description:
                'iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple\'s consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms.',
        },
        {
            year: '2001',
            title: 'iPod',
            description:
                'The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8½ months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple.',
        },
        {
            year: '2007',
            title: 'iPhone',
            description:
                'iPhone is a line of smartphones produced by Apple Inc. that use Apple\'s own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share.',
        },
        {
            year: '2015',
            title: 'Apple Watch',
            description:
                'The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.',
        },
    ];

    return (
        <div className="relative p-8">
            {/* Static Timeline Line */}
            <div className="absolute left-1/2 w-1 bg-gray-600 top-0 bottom-0 transform -translate-x-1/2"></div>
            <div className="relative space-y-12">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center ${
                            index % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}
                    >
                        {/* Connection Line */}
                        <div
                            className={`absolute h-0.5 bg-blue-500 ${
                                index % 2 === 0 ? 'right-[50%]' : 'left-[50%]'
                            }`}
                            style={{
                                width: 'calc(25% - 2rem)', // Reduced width ensures alignment with the box edge
                                top: '50%',
                            }}
                        ></div>

                        {/* Connection Dot */}
                        <div
                            className="absolute w-4 h-4 bg-blue-500 rounded-full"
                            style={{
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        ></div>

                        {/* Timeline Box */}
                        <div
                            className={`relative bg-gray-800 p-6 rounded-lg shadow-lg w-5/12 ${
                                index % 2 === 0 ? 'text-right' : 'text-left'
                            }`}
                            style={{
                                zIndex: 10, // Ensure boxes appear above the connection lines
                            }}
                        >
                            <div className="text-gray-400 text-lg font-semibold">{item.year}</div>
                            <h3 className="text-gray-100 text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
