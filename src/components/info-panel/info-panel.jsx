import React from "react";
import "./info-panel.css";

export class InfoPanelTitle extends React.Component {
    render(){
        return (
            <div className={'info-panel-header ' + this.props.cls}>{this.props.children}</div>
        )
    }
}

InfoPanelTitle.defaultProps = {
    cls: "",
};

export class InfoPanelContent extends React.Component {
    render(){
        return (
            <div className={'info-panel-content ' + this.props.cls}>{this.props.children}</div>
        )
    }
}

InfoPanelContent.defaultProps = {
    cls: "",
};

export class InfoPanelFooter extends React.Component {
    render(){
        return (
            <div className={'info-panel-footer ' + this.props.cls}>{this.props.children}</div>
        )
    }
}

InfoPanelFooter.defaultProps = {
    cls: "",
};

export default class InfoPanel extends React.Component {
    render(){
        const {cls} = this.props;

        return (
            <div className={'info-panel ' + cls}>
                {this.props.children}
            </div>
        )
    }
}

InfoPanel.defaultProps = {
    cls: ""
};