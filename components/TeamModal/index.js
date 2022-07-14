/* eslint-disable @next/next/no-img-element */
import React from "react";

const TeamModal = ({ member, close }) => {
    return (
        <div
            className="h-screen w-screen fixed z-20 top-0 backdrop-blur-sm grid place-items-center bg-[#0000007f]"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    close();
                }
            }}
        >
            <div className="w-full bg-white max-w-[1000px] flex rounded-lg">
                <img
                    src={member.image ?? ""}
                    alt={member.name}
                    className="h-full w-1/2 object-cover rounded-l-lg"
                />
                <div className="p-5 flex flex-col gap-3">
                    <h2 className="font-heading font-semibold text-5xl text-back1">
                        {member.name}
                    </h2>
                    <h3 className="font-heading font-medium text-2xl text-back1">
                        {member.designation}
                    </h3>
                    <div className="font-heading mt-1 text-tert text-xl">
                        {member.more}
                    </div>
                </div>
            </div>
            <img
                src="/assets/cross.svg"
                alt="cross"
                className="absolute top-10 right-20 h-10 cursor-pointer"
                onClick={close}
            />
        </div>
    );
};

export default TeamModal;
