import {useEffect, useState} from "react";

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

    useEffect(() => {
        fetchData().then(data => {
            setTeamData(data);
        });
    }, []);

    if (!Array.isArray(teamData) || !teamData.length) return <div>Loading...</div>; // Handle the loading state

    return (
        <div className={"grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"}>
            {teamData.map((team, index) => (
                <div key={index} className={"text-center"}>
                    <img
                        className={"rounded-xl sm:size-48 lg:size-60 mx-auto"}
                        src={team.image} // Use the avatar URL from the data
                        alt={`${team.name}'s Avatar`} // Dynamic alt text based on name
                    />
                    <div className={"mt-2 sm:mt-4"}>
                        <h3 className={"text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200"}>
                            {team.name} {/* Dynamic name */}
                        </h3>
                        <p className={"text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400"}>
                            {team.position} {/* Dynamic position */}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}