import React from "react";
import "./button.less";

export class Button extends React.Component{
    static defaultProps = {
        cls: ""
    };

    render(){
        const className = `button ${this.props.cls}`;

        return (
            <button className={className}>
                {this.props.children}
            </button>
        )
    }
}

export class FlatButton extends React.Component{
    static defaultProps = {
        cls: ""
    };

    render(){
        const className = `button flat-button ${this.props.cls}`;

        return (
            <button className={className}>
                {this.props.children}
            </button>
        )
    }
}

