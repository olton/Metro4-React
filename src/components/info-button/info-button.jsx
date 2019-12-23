import React from "react";
import Icon from "../icon/icon.jsx";
import "./info-button.less";

export default class InfoButton extends React.Component {
    constructor(props){
        super(props);
        this.button = React.createRef();
    }

    render(){
        const SubElement = this.props.as === 'a' ? 'span' : 'a';
        const {
            as: Element, title, subtitle, href, hrefTitle, hrefSubtitle,
            icon, image,
            cls, className, clsTitle, clsSubtitle, clsIcon,
            onClick
        } = this.props;
        const elemProps = {};
        const buttonProps = {};
        const infoProps = {};

        if (this.props.as === 'a') {
            elemProps.href = href;
        } else {
            buttonProps.href = hrefTitle;
            infoProps.href = hrefSubtitle;
        }

        return (
            <Element className={`info-button ${cls} ${className}`} {...elemProps} onClick={onClick}>
                <SubElement {...buttonProps} className={'button ' + clsTitle}>
                    {icon && (
                        <Icon name={icon} cls={"icon " + clsIcon}/>
                    )}

                    {image && (
                        <img src={image} alt="" className={'icon ' + clsIcon}/>
                    )}

                    {title}
                </SubElement>

                <SubElement {...infoProps} className={'info ' + clsSubtitle}>
                    <span>{subtitle}</span>
                </SubElement>
            </Element>
        )
    }
}

InfoButton.defaultProps = {
    as: "span",
    title: "",
    subtitle: "",
    href: "",
    hrefTitle: "",
    hrefSubtitle: "",
    icon: null,
    iconPrefix: "mif-",
    image: null,
    cls: "",
    className: "",
    clsTitle: "",
    clsSubtitle: "",
    clsIcon: "",
    onClick: () => {}
};