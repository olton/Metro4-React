import React from "react";
import "./button.less";

export default class FlatButton extends React.Component{
    static defaultProps = {
        as: "button",
        cls: ""
    };

    render(){
        const Element = this.props.as;
        const className = `button flat-button ${this.props.cls}`;

        return (
            <Element className={className} type={this.props.type}>
                {this.props.children}
            </Element>
        )
    }
}

