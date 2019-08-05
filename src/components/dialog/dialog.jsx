import React, {Component} from "react";
import ReactDom from "react-dom";
import "./dialog.less";
import {Button} from "../../index";

export default class Dialog extends Component {
    static defaultProps = {
        closeButton: true,
        open: false,
        title: "",
        actions: [],
        modal: true,
        overlayColor: "#ffffff",
        overlayAlpha: 1,
        onClose: () => {}
    };

    constructor(props){
        super(props);

        this.state = {
            open: this.props.open
        };

        this.actions = [];

        this.actions = this.props.actions.map((el, index) => {
            return (
                <Button {...el} key={index}/>
            )
        });

        this.closeDialog = this.closeDialog.bind(this);
    }

    closeDialog(){
        this.setState({
            open: false
        });
        this.props.onClose();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            open: nextProps.open
        })
    }

    render(){
        const {title, closeButton, modal, overlayColor, overlayAlpha} = this.props;
        const {open} = this.state;

        return (
            <Body>
                {modal && open && (
                    <div className={'overlay'} style={{backgroundColor: overlayColor, opacity: overlayAlpha}}>{''}</div>
                )}
                <div className={'dialog'} hidden={!open} style={{
                    // transition: 'all .8s',
                    transform: open ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: open ? 1 : 0
                }}>

                    {closeButton && (
                        <Button cls={'square closer'} onClick={this.closeDialog}/>
                    )}

                    <div className={'dialog-title'}>{title}</div>
                    <div className={'dialog-content'}>{this.props.children}</div>

                    {this.actions.length > 0 && (
                        <div className={'dialog-actions'}>{this.actions}</div>
                    )}

                </div>
            </Body>
        )
    }
}