import React from "react";
import "./shortcut.less";

export default class Shortcut extends React.Component{
    static defaultProps = {
        as: "button",
        title: "",
        badge: false,
        icon: false,
        image: false,
        cls: "",
        type: "button",
        href: ""
    };

    constructor(props){
        super(props);
        this.button = null;
    }

    render(){
        const {
            as,
            icon,
            image,
            title,
            badge,
            cls,
            type,
            href
        } = this.props;

        const Element = this.props.as;
        const className = `shortcut ${cls}`;
        const buttonProps = {};

        if (as === 'a') {
            buttonProps.href = href;
        } else {
            buttonProps.type = type;
        }

        return (
            <Element className={className} {...buttonProps} ref={btn => this.button = btn} onClick={this.props.onClick}>
                {icon && (
                    <span className={'icon mif-' + icon}/>
                )}

                {image && (
                    <img className={'icon '} src={image} alt=""/>
                )}

                {title && (
                    <span className={'caption '}>
                    {title}
                </span>
                )}

                {badge && (
                    <span className={'badge '}>
                    {badge}
                </span>
                )}
            </Element>
        )
    }
}
