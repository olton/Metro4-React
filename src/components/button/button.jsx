import React from "react";
import Icon from "../icon/icon.jsx";
import "./button.less";
import Badge from "../badge/badge";

export default class Button extends React.Component{
    static defaultProps = {
        as: "button",
        title: "",
        badge: null,
        icon: null,
        iconPrefix: "mif-",
        image: null,
        cls: "",
        className: "",
        clsTitle: "",
        clsIcon: "",
        clsBadge: ""
    };

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
            cls, className,
            clsTitle, clsIcon, clsBadge,
            badge,
            ...rest
        } = this.props;

        const classButton = `button ${cls} ${className}`;

        return (
            <Element className={classButton} ref={this.button} {...rest}>
                {icon && (
                    <Icon prefix={iconPrefix} name={icon} cls={clsIcon} />
                )}

                {image && (
                    <img className={'icon ' + clsIcon} src={image} alt=""/>
                )}

                {title && (
                    <span className={'caption ' + clsTitle} dangerouslySetInnerHTML={{__html: title}}/>
                )}

                {badge && (
                    <Badge value={badge} cls={clsBadge}/>
                )}

                {this.props.children}
            </Element>
        )
    }
}
