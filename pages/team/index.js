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
            more: "Vinod Tandra holds a Master’s degree in business administration and has initiated his career at a very young age as an industrialist and forayed into real estate soon after.",
            image: "/assets/team/Vtandra.jpg",
        },
        {
            name: "Col. Rajesh Gandhi (Retd.)",
            designation: "CEO & Executive Director",
            more: "With a stellar career spanning over 30 years in the Indian Armed forces and L&T defence, Col. Gandhi is one of the highly experienced drone experts in the country. An M.Tech from IIT Delhi, his passion for UAVs is unmatched.",
            image: "/assets/team/Rgandhi.jpg",
        },
        {
            name: "Abhishek Khambhata",
            designation: "Designation",
            more: "A young mechanical engineer with immense knowledge and a knack for designing, Abhishek also loves to fly his UAVs.",
            image: "/assets/team/Akhambhata.jpg",
        },
        {
            name: "Mohit Kenia",
            designation: "Designation",
            more: "One of the most hands-on experienced persons in the field of UAVs, Mohit is our tinkering expert.",
            image: "/assets/team/Mkenia.jpg",
        },
        {
            name: "Vinay Tandra",
            designation: "Designation",
            more: "Vinay is currently in his final year of BBA. He is a young and optimistic person, with good leadership qualities who also happens to be a national level athlete.",
            image: "/assets/team/Vinaytandra.jpg",
        },
    ];

    return (
        <>
            <NavBar active="Team" />

            {showModal && (
                <TeamModal member={member} close={handleCloseModal} />
            )}
            <LayoutWidth>
                <h2 className="font-heading font-semibold text-5xl text-tert uppercase mt-32 text-center">
                    Our Team
                </h2>
                <h3 className="mt-10 font-heading text-xl font-medium leading-normal text-center">
                    We are a team of dedicated and passionate people who are
                    dedicated to providing the best service to our customers.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </h3>
                <div className="grid grid-cols-3 gap-x-4 mt-10 gap-y-10">
                    {data.map((item) => (
                        <TeamCard
                            key={item.name}
                            name={item.name}
                            designation={item.designation}
                            image={item.image}
                            readmore={handleShowMore}
                        />
                    ))}
                </div>
            </LayoutWidth>
            {/* <Footer css="absolute bottom-0 w-full" /> */}
        </>
    );
};

export default Team;
