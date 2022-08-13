/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavBar from "./NavBar";
import BannerImage from "../../public/assets/banner.jpg";
import LayoutWidth from "../util/LayoutWidth";
import { useRouter } from "next/router";

const Banner = () => {
    const router = useRouter();
    return (
        <div className=" bg-black relative w-screen pt-32 pb-20 sm:pb-28">
            <NavBar active={"Home"} scrollOffset={200} />
            <div className=" w-screen bg-black">
                <LayoutWidth subCss="flex justify-between gap-20">
                    <div className="flex justify-center  flex-col gap-5 text-center sm:text-left">
                        <h1 className="text-primary text-5xl sm:text-6xl font-heading font-bold">
                            Airbotix Technology Pvt Ltd
                        </h1>
                        <h2 className="text-[#d9d9d9] text-3xl font-heading font-normal">
                            Creating Future
                        </h2>
                        <button
                            className="font-heading text-xl py-4 px-8 bg-tert rounded-lg w-fit font-bold mt-4 border-2 hover:text-tert hover:bg-black transition-all mx-auto sm:mx-0"
                            onClick={() => router.push("/projects")}
                        >
                            View Our Projects
                        </button>
                    </div>
                    <img
                        src="/assets/banner.jpg"
                        alt="globe"
                        className="hidden sm:block"
                    />
                </LayoutWidth>
            </div>
        </div>
    );
};

export default Banner;
