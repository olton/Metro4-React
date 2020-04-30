import React from "react";
import "./image-button.css";
import Icon from "../icon/icon";

export default class ImageButton extends React.Component{
    constructor(props){
        super(props);
        this.button = React.createRef();
    }

    render(){
        const {
            as: Element,
            icon,
            iconPrefix,
            image,
            title,
            cls,
            className,
            clsIcon,
            clsTitle,
            ...rest
        } = this.props;

        return (
            <Element className={`image-button ${cls} ${className}`} ref={this.button} {...rest}>
                {icon && (
                    <Icon name={icon} prefix={iconPrefix} cls={'icon ' + clsIcon}/>
                )}

                {image && (
                    <img className={'icon ' + clsIcon} src={image} alt=""/>
                )}
                {title && (
                    <span className={'caption '}>{title}</span>
                )}

                {this.props.children}
            </Element>
        )
    }
}

ImageButton.defaultProps = {
    as: "button",
    title: "",
    icon: null,
    iconPrefix: "mif-",
    image: null,
    cls: "",
    className: "",
    clsIcon: "",
    clsTitle: ""
};