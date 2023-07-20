import React from "react";
import { useLocation } from "react-router-dom";

const TitleBar = () => {
    const location = useLocation();
    const { pathname } = location;
    const paths = pathname.split("/").filter((path) => path !== "");
    const pathsWithCapitalizedLetter = [];
    paths.map((path) => {
        const concatenate = path.charAt(0).toUpperCase() + path.slice(1)
        pathsWithCapitalizedLetter.push(concatenate);
    })
    const title = pathsWithCapitalizedLetter.join(" | ")
    window.document.title = title

    return (
        <div className=" bg-primary">
            <div className="max-w flex items-center">
                {pathsWithCapitalizedLetter.map((path, index) => (
                    <React.Fragment key={index}>
                        {index !== 0 && <span className="text-white/50">/</span>}
                        <span
                            className={`py-2 text-white text-sm font-normal 
                            ${index < paths.length - 1 ? "text-white/50" : "text-white"}`}
                        >
                            {path}
                        </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TitleBar;
