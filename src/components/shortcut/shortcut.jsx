import React from "react";
import "./shortcut.css";
import Icon from "../icon/icon";
import Badge from "../badge/badge";

export default class Shortcut extends React.Component{
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
            badge,
            cls,
            className,
            clsIcon,
            clsTitle,
            clsBadge,
            ...rest
        } = this.props;

        return (
            <Element className={`shortcut ${cls} ${className}`} ref={this.button} {...rest}>
                {icon && (
                    <Icon name={icon} prefix={iconPrefix} cls={'icon ' + clsIcon}/>
                )}

                {image && (
                    <img className={'icon ' + clsIcon} src={image} alt=""/>
                )}

                {title && (
                    <span className={'caption ' + clsTitle}>{title}</span>
                )}

                {badge && (
                    <Badge cls={clsBadge} value={badge}/>
                )}
            </Element>
        )
    }
}

Shortcut.defaultProps = {
    as: "button",
    title: "",
    badge: null,
    icon: null,
    iconPrefix: "mif-",
    image: null,
    cls: "",
    className: "",
    clsIcon: "",
    clsTitle: "",
    clsBadge: ""
};