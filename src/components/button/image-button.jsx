import React from "react";
import "./button.less";

export default class ImageButton extends React.Component{
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
        const className = `image-button ${cls}`;

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
                </span>
            </button>
        )
    }
}
