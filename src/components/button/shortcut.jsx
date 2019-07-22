import React from "react";
import "./button.less";

export default class Shortcut extends React.Component{
    static defaultProps = {
        as: "button",
        title: "",
        tag: "",
        icon: false,
        image: false,
        cls: "",
        type: "button"
    };

    render(){
        const {
            icon,
            image,
            title,
            tag,
            cls,
            type
        } = this.props;

        const Element = this.props.as;
        const className = `shortcut ${cls}`;

        return (
            <Element className={className} type={type}>
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

                {tag && (
                    <span className={'tag '}>
                    {tag}
                </span>
                )}
            </Element>
        )
    }
}
