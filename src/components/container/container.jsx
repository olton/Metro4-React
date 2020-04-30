import React from "react";
import "./container.css";

export default class Container extends React.Component {
    render(){
        const {as: Element, fluid, cls, className, ...rest} = this.props;

        return (
            <Element className={`container${fluid ? '-fluid' : ''} ${cls} ${className}`} {...rest}>
                {this.props.children}
            </Element>
        )
    }
}

Container.defaultProps = {
    as: "div",
    fluid: false,
    cls: "",
    className: ""
};