import React from "react";
import "./hero.css";

const Hero = ({as: Element = "div", cls = "", className = "", children}) => {
    return (
        <Element className={'hero ' + cls}>
            {children}
        </Element>
    )
};

export default Hero;

