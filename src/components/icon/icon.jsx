import React from "react";

export default class Icon extends React.Component {
    static defaultProps = {
        prefix: "mif-",
        name: "",
        size: false,
        cls: ""
    };

    render(){
        const {
            prefix,
            name,
            size,
            cls
        } = this.props;

        const className = `${prefix+name} ${size ? prefix + size : ''} ${cls}`;

        return (
            <span className={className}/>
        )
    }
}