import React from "react";
import "./tag.less";

export default class Tag extends React.Component {
    static defaultProps = {
        cls: "",
        clsTitle: "",
        clsRemover: "",
        onClick: () => {}
    };

    onClick = e => {
        this.props.onClick(e);
    };

    render() {
        const {cls, clsTitle, clsRemover, ...addProps} = this.props;
        return (
            <div className={'tag ' + cls} {...addProps}>
                <span className={'title ' + clsTitle}>{this.props.children}</span>
                <span className={'remover ' + clsRemover} onClick={this.onClick}>&times;</span>
            </div>
        )
    }
}