import React from "react";
import "./button.less";

export default class ImageButton extends React.Component{
    static defaultProps = {
        as: "button",
        title: "",
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
            cls,
            type,
            href
        } = this.props;

        const Element = this.props.as;
        const className = `image-button ${cls}`;

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
                </span>
            </Element>
        )
    }
}
