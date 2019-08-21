import React from "react";
import "./grid.less";

const Grid = props => {
    const {as: Element, cls, className, ...rest} = props;
    return (
        <Element className={`grid ${cls} ${className}`} {...rest}>
            {props.children}
        </Element>
    )
};

Grid.defaultProps = {as: "div", cls: "", className: ""};

const Row = props => {
    const {as: Element, cls, className, ...rest} = props;
    return (
        <Element className={`row ${cls} ${className}`} {...rest}>
            {props.children}
        </Element>
    )
};

Row.defaultProps = {as: "div", cls: "", className: ""};

const Cell = props => {
    const {as: Element, cls, className, ...rest} = props;
    return (
        <Element className={`${cls} ${className}`} {...rest}>
            {props.children}
        </Element>
    )
};

Cell.defaultProps = {as: "div", cls: "", className: ""};

export {Grid, Row, Cell};
