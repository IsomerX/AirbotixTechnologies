/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import LayoutWidth from "../util/LayoutWidth";

const NavBar = ({ active, scrollOffset = 0 }) => {
    const [scrollH, setScrollH] = useState(0);
    const [showHamburger, setShowHamburger] = useState(false);

    const scrollHandler = useCallback(() => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        setScrollH(winScroll);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [scrollHandler]);

    const links = [
        { id: 1, title: "Home", link: "/", isActive: active === "Home" },
        {
            id: 2,
            title: "Projects",
            link: "/projects",
            isActive: active === "Projects",
        },
        {
            id: 3,
            title: "Applications",
            link: "/applications",
            isActive: active === "Applications",
        },
        {
            id: 4,
            title: "Products",
            link: "products",
            isActive: active === "Products",
        },
        { id: 5, title: "Team", link: "team", isActive: active === "Team" },
        {
            id: 6,
            title: "Contact",
            link: "contact",
            isActive: active === "Contact",
        },
    ];

    return (
        <>
            <LayoutWidth
                css={`
                    ${scrollH >= scrollOffset &&
                    "bg-[#090D1B87]"} text-white transition-all fixed top-0 z-10 search-glass
                `}
            >
                <div className="w-full flex justify-center items-center py-8">
                    {/* <Link href={"/"}>
                        <div className="font-heading text-5xl cursor-pointer">
                            Logo
                        </div>
                    </Link> */}
                    <div className="navsm:flex gap-8 hidden">
                        {links.map((item) => {
                            return (
                                <Link href={item.link} key={item.id}>
                                    <div
                                        className={`hover:border-primary border-2 text-lg font-heading font-medium cursor-pointer transition-all py-2 px-4 rounded-lg ${
                                            item.isActive
                                                ? "border-tert glass"
                                                : "border-[#00000000]"
                                        }`}
                                    >
                                        {item.title}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div
                        className="fixed right-8  navsm:hidden"
                        onClick={() => {
                            setShowHamburger(!showHamburger);
                        }}
                    >
                        <img
                            src="/assets/hamburger-white.svg"
                            alt="menu"
                            className="h-[40px]"
                        />
                    </div>
                </div>
            </LayoutWidth>
            <div
                className={`fixed ${
                    showHamburger ? "right-0" : "left-full"
                } w-[300px] h-screen top-16 z-50 bg-[#fffffff1] transition-all navsm:hidden shadow-xl search-glass`}
            >
                <div>
                    {links.map((item) => {
                        return (
                            <Link href={item.link} key={item.id}>
                                <div
                                    className={`hover:border-primary text-lg font-heading font-medium cursor-pointer transition-all px-10 py-5 ${
                                        item.isActive && "border-tert"
                                    } hover:bg-[#d9d9d9]`}
                                >
                                    {item.title}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default NavBar;
