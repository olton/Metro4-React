import React from "react";
import Collapse from "../collapse/collapse";

export default class AppBarMenu extends React.Component {
    static defaultProps = {
        cls: "",
        collapsed: false,
        speed: 300
    };

    static getDerivedStateFromProps(props, state){
        if (props.collapsed !== state.collapsed) {
            return {
                collapsed: props.collapsed,
            }
        }
        return null;
    }

    constructor(props){
        super(props);
        this.state = {
            collapsed: props.collapsed
        };
    }

    render(){
        const {cls, speed, collapsed: initCollapsed, ...props} = this.props;
        const {collapsed} = this.state;
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;

        return (
            <Collapse isOpen={!collapsed} elementType={'ul'} className={'app-bar-menu ' + cls + ' ' + (collapsed ? '-is-collapsed' : '')} transition={transition} ref={ref => this.menu = ref} {...props} >
                {this.props.children}
            </Collapse>
        )
    }
}