/* eslint-disable @next/next/no-img-element */
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
                        "Airbotix is an organisation involved in research, development and production of cutting edge indigenous drone technology. We aim to develop end to end Drone solutions in inspection, surveillance and entertainment."
                    }
                    image="/assets/airplane.jpg"
                    alt="airplane"
                    css="gap-10"
                />
            </LayoutWidth>
            <div className="bg-fixed w-screen h-[200px] sm:h-[400px] bg-home-swarm bg-no-repeat bg-cover mt-20 ">
                <div className="w-full h-full grid place-items-center bg-back2 bg-opacity-60 text-white font-heading font-bold xl:text-8xl md:text-7xl text-4xl sm:text-5xl text-center">
                    {/* We Build to Perform */}
                </div>
            </div>

            <LayoutWidth>
                <h2 className="font-heading font-semibold text-4xl sm:text-5xl text-tert uppercase mt-20">
                    Technology
                </h2>
                <div className="tech-grid mt-10">
                    <div className="swarming">
                        <img src="/assets/swarm.jpg" alt="drone-swarm" />
                        <div>
                            <h2>Swarming Tech</h2>
                        </div>
                    </div>
                    <div className="gps">
                        <img src="/assets/gps.jpg" alt="drone-swarm" />
                        <div>
                            <h2>GPS Denied Navigation </h2>
                        </div>
                    </div>
                    <div className="auto-nav">
                        <img src="/assets/navigation.png" alt="drone-swarm" />
                        <div>
                            <h2>Autonomous Navigation </h2>
                        </div>
                    </div>
                    <div className="position-system">
                        <img src="/assets/precise.jpg" alt="drone-swarm" />
                        <div>
                            <h2>Precision Positioning System </h2>
                        </div>
                    </div>
                </div>
            </LayoutWidth>
        </div>
    );
};

export default Content;
