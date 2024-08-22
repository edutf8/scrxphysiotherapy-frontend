import React from "react";
import PropTypes from "prop-types";

const ClinicCard = ({ title, description, address, fullWidth }) => {
    return (
        <div className={`bg-white shadow-lg rounded-lg overflow-hidden my-5 transition duration-300 transform hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col`}>
            <div className="flex-grow p-4">
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p dangerouslySetInnerHTML={{__html: description}}/>

            </div>
            <div className={`p-1 text-right flex-shrink-0`}>
                <p className="text-blue-500 text-md">{address}</p>
            </div>
            <div className="border-t-4 border-b-4 border-blue-500"></div>
        </div>
    );
}


ClinicCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool.isRequired,
};

export default ClinicCard;