import React from 'react';

const Timeline = () => {
    const timelineData = [
        {
            title: 'Treatment Philosophy',
            image: '/what-makes-us-different-one.jpeg',
            description:
                'We believe in building comprehensive capacity. Simply put, we use targeted exercise to help you develop a strong, resilient and adaptable body which is able to meet the demands of your sport, hobbies and interests.'
        },
        {
            title: 'We are driven by a core set of values',
            image: '/what-makes-us-different-two.jpg',
            description:
                'People. Integrity. Together. Effort.'
        },
        {
            title: 'You are at the centre of everything we do ',
            image: '/what-makes-us-different-three.jpg',
            description:
                'We will listen to you and will tailor our approach to your needs and goals. We will send you a pre-assessment questionnaire to establish what you would like to get from your appointment and identify how best we can help you.'
        },
        {
            title: 'Education and Empowerment',
            image: '/what-makes-us-different-four.jpg',
            description:
                'We aim to answer 4 key questions for every client: \n' +
                '\n' +
                'What is wrong? \n' +
                '\n' +
                'How long will it take to get better? \n' +
                '\n' +
                'What can we do to help you? \n' +
                '\n' +
                'What can you do to help yourself? \n' +
                '\n' +
                'We passionately believe in empowering our clients with the knowledge and tools required to improve their symptoms.'
        },
        {
            title: 'Prevent. Recover. Optimise',
            image: '/what-makes-us-different-five.jpg',
            description:
                'We can help you recover from pain or injury as quickly as possible. Not only this, but we can also help identify what may have contributed to the injury happening in the first place. Addressing these issues can help prevent injury in the future, keeping you doing the things you love. '
        },
        {
            title: 'Technology and Research',
            image: '/what-makes-us-different-six.jpeg',
            description: 'We have integrated the latest technology and evidence to support our assessment and treatment techniques to ensure that we are delivering a truly gold standard service. '
        }
    ];

    return (
        <div className="relative p-8 bg-gray-50">
            <h2 className="text-gray-800 text-lg font-bold mb-6 text-center">Timeline</h2>
            {/* Static Timeline Line */}
            <div className="absolute left-1/2 w-1 bg-gray-400 top-0 bottom-0 transform -translate-x-1/2"></div>
            <div className="relative space-y-12">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col items-center ${
                            index % 2 === 0 ? 'lg:items-start lg:flex-row' : 'lg:items-end lg:flex-row-reverse'
                        }`}
                    >
                        {/* Connection Line */}
                        <div
                            className={`absolute h-0.5 bg-blue-500 ${
                                index % 2 === 0 ? 'right-[50%]' : 'left-[50%]'
                            }`}
                            style={{
                                width: 'calc(25% - 2rem)', // Adjusted width for clean alignment
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

                        {/* Timeline Card */}
                        <div
                            className={`relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md lg:max-w-lg ${
                                index % 2 === 0 ? 'text-left' : 'text-right'
                            }`}
                            style={{
                                zIndex: 10,
                            }}
                        >
                            <div className="mb-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-lg shadow-md w-full object-cover"
                                />
                            </div>
                            <h3 className="text-gray-800 text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                            <p className="mt-4 text-sm text-gray-400 italic">Year: {item.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
