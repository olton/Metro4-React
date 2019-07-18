import React from "react";
import "./button.less";

export default class CommandButton extends React.Component{
    static defaultProps = {
        title: "",
        subtitle: "",
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
            subtitle,
            cls,
            type
        } = this.props;
        const className = `command-button ${cls}`;

        return (
            <button className={className} type={type}>
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
            </button>
        )
    }
}
