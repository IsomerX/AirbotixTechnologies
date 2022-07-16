import React from "react";

const LayoutWidth = ({ children, css = "", subCss = "" }) => {
    return (
        <div className={`${css} w-full`}>
            <div
                className={`w-[100vw] px-8 xl:px-0 xl:w-[80vw] 2xl:w-[70vw] mx-auto ${subCss}`}
            >
                {children}
            </div>
        </div>
    );
};

export default LayoutWidth;
