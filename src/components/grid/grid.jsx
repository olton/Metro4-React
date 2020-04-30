import React from "react";
import "./grid.css";

const Grid = ({as: Element = "div", cls = "", className = "", ...rest}) => {
    return (
        <Element className={`grid ${cls} ${className}`} {...rest}>
            {rest.children}
        </Element>
    )
};

const Row = ({as: Element = "div", cls = "", className = "", ...rest}) => {
    return (
        <Element className={`row ${cls} ${className}`} {...rest}>
            {rest.children}
        </Element>
    )
};

const Cell = ({as: Element = "div", cls = "", className = "", ...rest}) => {
    return (
        <Element className={`${cls} ${className}`} {...rest}>
            {rest.children}
        </Element>
    )
};

export {Grid, Row, Cell};
