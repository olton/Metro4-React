import React from "react";
import {Collapse} from "../../index";

export default class AppBarMenu extends React.Component {
    static defaultProps = {
        cls: "",
        collapsed: false
    };

    render(){
        const {cls, collapsed, ...props} = this.props;

        return (
            <Collapse isOpen={!collapsed} elementType={'ul'} className={'app-bar-menu ' + cls} {...props}>
                {this.props.children}
            </Collapse>
        )
    }
}
