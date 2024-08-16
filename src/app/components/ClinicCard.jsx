import React from "react";
import PropTypes from "prop-types";

const ClinicCard = ({ title, clinicInfo }) => {
    return (
        <div className={"bg-white shadow-lg rounded-lg overflow-hidden my-5 transition duration-300 transform hover:shadow-2xl hover:-translate-y-2"}>
            <img src={clinicInfo.imageUrl} alt={title} className={"w-full h-56 object-cover object-center"}/>
            <div className={"p-4"}>
                <h3 className={"font-bold text-xl mb-2"}>{title}</h3>
                <p>{clinicInfo.info}</p>
            </div>
            <div className={"p-1"}>
                <p className={"text-blue-500 text-sm"}>{clinicInfo.address}</p>
            </div>
            <div className={"border-t-4 border-b-4 border-blue-500"}></div>
        </div>
    )
}

ClinicCard.propTypes = {
    title: PropTypes.string.isRequired,
    itemInfo: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        information: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    }).isRequired
}

export default ClinicCard;