import React from "react";
import {createPortal} from "react-dom";
import "./modal.less";

export default class Modal extends React.Component {
    static defaultProps = {
        open: false,
        mount: document.body,
        cls: "",
        onClick: () => {}
    };

    render(){
        const {cls, onClick, mount, open} = this.props;

        return createPortal(
            <div className={'modal ' + cls } onClick={onClick} hidden={!open}>
                {this.props.children}
            </div>,
            mount
        )
    }
}