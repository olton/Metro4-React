import React, {Component} from "react";
import ReactDom from "react-dom";
import "./dialog.less";
import {Button} from "../../index";

const dialogRoot = document.body;

export default class Dialog extends Component {
    static defaultProps = {
        closeButton: true,
        open: false,
        title: "",
        actions: [],
        modal: true,
        overlayColor: "#ffffff",
        overlayAlpha: 1,
        speed: .4
    };

    constructor(props){
        super(props);

        this.state = {
            open: this.props.open
        };

        this.dialog = React.createRef();
        this.actions = [];
        this.dialogSize = {
            height: 0,
            width: 0
        };

        this.actions = this.props.actions.map((el, index) => {
            return (
                <Button {...el} key={index}/>
            )
        });

        this.onClose = this.onClose.bind(this);
    }

    componentDidMount(){
        const node = ReactDom.findDOMNode(this.dialog);
        this.dialogSize = {
            height: node.clientHeight,
            width: node.clientWidth
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            open: nextProps.open
        })
    }

    onClose(){
        this.props.onClose();
    }

    render(){
        const {title, closeButton, modal, overlayColor, overlayAlpha, speed} = this.props;
        const {open} = this.state;

        return ReactDom.createPortal(
            <React.Fragment>
                {modal && open && (
                    <div className={'overlay'} style={{backgroundColor: overlayColor, opacity: overlayAlpha}}>{''}</div>
                )}

                <div className={'dialog'} style={{
                    transition: `transform ${speed}s, opacity ${speed}s`,
                    transform: open ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: open ? 1 : 0,
                    marginLeft: -this.dialogSize.width/2,
                    marginTop: -this.dialogSize.height/2,
                }} ref={ref => this.dialog = ref}>

                    {closeButton && (
                        <Button cls={'square closer'} onClick={this.onClose}/>
                    )}

                    <div className={'dialog-title'}>{title}</div>
                    <div className={'dialog-content'}>{this.props.children}</div>

                    {this.actions.length > 0 && (
                        <div className={'dialog-actions'}>{this.actions}</div>
                    )}

                </div>
            </React.Fragment>,
            dialogRoot
        )
    }
}