/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectCard = ({ heading, subheading, info, image, right = false }) => {
    return (
        <div
            className={`flex items-center ${right && "flex-row-reverse"} py-24`}
        >
            <div className="w-1/2">
                <div className="">
                    <h2 className="font-medium text-primary font-heading text-9xl ">
                        {heading}
                    </h2>
                </div>
                <img
                    src={image}
                    alt=""
                    className="w-full shadow-lg rounded-xl"
                />
            </div>
            <div className={`w-1/2 ${right ? "pr-10" : "pl-10"}`}>
                <div className="font-heading capitalize text-5xl font-semibold text-extra">
                    {subheading}
                </div>
                <div className="mt-5 font-heading text-lg">{info}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
