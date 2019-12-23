import React from "react";
import "./command-button.less";
import Icon from "../icon/icon";

export default class CommandButton extends React.Component{
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
            subtitle,
            cls,
            className,
            clsTitle,
            clsSubtitle,
            clsIcon,
            ...rest
        } = this.props;

        return (
            <Element className={`command-button ${cls} $className`} ref={this.button} {...rest}>
                {icon && (
                    <Icon name={icon} prefix={iconPrefix} cls={'icon ' + clsIcon}/>
                )}

                {image && (
                    <img className={'icon ' + clsIcon} src={image} alt=""/>
                )}
                <span className={'caption ' + clsTitle}>
                    {title}
                    <small className={clsSubtitle}>{subtitle}</small>
                </span>
            </Element>
        )
    }
}

CommandButton.defaultProps = {
    as: "button",
    title: "",
    subtitle: "",
    icon: null,
    iconPrefix: "mif-",
    image: null,
    cls: "",
    className: "",
    clsTitle: "",
    clsSubtitle: "",
    clsIcon: ""
};