import React from "react";
import Icon from "../icon/icon.jsx";
import "./action-button.less";

export default class ActionButton extends React.Component {
    static defaultProps = {
        as: "button",
        icon: false,
        iconPrefix: 'mif-',
        image: false,
        cls: '',
        active: false,
        onClick: () => {}
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onClick()
    }

    render() {
        const {as: Element, icon, iconPrefix, image, cls, active} = this.props;
        const className = `action-button ${cls} ${active ? 'active' : ''}`;

        return (
            <Element className={className} onClick={this.onClick}>
                <Icon name={icon} iconPrefix={iconPrefix} image={image}/>
            </Element>
        )
    }
}