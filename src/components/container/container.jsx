import React from "react";
import "./container.less";

export default class Container extends React.Component {
    static defaultProps = {
        as: "div",
        fluid: false,
        cls: "",
        className: ""
    };

    render(){
        const {as: Element, fluid, cls, className, ...rest} = this.props;

        return (
            <Element className={`container${fluid ? '-fluid' : ''} ${cls} ${className}`} {...rest}>
                {this.props.children}
            </Element>
        )
    }
}