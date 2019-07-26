import React from "react";
import Icon from "../icon/icon.jsx";
import "./info-button.less";

export default class InfoButton extends React.Component {
    static defaultProps = {
        as: "div",
        title: "",
        subtitle: "",
        href: "",
        hrefTitle: "",
        hrefSubtitle: "",
        icon: false,
        image: false,
        cls: "",
        clsTitle: "",
        clsSubtitle: ""
    };

    constructor(props){
        super(props);
        this.button = null;
    }

    render(){
        const Element = this.props.as;
        const SubElement = this.props.as === 'a' ? 'span' : 'a';
        const {
            title, subtitle, href, hrefTitle, hrefSubtitle,
            icon, image,
            cls, clsTitle, clsSubtitle
        } = this.props;
        const className = `info-button ${cls}`;
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
            <Element className={className} {...elemProps} onClick={this.props.onClick}>
                <SubElement {...buttonProps} className={'button ' + clsTitle}>
                    {icon && (
                        <Icon name={icon} cls="icon"/>
                    )}

                    {image && (
                        <img src={image} alt=""/>
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