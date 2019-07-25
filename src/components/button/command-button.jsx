import React from "react";
import "./button.less";

export default class CommandButton extends React.Component{
    static defaultProps = {
        as: "button",
        title: "",
        subtitle: "",
        icon: false,
        image: false,
        cls: "",
        type: "button",
        href: "#"
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
            subtitle,
            cls,
            type,
            href
        } = this.props;

        const Element = as;
        const className = `command-button ${cls}`;
        const buttonProps = {};

        if (as === 'a') {
            buttonProps.href = href;
        } else {
            buttonProps.type = type;
        }

        return (
            <Element className={className} {...buttonProps} ref={btn => this.button = btn}>
                {icon && (
                    <span className={'icon mif-' + icon}/>
                )}

                {image && (
                    <img className={'icon '} src={image} alt=""/>
                )}
                <span className={'caption '}>
                    {title}
                    <small>{subtitle}</small>
                </span>
            </Element>
        )
    }
}
