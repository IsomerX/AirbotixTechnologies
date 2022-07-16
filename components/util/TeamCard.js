/* eslint-disable @next/next/no-img-element */
import React from "react";

const TeamCard = ({ name, designation, image, readmore }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full rounded-xl shadow-lg h-[400px] lg:h-[400px] object-cover"
                />
                <div className="-mt-10 bg-white rounded-lg shadow-xl w-4/5 py-3">
                    <h2 className="font-heading font-semibold text-2xl text-center text-back1">
                        {name}
                    </h2>
                    <h3 className="font-heading font-medium text-lg mt-1 text-center text-back1">
                        {designation}
                    </h3>
                    <div className="text-center font-heading mt-1 cursor-pointer text-tert" onClick={() => readmore(name)}>
                        Read More
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
