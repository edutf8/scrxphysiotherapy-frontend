import ClinicCard from './ClinicCard';

const ClinicCardsLayout = ({ clinics }) => {
    return (
        <div className="flex flex-wrap -mx-2">
            {clinics.slice(0, 2).map((clinic, index) => (
                <div key={index} className="w-full md:w-1/2 px-2 mb-4">
                    <ClinicCard
                        title={clinic.title}
                        description={clinic.description}
                        address={clinic.address}
                        fullWidth={false}
                    />
                </div>
            ))}
        </div>
    );
}

export default ClinicCardsLayout;
