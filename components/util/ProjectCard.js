/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectCard = ({ heading, subheading, info, image, right = false, imageCss = "" }) => {
    return (
        <div
            className={`flex flex-col items-center ${right ? "sm:flex-row-reverse" : "sm:flex-row"} py-12 sm:py-24`}
        >
            <div className="w-full sm:w-1/2">
                <div className="">
                    <h2 className="font-medium text-primary font-heading text-9xl ">
                        {heading}
                    </h2>
                </div>
                <img
                    src={image}
                    alt=""
                    className={`w-full shadow-lg rounded-xl ${imageCss}`}
                />
            </div>
            <div className={`w-full sm:w-1/2 text-center sm:text-left pt-10 sm:pt-0 ${right ? "sm:pr-10" : "sm:pl-10"}`}>
                <div className="font-heading capitalize text-5xl font-semibold text-extra">
                    {subheading}
                </div>
                <div className="mt-5 font-heading text-lg">{info}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
