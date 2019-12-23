import React from "react";
import "../button/button.less";
import "./bottom-nav.less";

export class BottomNavItem extends React.Component {
    render(){
        const {
            label,
            icon,
            image,
            clsButton,
            clsButtonIcon,
            clsButtonLabel
        } = this.props;

        const Element = this.props.as;

        return (
            <Element className={'button ' + clsButton}>
                <span className={'icon ' + clsButtonIcon}>
                    {icon && (
                        <span className={"mif-"+icon}/>
                    )}

                    {image && (
                        <img src={image} alt=""/>
                    )}
                </span>
                <span className={'label ' + clsButtonLabel}>
                    {label}
                </span>
            </Element>
        )
    }
}

BottomNavItem.defaultProps = {
    as: "button",
    label: "",
    icon: false,
    image: false,
    clsButton: "",
    clsButtonIcon: "",
    clsButtonLabel: ""
};

export default class BottomNav extends React.Component {
    render() {
        return (
            <div className={`bottom-nav ${this.props.cls} ${this.props.className} `}>
                {this.props.children}
            </div>
        )
    }
}

BottomNav.defaultProps = {
    cls: "",
    className: ""
};