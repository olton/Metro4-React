import React from "react";
import "./grid.less";

const Grid = props => {
    const {as, cls, ...rest} = props;
    const Element = as ? as : "div";
    return (
        <Element className={'grid '+ (cls ? cls : '')} {...rest}>
            {props.children}
        </Element>
    )
};

const Row = props => {
    const {as, cls, ...rest} = props;
    const Element = as ? as : "div";
    return (
        <Element className={'row '+ (cls ? cls : '')} {...rest}>
            {props.children}
        </Element>
    )
};

const Cell = props => {
    const {as, cls, ...rest} = props;
    const Element = as ? as : "div";
    return (
        <Element className={(cls ? cls : '')} {...rest}>
            {props.children}
        </Element>
    )
};

export {Grid, Row, Cell};
