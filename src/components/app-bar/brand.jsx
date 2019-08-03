import React from "react";
import "./app-bar.less";

export default class AppBarBrand extends React.Component {
    static defaultProps = {
        as: "span",
        cls: ""
    };

    render(){
        const {as: Element, cls, ...props} = this.props;

        return (
            <Element className={'brand ' + cls} {...props}>
                {this.props.name ? this.props.name : this.props.children}
            </Element>
        )
    }
}
