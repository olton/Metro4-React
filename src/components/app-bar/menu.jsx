import React from "react";
import "./app-bar.less";

export default class AppBArMenu extends React.Component {
    static defaultProps = {
        cls: ""
    };

    render(){
        const {cls, ...props} = this.props;

        return (
            <ul className={'app-bar-menu ' + cls} {...props}>
                {this.props.children}
            </ul>
        )
    }
}
