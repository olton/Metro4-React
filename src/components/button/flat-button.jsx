import React from "react";
import "./button.less";

export default class FlatButton extends React.Component{
    static defaultProps = {
        cls: ""
    };

    render(){
        const className = `button flat-button ${this.props.cls}`;

        return (
            <button className={className} type={this.props.type}>
                {this.props.children}
            </button>
        )
    }
}

