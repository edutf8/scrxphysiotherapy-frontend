import {useEffect, useState} from "react";

function Modal({ isOpen, onClose, teamMember }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg max-w-lg w-full md:max-w-2xl">
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-200">{teamMember.name}</h2>
                <p className="mt-4 text-gray-700 dark:text-neutral-300" dangerouslySetInnerHTML={{__html: teamMember.description}}/>
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
        const response = await fetch('https://scrxcdn.fra1.cdn.digitaloceanspaces.com/team.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        // Check if the data is an array, if not, convert it into an array
        const dataArray = Array.isArray(data) ? data : [data];

        console.log('Data as array:', dataArray);
        return dataArray;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default function TeamLayout() {
    const [teamData, setTeamData] = useState([]);
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);

    useEffect(() => {
        fetchData().then(data => {
            setTeamData(data);
        });
    }, []);

    if (!Array.isArray(teamData) || !teamData.length) return <div>Loading...</div>; // Handle the loading state

    return (
        <div className={"grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"}>
            {teamData.map((team, index) => (
                <div key={index} className={"text-center cursor-pointer"} onClick={() => setSelectedTeamMember(team)}>
                    <img
                        className={"rounded-xl sm:size-48 lg:size-60 mx-auto"}
                        src={team.image}
                        alt={`${team.name}'s Avatar`}
                    />
                    <div className={"mt-2 sm:mt-4"}>
                        <h3 className={"text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200"}>
                            {team.name}
                        </h3>
                        <p className={"text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400"}>
                            {team.role}
                        </p>
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