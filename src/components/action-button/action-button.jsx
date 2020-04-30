import React from "react";
import Icon from "../icon/icon.jsx";
import "./action-button.css";

export default class ActionButton extends React.Component {
    render() {
        const {as: Element, variant, icon, iconPrefix, image, cls, className, clsIcon, ...rest} = this.props;

        return (
            <Element className={`action-button ${cls} ${className} ${variant === 'secondary' ? 'second' : ''}`} {...rest}>
                {icon && (
                    <Icon name={icon} iconPrefix={iconPrefix} cls={clsIcon}/>
                )}
                {image && (
                    <img src={image} alt="" className={clsIcon}/>
                )}
            </Element>
        )
    }
}

ActionButton.defaultProps = {
    as: "button",
    variant: "default",
    icon: null,
    iconPrefix: 'mif-',
    image: null,
    cls: '',
    className: "",
    clsIcon: "",
};