import React from "react";
import "./container.less";

export default class Container extends React.Component {
    static defaultProps = {
        as: "div",
        fluid: false,
        cls: ""
    };

    render(){
        const Element = this.props.as;
        const className = `container${this.props.fluid ? '-fluid' : ''} ${this.props.cls}`;

        return (
            <Element className={className}>
                {this.props.children}
            </Element>
        )
    }
}