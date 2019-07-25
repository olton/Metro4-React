import React from "react";
import "./mif.less"

export default class Icon extends React.Component {
    static defaultProps = {
        name: "",
        size: false,
        cls: ""
    };

    render(){
        const {
            name,
            size,
            cls
        } = this.props;

        const className = `mif-${name} ${size ? 'mif-' + size : ''} ${cls}`;

        return (
            <span className={className} />
        )
    }
}