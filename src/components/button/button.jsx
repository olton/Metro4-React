import React from "react";
import "./button.less";

export default class Button extends React.Component{
    static defaultProps = {
        title: "",
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
            cls,
            type
        } = this.props;

        const className = `button ${cls}`;

        return (
            <button className={className} type={type}>
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
            </button>
        )
    }
}
