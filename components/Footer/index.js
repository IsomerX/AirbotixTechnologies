/* eslint-disable @next/next/no-img-element */
import React from "react";
import LayoutWidth from "../util/LayoutWidth";

const Footer = ({ css = "" }) => {
    return (
        <div
            className={`bg-back2 text-primary font-heading py-10 mt-20 ${css}`}
        >
            <LayoutWidth subCss="flex justify-center items-center">
                <div className="text-3xl text-primary">Airbotix Technology Pvt Ltd</div>
                {/* <div className="flex gap-3">
                    <a href="" target="_blank">
                        <img
                            src="/assets/fb.svg"
                            alt="facebook"
                            className="social transition-all h-10"
                        />
                    </a>
                    <a href="" target="_blank">
                        <img
                            src="/assets/twitter.svg"
                            alt="twitter"
                            className="social transition-all h-10"
                        />
                    </a>
                    <a href="" target="_blank">
                        <img
                            src="/assets/insta.svg"
                            alt="insta"
                            className="social transition-all h-10"
                        />
                    </a>
                </div> */}
            </LayoutWidth>
        </div>
    );
};

export default Footer;
