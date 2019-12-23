import React from "react";

export default class AppBarItem extends React.Component {
    render(){
        const {as: Element, cls, className, isBrand, name, children, ...rest} = this.props;

        return (
            <Element className={`${isBrand ? 'brand no-hover' : 'app-bar-item'} ${cls} ${className}`} {...rest}>
                {name !== "" ? name : children}
            </Element>
        )
    }
}

AppBarItem.defaultProps = {
    name: "",
    isBrand: false,
    as: "span",
    cls: "",
    className: ""
};