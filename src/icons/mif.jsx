import React from "react";
import "./mif.less"

export default class Icon extends React.Component {
    static defaultProps = {
        name: "",
        size: "1x",
        cls: ""
    };

    render(){
        const {
            name,
            size,
            cls
        } = this.props;

        const className = `mif-${name} ${size} ${cls}`;

        return (
            <span className={className} />
        )
    }
}