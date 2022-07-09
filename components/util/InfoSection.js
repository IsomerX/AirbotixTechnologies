/* eslint-disable @next/next/no-img-element */
import React from "react";

const InfoSection = ({ title, description, image, alt, css="" }) => {
    return (
        <div className={`w-full flex mt-20 items-center ${css}`}>
            <div className="flex flex-col gap-6">
                <div>
                    <h2 className="font-heading font-bold text-5xl">{title}</h2>
                    <div className="h-[4px] w-1/2 bg-zinc-500 mt-2"></div>
                </div>

                <h3 className="font-sub text-lg">{description}</h3>
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
