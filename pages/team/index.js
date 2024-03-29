import Head from "next/head";
import React, { useState } from "react";
import NavBar from "../../components/Banner/NavBar";
import Footer from "../../components/Footer";
import TeamModal from "../../components/TeamModal";
import LayoutWidth from "../../components/util/LayoutWidth";
import TeamCard from "../../components/util/TeamCard";

const Team = () => {
    const [showModal, setShowModal] = useState(false);
    const [member, setMember] = useState({});

    const handleShowMore = (name) => {
        const member = data.find((member) => member.name === name);
        setMember(member);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const data = [
        {
            name: "Vinod Tandra",
            designation: "Executive Director",
            more: "Vinod Tandra holds a Master’s degree in business administration and has initiated his career at a very young age as an industrialist and forayed into many industries soon after.",
            image: "/assets/team/Vtandra.jpg",
        },
        {
            name: "Rajesh Gandhi",
            designation: "CEO & Executive Director",
            more: "With a stellar career spanning over 30 years in the Indian Armed forces and L&T defence, he is one of the highly experienced drone experts in the country. An M.Tech from IIT Delhi, his passion for UAVs is unmatched.",
            image: "/assets/team/Rgandhi.jpg",
        },
        {
            name: "Dr. Sohan Suvarna",
            designation: "VP (Research & Development)",
            more: "PhD in Aerospace engineering from IIT Bombay and Monash University (Australia)",
            image: "/assets/team/sohan.png"
        },
        {
            name: "A. Khambhata",
            designation: "Design Engineer - Mechanical",
            more: "A young mechanical engineer with immense knowledge and a knack for designing, Abhishek also loves to fly his UAVs.",
            image: "/assets/team/Akhambhata.jpg",
        },
        {
            name: "M. Kenia",
            designation: "Design Engineer - Software",
            more: "One of the most hands-on experienced persons in the field of UAVs, Mohit is our tinkering expert.",
            image: "/assets/team/Mkenia.jpg",
        },
        {
            name: "Vinay Rao",
            designation: "Business Developer",
            more: "Vinay is currently in his final year of BBA. He is a young and optimistic person, with good leadership qualities who also happens to be a national level athlete.",
            image: "/assets/team/Vinaytandra.jpg",
        },
    ];

    return (
        <>
            <Head>
                <title>Airbotix - Team</title>
                <meta name="description" content="Airbotix Technologies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="Team" />

            {showModal && (
                <TeamModal member={member} close={handleCloseModal} />
            )}
            <LayoutWidth css="pb-10">
                <h2 className="font-heading font-semibold text-4xl sm:text-5xl text-tert uppercase mt-32 text-center">
                    Our Team
                </h2>
                {/* <h3 className="mt-10 font-heading text-xl font-medium leading-normal text-center text-[#000000a1]">
                    We are a team of dedicated and passionate people who are
                    dedicated to providing the best service to our customers.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </h3> */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 md:flex md:justify-center gap-x-4 mt-10 gap-y-10">
                    <TeamCard
                        {...data[0]}
                        readmore={handleShowMore}
                        css="md:w-1/3"
                    />
                    <TeamCard
                        {...data[1]}
                        readmore={handleShowMore}
                        css="md:w-1/3"
                    />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 mt-10 gap-y-10">
                    <TeamCard {...data[2]} readmore={handleShowMore} />
                    <TeamCard {...data[3]} readmore={handleShowMore} />
                    <TeamCard {...data[4]} readmore={handleShowMore} />
                    <TeamCard {...data[5]} readmore={handleShowMore} />
                </div>
            </LayoutWidth>
            <Footer />
        </>
    );
};

export default Team;
