import React from "react";
import "./tag.less";

export default class Tag extends React.Component {
    static defaultProps = {
        cls: "",
        clsTitle: "",
        clsRemover: "",
    };

    render() {
        const {cls, clsTitle, clsRemover} = this.props;
        return (
            <div className={'tag ' + cls}>
                <span className={'title ' + clsTitle}>{this.props.children}</span>
                <span className={'remover ' + clsRemover}>&times;</span>
            </div>
        )
    }
}