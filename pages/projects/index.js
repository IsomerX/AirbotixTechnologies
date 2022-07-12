/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavBar from "../../components/Banner/NavBar";
import Footer from "../../components/Footer";
import LayoutWidth from "../../components/util/LayoutWidth";
import ProjectCard from "../../components/util/ProjectCard";

const Projects = () => {
    return (
        <div>
            <NavBar active={"Projects"} scrollOffset={0} />
            <h2 className="font-heading font-semibold text-5xl text-tert uppercase mt-32 text-center">
                Projects
            </h2>
            <LayoutWidth>
                <ProjectCard heading={"01"} subheading={"swarming tech"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} image="/assets/project-banner.jpg"/>
                <ProjectCard heading={"02"} subheading={"swarming tech"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} image="/assets/project-banner.jpg" right={true}/>
                
                <ProjectCard heading={"03"} subheading={"swarming tech"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} image="/assets/project-banner.jpg"/>
                <ProjectCard heading={"04"} subheading={"swarming tech"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} image="/assets/project-banner.jpg" right={true}/>
                
                <ProjectCard heading={"05"} subheading={"swarming tech"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} image="/assets/project-banner.jpg"/>
                <ProjectCard heading={"06"} subheading={"swarming tech"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} image="/assets/project-banner.jpg" right={true}/>
                
            </LayoutWidth>
            <Footer />
        </div>
    );
};

export default Projects;
