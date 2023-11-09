
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="w-full md:w-4/12 my-8 mx-auto text-center">
            <p className="text-yellow-500 mb-2 text-2xl font-bold">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;