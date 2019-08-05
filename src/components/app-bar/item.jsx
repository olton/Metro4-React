import React from "react";

export default class AppBarItem extends React.Component {
    static defaultProps = {
        as: "span",
        cls: ""
    };

    render(){
        const {as: Element, cls, ...props} = this.props;

        return (
            <Element className={'app-bar-item ' + cls} {...props}>
                {this.props.name ? this.props.name : this.props.children}
            </Element>
        )
    }
}
