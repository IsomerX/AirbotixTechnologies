import React from "react";
import NavBar from "../../components/Banner/NavBar";
import Footer from "../../components/Footer";
import ApplicationCard from "../../components/util/ApplicationCard";
import LayoutWidth from "../../components/util/LayoutWidth";
import ProjectCard from "../../components/util/ProjectCard";
import Head from "next/head";

const Index = () => {
    const data = [
        {
            heading: "01",
            subheading: "Entertainment",
            info: "Our Nano drones are used to conduct drone light shows.",
            image: "/assets/deer.png",
            right: true
        },
        {
            heading: "02",
            subheading: "Disaster Management",
            info: "Our drone technology provides precise information of the geographical areas where Search and rescue operations are conducted.",
            image: "/assets/navigation.png",
            right: false
        },
        {
            heading: "03",
            subheading: "Geographic mapping of inaccessible terrain",
            info: "With the help of drones inaccessible terrains and locations like mountains, deserts and sea can be easily reached and in depth research can be conducted.",
            image: "/assets/airplane.jpg",
            right: true
        },
        {
            heading: "04",
            subheading: "Defense and security",
            info: "Our swarming technology can help Surveillance of large areas in less time using swarm of drones.",
            image: "/assets/defence_security.jpg",
            right: false
        },
    ];

    return (
        <div className="mt-32">
            <Head>
                <title>Airbotix - Application</title>
                <meta name="description" content="Airbotix Technologies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="Applications" />
            <LayoutWidth>
                <h2 className="font-heading font-semibold text-4xl sm:text-5xl text-tert uppercase mt-32 text-center">
                    Applications
                </h2>
                {data.map((item, index) => {
                    return <ProjectCard key={index} {...item} imageCss="h-[350px] object-cover"/>;
                })}
            </LayoutWidth>
            <Footer />
        </div>
    );
};

export default Index;
