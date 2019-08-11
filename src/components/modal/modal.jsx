import React from "react";
import {createPortal} from "react-dom";
import "./modal.less";
import Colors from "../../colors/colors";

export default class Modal extends React.Component {
    static defaultProps = {
        open: false,
        mount: document.body,
        cls: "",
        overlayColor: "#fff",
        overlayAlpha: 1,
        onClick: () => {}
    };

    render(){
        const {cls, onClick, mount, open} = this.props;
        const style = {
            backgroundColor: Colors.toRgbaString( Colors.toRGBA(this.props.overlayColor, this.props.overlayAlpha) )
        };

        return createPortal(
            <div className={'modal ' + cls } onClick={onClick} hidden={!open} style={style}>
                {this.props.children}
            </div>,
            mount
        )
    }
}