import React, {Component, Children} from "react";
import "./toolbar.less";

export class ToolButton extends Component {
    static defaultProps = {
        as: "span",
        cls: "",
        className: ""
    };

    render() {
        const {as: Element, cls, className, ...rest} = this.props;
        return (
            <Element className={`tool-button ${cls} ${className}`} {...rest}>
                {this.props.children}
            </Element>
        )
    }
}

export default class ToolBar extends Component {
    static defaultProps = {
        cls: "",
        className: ""
    };

    render() {
        const {cls, className} = this.props;

        return (
            <div className={`toolbar ${cls} ${className}`}>
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