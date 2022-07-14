import React from "react";

const ApplicationCard = ({ heading, description, image }) => {
    const BoxStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const DescStyle = {
        backgroundImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 1) 100%)",
    };

    return (
        <div
            style={BoxStyle}
            className="h-[400px] rounded-xl flex justify-end flex-col application-box shadow-lg"
        >
            <div style={DescStyle} className="p-4 rounded-b-xl">
                <h2 className="font-heading font-semibold text-2xl text-white">
                    {heading}
                </h2>
                <h3 className="font-heading font-medium text-lg text-[#d9d9d9] hidden">
                    {description}
                </h3>
            </div>
        </div>
    );
};

export default ApplicationCard;
