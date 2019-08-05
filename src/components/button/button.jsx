import React from "react";
import Icon from "../icon/icon.jsx";
import "./button.less";

export default class Button extends React.Component{
    static defaultProps = {
        as: "button",
        title: "",
        tag: false,
        icon: false,
        iconPrefix: "mif-",
        image: false,
        cls: "",
        type: "button",
        href: "",
        isFlat: false
    };

    constructor(props){
        super(props);
        this.button = null;
    }

    render(){
        const {
            as,
            icon,
            iconPrefix,
            image,
            title,
            cls,
            type,
            href,
            isFlat,
            tag
        } = this.props;

        const Element = this.props.as;
        const className = `button ${cls} ${isFlat ? 'flat-button' : ''}`;
        const buttonProps = {};

        if (as === 'a') {
            buttonProps.href = href;
        } else {
            buttonProps.type = type;
        }

        return (
            <Element className={className} {...buttonProps} ref={btn => this.button = btn} tabIndex={this.props.tabIndex} onClick={this.props.onClick}>
                {icon && (
                    <Icon prefix={iconPrefix} name={icon} />
                )}

                {image && (
                    <img className={'icon '} src={image} alt=""/>
                )}

                {title && (
                    <span className={'caption '} dangerouslySetInnerHTML={{__html: title}}/>
                )}

                {tag && (
                    <span className={'tag '}>
                    {tag}
                </span>
                )}

                {this.props.children}
            </Element>
        )
    }
}
