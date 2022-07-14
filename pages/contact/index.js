import React from "react";
import NavBar from "../../components/Banner/NavBar";
import Footer from "../../components/Footer";
import LayoutWidth from "../../components/util/LayoutWidth";

const Contact = () => {
    return (
        <>
            <NavBar active="Contact" />

            <LayoutWidth>
                <h2 className="font-heading font-semibold text-5xl text-tert uppercase mt-32 text-center">
                    Contact
                </h2>
                <h2 className="mt-10 font-heading font-bold text-5xl leading-normal">
                    Love to hear from you, <br /> Get in touch👋
                </h2>
                <form>
                    <div className="font-heading grid grid-cols-2 gap-6 mt-5">
                        <div className="flex flex-col text-lg gap-2">
                            <label className="font-medium">Your name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-[#f5f5f5] p-3 rounded-md text-[#292929]"
                            />
                        </div>
                        <div className="flex flex-col text-lg gap-2">
                            <label className="font-medium">Your email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-[#f5f5f5] p-3 rounded-md text-[#292929]"
                            />
                        </div>
                        <div className="flex flex-col text-lg gap-2 col-span-2">
                            <label className="font-medium">Your Message</label>
                            <textarea
                                type="text"
                                placeholder="Message"
                                className="bg-[#f5f5f5] p-3 rounded-md text-[#292929] h-40"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="font-heading text-xl py-3 px-8 bg-secondary rounded-lg w-fit font-bold mt-6 text-white hover:bg-tert transition-all"
                    >
                        Submit
                    </button>
                </form>
            </LayoutWidth>

            <Footer css="absolute bottom-0 w-full" />
        </>
    );
};

export default Contact;