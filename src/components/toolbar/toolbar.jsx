import React, {Component, Children} from "react";
import "./toolbar.less";

export class ToolButton extends Component {
    render() {
        const {as: Element, cls, className, ...rest} = this.props;
        return (
            <Element className={`tool-button ${cls} ${className}`} {...rest}>
                {this.props.children}
            </Element>
        )
    }
}

ToolButton.defaultProps = {
    as: "span",
    cls: "",
    className: ""
};

export default class ToolBar extends Component {
    render() {
        const {vertical, cls, className} = this.props;

        return (
            <div className={`toolbar ${cls} ${className} ${vertical ? 'vertical' : ''}`}>
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

ToolBar.defaultProps = {
    vertical: false,
    cls: "",
    className: ""
};