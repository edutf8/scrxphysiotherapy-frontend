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
            <div className="w-full px-2">
                <ClinicCard
                    title={clinics[2].title}
                    description={clinics[2].description}
                    address={clinics[2].address}
                    fullWidth={true}
                />
            </div>
        </div>
    );
}

export default ClinicCardsLayout;
