import React from "react";
import {Collapse} from "../../index";

export default class AppBarMenu extends React.Component {
    static defaultProps = {
        cls: "",
        collapsed: false,
        speed: 100
    };

    render(){
        const {cls, collapsed, speed, ...props} = this.props;
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;

        return (
            <Collapse isOpen={!collapsed} elementType={'ul'} className={'app-bar-menu ' + cls + ' ' + (collapsed ? '-is-collapsed' : '')} {...props} transition={transition}>
                {this.props.children}
            </Collapse>
        )
    }
}
