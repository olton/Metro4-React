import React from "react";
import ReactDom from "react-dom";

export default class Body extends React.Component {
    render(){
        return ReactDom.createPortal(
            this.props.children,
            document.body
        )
    }
}