import React from "react";
import ReactDOM from "react-dom";
import "./hint.less";

export default class Hint extends React.Component {
    static defaultProps = {
        text: "",
        position: 'top', //top, left, right, bottom
        distance: 4,
        markText: false,
        destroyType: 'timeout', // timeout, mouseleave
        timeout: 10000
    };

    constructor(props) {
        super(props);
        this.children = typeof props.children === 'object' ? props.children : React.createElement('span', {className: props.markText ? 'hinted-text' : ''}, props.children);
        this.ref = React.createRef();
        this.hint = null;

        this.destroyHint = this.destroyHint.bind(this);
    }

    componentDidMount(){
        const el = ReactDOM.findDOMNode(this.ref.current);
        el.addEventListener("mouseenter", this.mouseEnter);

        if (this.props.destroyType === 'mouseleave')
            el.addEventListener("mouseleave", this.mouseLeave);

        window.addEventListener("scroll", this.setPosition);
        window.addEventListener("resize", this.setPosition);
    }

    componentWillUnmount(){
        const el = ReactDOM.findDOMNode(this.ref.current);
        el.removeEventListener("mouseenter", this.mouseEnter);

        if (this.props.destroyType === 'mouseleave')
            el.removeEventListener("mouseleave", this.mouseLeave);

        window.removeEventListener("scroll", this.setPosition);
        window.removeEventListener("resize", this.setPosition);
    }

    mouseEnter = () => {
        this.createHint();
    };

    mouseLeave = () => {
        this.destroyHint();
    };

    setPosition = () => {

        if (!this.hint) {
            return ;
        }

        const target = ReactDOM.findDOMNode(this.ref.current);
        const hint = this.hint;
        const {position, distance} = this.props;
        const targetRect = target.getBoundingClientRect();
        const hintRect = hint.getBoundingClientRect();
        let top, left;

        switch (position) {
            case "bottom": {
                top = (targetRect.top + targetRect.height + distance) + 'px';
                left = (targetRect.left - (hintRect.width - targetRect.width) / 2) + 'px';
                break;
            }
            case "left": {
                top = (targetRect.top + targetRect.height / 2 - hintRect.height / 2) + 'px';
                left = (targetRect.left - hintRect.width - distance) + 'px';
                break;
            }
            case "right": {
                top = (targetRect.top + targetRect.height / 2 - hintRect.height / 2) + 'px';
                left = (targetRect.left + targetRect.width + distance) + 'px';
                break;
            }
            default: {
                top = (targetRect.top - hintRect.height - distance) + 'px';
                left = (targetRect.left - (hintRect.width - targetRect.width) / 2) + 'px';
            }
        }

        hint.style.top = top;
        hint.style.left = left;
    };

    createHint = () => {
        const {text, destroyType, timeout} = this.props;
        const hint = document.createElement("div");

        document.body.appendChild(hint);

        hint.style.visibility = 'hidden';
        hint.className = 'hint';
        hint.innerText = text;

        hint.style.visibility = 'visible';

        this.hint = hint;

        this.setPosition();

        if (destroyType === 'timeout') {
            setTimeout( () => {
                this.destroyHint();
            }, timeout);
        }
    };

    destroyHint() {
        if (!this.hint) {
            return ;
        }
        document.body.removeChild(this.hint);
        this.hint = null;
    };

    render(){
        return (
            <React.Fragment>
                {React.cloneElement(this.children, {ref: this.ref})}
            </React.Fragment>
        )
    }
}