import React, {Component} from "react";
import "./dialog.css";
import {Button} from "../../../index";
import Body from "../body/body";

export default class Dialog extends Component {
    constructor(props){
        super(props);

        this.dialog = React.createRef();
        this.actions = [];

        this.actions = this.props.actions.map((el, index) => {
            return (
                <Button {...el} key={index} onClick={this.actionButtonClick.bind(this, el.onClick)}/>
            )
        });

        this.onClose = this.onClose.bind(this);
        this.actionButtonClick = this.actionButtonClick.bind(this);
    }

    actionButtonClick(cb){
        if (typeof cb === 'function') cb();
        if (this.props.actionClickClose) this.props.onClose();
    }

    onClose(){
        this.props.onClose();
    }

    render(){
        const {animation, open, title, closeButton, modal, overlayColor, overlayAlpha, speed, cls, clsTitle, clsContent, clsActions, height, width, contentHeight} = this.props;
        let dialogStyle = animation ? {
            transition: `transform ${speed}s, opacity ${speed}s`,
            transform: open ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: open ? 1 : 0,
        } : {
            transform: open ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: open ? 1 : 0,
        };

        return (
            <Body>
                {modal && open && (
                    <div className={'overlay'} style={{backgroundColor: overlayColor, opacity: overlayAlpha}}>{''}</div>
                )}

                <div className={'dialog-wrapper'} style={dialogStyle}>
                    <div className={'dialog ' + cls} ref={this.dialog} style={{
                        height: height,
                        width: width,
                    }}>

                        {closeButton && (
                            <Button cls={'square closer'} onClick={this.onClose}/>
                        )}

                        <div className={'dialog-title ' + clsTitle}>{title}</div>
                        <div className={'dialog-content ' + clsContent} style={{height: contentHeight}}>{this.props.children}</div>

                        {this.actions.length > 0 && (
                            <div className={'dialog-actions ' + clsActions}>{this.actions}</div>
                        )}

                    </div>
                </div>
            </Body>
        )
    }
}

Dialog.defaultProps = {
    closeButton: true,
    open: false,
    title: "",
    actions: [],
    actionClickClose: true,
    modal: true,
    overlayColor: "#ffffff",
    overlayAlpha: 1,
    speed: .4,
    width: "auto",
    height: "auto",
    contentHeight: "auto",
    cls: "",
    clsTitle: "",
    clsContent: "",
    clsActions: "",
    animation: false
};