import React from "react";
import {Collapse} from "../../index";

export default class AppBarMenu extends React.Component {
    static defaultProps = {
        cls: "",
        collapsed: false,
        speed: 100
    };

    constructor(props){
        super(props);
        this.state = {
            expanded: this.props.expanded
        }
    }

    render(){
        const {cls, collapsed, expanded, speed, ...props} = this.props;
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;

        console.log(expanded);

        return (
            <Collapse isOpen={!collapsed && !expanded} elementType={'ul'} className={'app-bar-menu ' + cls} {...props} transition={transition}>
                {this.props.children}
            </Collapse>
        )
    }
}
