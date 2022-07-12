/* eslint-disable @next/next/no-img-element */
import React from "react";

const InfoSection = ({ title, description, image, alt, css="" }) => {
    return (
        <div className={`w-full flex mt-20 items-center ${css}`}>
            <div className="flex flex-col gap-6">
                <div>
                    <h2 className="font-heading font-semibold text-5xl text-tert uppercase">{title}</h2>
                    {/* <div className="h-[3px] w-1/2 bg-back1 mt-2"></div> */}
                </div>

                <h3 className="font-heading font-medium text-lg text-back1">{description}</h3>
            </div>
            <img
                src={image}
                alt={alt}
                className="w-2/5 rounded-3xl shadow-lg"
            />
        </div>
    );
};

export default InfoSection;
