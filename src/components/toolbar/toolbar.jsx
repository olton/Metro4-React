import React, {Component, Children} from "react";
import "./toolbar.less";

export class ToolButton extends Component {
    static defaultProps = {
        as: "span",
        cls: ""
    };

    render() {
        const {as: Element, cls, ...props} = this.props;
        return (
            <Element className={'tool-button ' + (cls ? cls : "")} {...props}>
                {this.props.children}
            </Element>
        )
    }
}

export default class ToolBar extends Component {
    static defaultProps = {
        cls: ""
    };

    render() {
        const className = `toolbar ${this.props.cls}`;

        return (
            <div className={className}>
                {Children.map(this.props.children, function(el, index){
                    return (
                        <ToolButton {...el.props} key={index}>
                            {el.props.children}
                        </ToolButton>
                    )
                })}
            </div>
        )
    }
}