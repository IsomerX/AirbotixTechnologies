/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavBar from "./NavBar";
import BannerImage from "../../public/assets/banner.jpg";
import LayoutWidth from "../util/LayoutWidth";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();
    return (
        <div className=" bg-black relative w-screen pt-32 pb-28">
            <NavBar active={"Home"} scrollOffset={200} />
            <div className=" w-screen bg-black">
                <LayoutWidth subCss="flex justify-between gap-20">
                    <div className="flex justify-center  flex-col gap-5">
                        <h1 className="text-primary text-6xl font-heading font-bold">
                            Airbotix Technologies
                        </h1>
                        <h2 className="text-[#d9d9d9] text-lg font-heading font-normal">
                            We aim to develop an end-to-end swarming solution,
                            including hardware and software, which can be used
                            to bear across humanitarian efforts, search and
                            rescue, disaster response and defence use cases.
                        </h2>
                        <button className="font-heading text-xl py-4 px-8 bg-tert rounded-lg w-fit font-bold mt-4 border-2 hover:text-tert hover:bg-black transition-all" onClick={() => router.push('/projects')}>
                            View Our Projects
                        </button>
                    </div>
                    <img src="/assets/banner.jpg" alt="globe" />
                </LayoutWidth>
            </div>
        </div>
    );
};

export default Banner;
