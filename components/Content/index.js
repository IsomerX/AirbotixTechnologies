import React from "react";
import InfoSection from "../util/InfoSection";
import LayoutWidth from "../util/LayoutWidth";

const Content = () => {
    return (
        <div>
            <LayoutWidth>
                <InfoSection
                    title={"About Us"}
                    description={
                        "Situated in Gurugram, Airbotix Technologies is an organisation developing indigenous cutting edge drone technology. We aim to develop an end-to-end swarming solution, including hardware and software, which can be used to bear across humanitarian efforts, search and rescue, disaster response and defence use cases."
                    }
                    image="/assets/airplane.jpg"
                    alt="airplane"
                    css="gap-10"
                />
            </LayoutWidth>
            <div className="bg-fixed w-screen h-[400px] bg-home-swarm bg-no-repeat bg-cover mt-20 ">

                <div className="w-full h-full grid place-items-center bg-back2 bg-opacity-60 text-white font-heading font-bold text-8xl">
                    We Build to Perform
                </div>
            </div>
        </div>
    );
};

export default Content;
