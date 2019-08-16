import React from "react";
import "./grid.less";

const Grid = props => {
    const Element = props.as ? props.as : "div";
    return (
        <Element className={'grid '+ (props.cls ? props.cls : '')} {...props}>
            {props.children}
        </Element>
    )
};

const Row = props => {
    const Element = props.as ? props.as : "div";
    return (
        <Element className={'row '+ (props.cls ? props.cls : '')} {...props}>
            {props.children}
        </Element>
    )
};

const Cell = props => {
    const Element = props.as ? props.as : "div";
    return (
        <Element className={props.cls ? props.cls : ''} {...props}>
            {props.children}
        </Element>
    )
};

export {Grid, Row, Cell};
