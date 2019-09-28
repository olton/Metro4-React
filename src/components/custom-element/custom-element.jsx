import React from "react";

const CustomElement = ({as: Element = "span", children, ...rest}) => {
    return (
        <Element {...rest}>{children}</Element>
    )
};

export default CustomElement;