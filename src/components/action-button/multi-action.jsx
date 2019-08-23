import React from "react";
import ActionButton from "./action-button.jsx";
import Icon from "../icon/icon.jsx";
import "./action-button.less";

export class MultiActionItem extends React.Component {
    static defaultProps = {
        icon: null,
        iconPrefix: "mif-",
        image: null,
        cls: "",
        className: "",
        onClick: () => {}
    };

    onClick = (e) => {
        this.props.onClick(e);
    };

    render() {
        const {icon, iconPrefix, cls, className, onClick, ...rest} = this.props;
        return (
            <li>
                <a {...rest} onClick={this.onClick}>
                    <Icon name={icon} prefix={iconPrefix} cls={cls + ' ' + className}/>
                </a>
            </li>
        )
    }
}

export default class MultiAction extends React.Component {
    static defaultProps = {
        drop: "up",
        itemClickClose: true,
        onClick: () => {}
    };

    constructor(props){
        super(props);

        this.state = {
            active: false
        };
    }

    toggleState = (e) => {
        const active = !!this.state.active;

        this.setState( {
            active: !active
        });

        this.props.onClick(e);
    };

    itemClick = (e, click) => {
        if (this.props.itemClickClose) this.toggleState();
        click();
    };

    render() {
        const {drop, onClick, itemClickClose, ...rest} = this.props;

        rest.cls = this.state.active ? rest.cls + ' active ' : rest.cls;

        return (
            <div className="multi-action">
                <ActionButton {...rest} onClick={this.toggleState}/>
                <ul className={"actions drop-" + drop}>
                    {React.Children.map(this.props.children, (item, index) => {
                        return (
                            <MultiActionItem key={index} {...item.props} onClick={ (e) => {this.itemClick(e, item.props.onClick)} }/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}