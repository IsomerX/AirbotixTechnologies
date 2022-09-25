/* eslint-disable @next/next/no-img-element */
import React from "react";
import InfoSection from "../util/InfoSection";
import LayoutWidth from "../util/LayoutWidth";

const Content = () => {
    return (
        <div>
            <LayoutWidth>
                <div
                    className={`w-full flex flex-col-reverse sm:flex-row mt-20 items-center gap-10`}
                >
                    <div className="flex flex-col gap-6 w-full sm:w-3/5">
                        <div>
                            <h2 className="font-heading font-semibold text-4xl sm:text-5xl text-tert uppercase">
                                {"About Us"}
                            </h2>
                            {/* <div className="h-[3px] w-1/2 bg-back1 mt-2"></div> */}
                        </div>

                        <h3 className="font-heading font-medium text-lg text-back1">
                            {
                                "Airbotix is an organisation involved in research, development and production of cutting edge indigenous drone and underwater vehicle  technology. We aim to develop end to end Drone solutions in inspection, surveillance and entertainment."
                            }
                        </h3>
                    </div>
                    <div className="w-full h-[350px] sm:w-2/5 grid grid-cols-2 grid-rows-2 gap-2">
                        <img src="/assets/projects/airship.png" alt="airship" className="h-full w-full rounded-lg shadow-sm object-cover"/>
                        <img src="/assets/projects/submarine.jpg" alt="airship" className="h-full w-full rounded-lg shadow-sm object-cover"/>
                        <img src="/assets/matrix-drone2.jpg" alt="airship" className="h-full w-full rounded-lg shadow-sm object-cover"/>
                        <img src="/assets/deer.png" alt="airship" className="h-full w-full rounded-lg shadow-sm object-cover"/>
                    </div>
                </div>
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
