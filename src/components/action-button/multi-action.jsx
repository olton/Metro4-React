import React from "react";
import ActionButton from "./action-button.jsx";
import Icon from "../icon/icon.jsx";
import "./action-button.less";

export class MultiActionItem extends React.Component {
    static defaultProps = {
        icon: false,
        iconPrefix: "mif-",
        iconSize: "1x",
        image: false,
        cls: "",
        onClick: () => {}
    };

    render() {
        const {icon, iconPrefix, iconSize, cls, onClick} = this.props;
        return (
            <li>
                <a onClick={onClick}>
                    <Icon name={icon} prefix={iconPrefix} size={iconSize} cls={cls}/>
                </a>
            </li>
        )
    }
}

export default class MultiAction extends React.Component {
    static defaultProps = {
        icon: false,
        iconPrefix: "mif-",
        image: false,
        cls: "",
        drop: "up"
    };

    constructor(props){
        super(props);

        this.state = {
            active: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const active = !!this.state.active;

        this.setState( {
            active: !active
        });
    }

    render() {
        const {icon, iconPrefix, image, cls, drop} = this.props;
        const actionProps = {icon, iconPrefix, image, cls};

        return (
            <div className="multi-action">
                <ActionButton {...actionProps} active={this.state.active} onClick={this.handleClick}/>
                <ul className={"actions drop-" + drop}>
                    {React.Children.map(this.props.children, function(item, index){
                        return (
                            <MultiActionItem key={index} {...item.props}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}