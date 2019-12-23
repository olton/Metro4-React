import React from "react";

export default class Icon extends React.Component {
    render(){
        const {
            prefix,
            name,
            size,
            cls,
            className
        } = this.props;

        return (
            <span className={`${prefix+name} ${size ? prefix + size : ''} ${cls} ${className}`}/>
        )
    }
}

Icon.defaultProps = {
    prefix: "mif-",
    name: "",
    size: false,
    cls: "",
    className: ""
};