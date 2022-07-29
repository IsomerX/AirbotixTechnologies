/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavBar from "../../components/Banner/NavBar";
import Head from "next/head";

const Products = () => {
    return (
        <>
            <Head>
                <title>Airbotix - Products</title>
                <meta name="description" content="Airbotix Technologies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active={"Products"} scrollOffset={0} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <img
                    src="/assets/drone.png"
                    alt="drone"
                    className="max-w-3xl mx-auto opacity-70"
                />
                <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-7xl font-extrabold w-full text-center text-[#515151b3] uppercase">
                    Coming Soon
                </h2>
            </div>
        </>
    );
};

export default Products;
