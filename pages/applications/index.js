import React from "react";
import NavBar from "../../components/Banner/NavBar";
import Footer from "../../components/Footer";
import ApplicationCard from "../../components/util/ApplicationCard";
import LayoutWidth from "../../components/util/LayoutWidth";

const Index = () => {
    const data = [
        {
            heading: "Disaster Management",
            description:
                "Our drone technology provides precise information of the geographical areas where Search and rescue operations are conducted.",
            image: "/assets/airplane.jpg",
        },
        {
            heading: "Geographic mapping of inaccessible terrain",
            description:
                "With the help of drones inaccessible terrains and locations like mountains, deserts and sea can be easily reached and in depth research can be conducted.",
            image: "/assets/airplane.jpg",
        },
        {
            heading: "Defense and security",
            description:
                "Our swarming technology can help Surveillance of large areas in less time using swarm of drones.",
            image: "/assets/airplane.jpg",
        },
        {
            heading: "Entertainment",
            description:
                "Our Nano drones can be used to conduct drone light shows.",
            image: "/assets/airplane.jpg",
        },
    ];

    return (
        <div className="mt-32">
            <NavBar active="Applications"/>
            <LayoutWidth>
                <h2 className="font-heading font-semibold text-5xl text-tert uppercase mt-32 text-center">
                    Applications
                </h2>
                <div className="grid grid-cols-4 mt-10 gap-8">
                    {data.map((item, index) => {
                        return <ApplicationCard key={index} {...item} />;
                    })}
                </div>
            </LayoutWidth>
            <Footer css="absolute bottom-0 w-full" />
        </div>
    );
};

export default Index;
