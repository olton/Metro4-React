import React from "react";
import "./button.less";
import Icon from "../../icons/icon.jsx";

export default class InfoButton extends React.Component {
    static defaultProps = {
        title: "",
        subtitle: "",
        hrefA: "",
        hrefB: "",
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
        const {
            title, subtitle, hrefA, hrefB,
            icon, image,
            cls, clsTitle, clsSubtitle
        } = this.props;
        const className = `info-button ${cls}`;

        return (
            <div className={className}>
                <a href={hrefA} className={'button ' + clsTitle}>
                    {icon && (
                        <Icon name={icon} cls="icon"/>
                    )}

                    {image && (
                        <img src={image} alt=""/>
                    )}

                    {title}
                </a>

                <a href={hrefB} className={"info " + clsSubtitle}>
                    <span>{subtitle}</span>
                </a>
            </div>
        )
    }
}