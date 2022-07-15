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
                <ProjectCard heading={"01"} subheading={"Nano Drones"} image="/assets/projects/nano.jpg"  imageCss="h-[350px] object-cover"/>
                <ProjectCard heading={"02"} subheading={"Hydrostatic Drones"} image="/assets/projects/hydro.jpg" imageCss="h-[350px] object-cover" right={true}/>
                
                <ProjectCard heading={"03"} subheading={"Drone Light Shows"} image="/assets/projects/light.png" imageCss="h-[350px] object-cover"/>
                <ProjectCard heading={"04"} subheading={"Inspection Drones"} image="/assets/projects/inspection.jpg" right={true} imageCss="h-[350px] object-cover"/>
                
                <ProjectCard heading={"05"} subheading={"Surveillance Drones"} image="/assets/projects/surveillance.jpg" imageCss="h-[350px] object-cover"/>
                
            </LayoutWidth>
            <Footer />
        </div>
    );
};

export default Projects;
