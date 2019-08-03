import React from "react";
import "./info-panel.less";

export class InfoPanelTitle extends React.Component {
    static defaultProps = {
        cls: "",
    };

    render(){
        return (
            <div className={'info-panel-header ' + this.props.cls}>{this.props.children}</div>
        )
    }
}

export class InfoPanelContent extends React.Component {
    static defaultProps = {
        cls: "",
    };

    render(){
        return (
            <div className={'info-panel-content ' + this.props.cls}>{this.props.children}</div>
        )
    }
}

export class InfoPanelFooter extends React.Component {
    static defaultProps = {
        cls: "",
    };

    render(){
        return (
            <div className={'info-panel-footer ' + this.props.cls}>{this.props.children}</div>
        )
    }
}

export default class infoPanel extends React.Component {
    static defaultProps = {
        cls: ""
    };
    render(){
        const {cls} = this.props;

        return (
            <div className={'info-panel ' + cls}>
                {this.props.children}
            </div>
        )
    }
}
