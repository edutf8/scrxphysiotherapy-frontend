import { useEffect, useState } from "react";

function Modal({ isOpen, onClose, teamMember }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg max-w-lg w-full md:max-w-2xl">
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-200">{teamMember.name}</h2>
                <p className="text-gray-700 dark:text-neutral-300 mt-4">{teamMember.role}</p>
                <ul className="list-disc pl-5 mt-4 text-gray-700 dark:text-neutral-300">
                    {teamMember.qualifications?.map((qual, index) => (
                        <li key={index}>{qual}</li>
                    ))}
                </ul>
                <p
                    className="mt-4 text-gray-700 dark:text-neutral-300"
                    dangerouslySetInnerHTML={{
                        __html: teamMember.description.replace(/\n/g, "<br />"),
                    }}
                />
                <button
                    onClick={onClose}
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

const fetchData = async () => {
    try {
        const response = await fetch(
            "https://scrxcdn.fra1.cdn.digitaloceanspaces.com/team.json"
        );
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }

        const data = await response.json();
        return Array.isArray(data) ? data : [data];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export default function TeamLayout() {
    const [teamData, setTeamData] = useState([]);
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);

    useEffect(() => {
        fetchData().then((data) => setTeamData(data));
    }, []);

    const groupByCategory = (data) => {
        const categories = { 1: [], 2: [], 3: [] };
        data.forEach((member) => {
            console.log(member);
            if (categories[member.category]) {
                console.log(member.category);
                categories[member.category].push(member);
            } else {
                console.error(`Invalid category: ${member.category}`);
            }
        });
        console.log(categories);
        return categories;
    };

    if (!Array.isArray(teamData) || !teamData.length) return <div>Loading...</div>;

    const categorizedData = groupByCategory(teamData);

    return (
        <div className="space-y-12">
            {[1, 2, 3].map((category) => (
                <div key={category}>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-200">
                        {`Category ${category}`}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                        {categorizedData[category].map((team, index) => (
                            <div
                                key={index}
                                className="text-center cursor-pointer"
                                onClick={() => setSelectedTeamMember(team)}
                            >
                                {team.image ? (
                                    <img
                                        className="rounded-xl w-24 h-auto mx-auto sm:w-36 md:w-48 lg:w-48"
                                        src={team.image}
                                        alt={`${team.name}'s Avatar`}
                                    />
                                ) : (
                                    <div className="rounded-xl w-24 h-24 bg-gray-300 dark:bg-neutral-700 mx-auto sm:w-36 md:w-48 lg:w-48 flex items-center justify-center">
                                        <span className="text-gray-500 dark:text-neutral-400">No Image</span>
                                    </div>
                                )}
                                <div className="mt-2 sm:mt-4">
                                    <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                        {team.name}
                                    </h3>
                                    <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                        {team.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <Modal
                isOpen={selectedTeamMember !== null}
                onClose={() => setSelectedTeamMember(null)}
                teamMember={selectedTeamMember}
            />
        </div>
    );
}
