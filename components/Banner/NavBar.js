import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import LayoutWidth from "../util/LayoutWidth";

const NavBar = ({ active, scrollOffset = 0 }) => {
    const [scrollH, setScrollH] = useState(0);

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
        { id: 4, title: "Team", link: "team", isActive: active === "Team" },
        {
            id: 5,
            title: "Contact",
            link: "contact",
            isActive: active === "Contact",
        },
        {
            id: 6,
            title: "Products",
            link: "products",
            isActive: active === "Products",
        },
    ];

    return (
        <LayoutWidth
            css={`
                ${scrollH >= scrollOffset &&
                "bg-back2"} text-white transition-all fixed top-0
            `}
        >
            <div className="w-full flex justify-between items-center py-4">
                <Link href={"/"}>
                    <div className="font-heading text-5xl">Logo</div>
                </Link>
                <div className="md:flex gap-8 mr-8 hidden ">
                    {links.map((item) => {
                        return (
                            <Link href={item.link} key={item.id}>
                                <div
                                    className={`hover:border-primary border-b-2 text-lg font-heading font-medium cursor-pointer transition-all ${
                                        item.isActive && "border-tert"
                                    }`}
                                >
                                    {item.title}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </LayoutWidth>
    );
};

export default NavBar;
