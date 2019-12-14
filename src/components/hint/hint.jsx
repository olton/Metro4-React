import React from "react";
import ReactDOM from "react-dom";
import "./hint.less";

export default class Hint extends React.Component {
    static defaultProps = {
        text: "",
        position: 'top',
        distance: 4,
        markText: false,
        destroyType: 'timeout',
        timeout: 3000
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
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        const el = ReactDOM.findDOMNode(this.ref.current);
        el.removeEventListener("mouseenter", this.mouseEnter);

        if (this.props.destroyType === 'mouseleave')
            el.removeEventListener("mouseleave", this.mouseLeave);
    }

    mouseEnter = e => {
        this.createHint(e.target);
    };

    mouseLeave = e => {
        this.destroyHint();
    };

    createHint = target => {
        const {text, position, distance, destroyType, timeout} = this.props;
        const rect = target.getBoundingClientRect();
        const hint = document.createElement("div");
        let top, left;

        document.body.appendChild(hint);

        hint.style.visibility = 'hidden';
        hint.className = 'hint';
        hint.innerText = text;

        const hintRect = hint.getBoundingClientRect();

        switch (position) {
            case "bottom": {
                top = (rect.top + rect.height + distance) + 'px';
                left = (rect.left - (hintRect.width - rect.width) / 2) + 'px';
                break;
            }
            case "left": {
                top = (rect.top + rect.height / 2 - hintRect.height / 2) + 'px';
                left = (rect.left - hintRect.width - distance) + 'px';
                break;
            }
            case "right": {
                top = (rect.top + rect.height / 2 - hintRect.height / 2) + 'px';
                left = (rect.left + rect.width + distance) + 'px';
                break;
            }
            default: {
                top = (rect.top - hintRect.height - distance) + 'px';
                left = (rect.left - (hintRect.width - rect.width) / 2) + 'px';
            }
        }

        hint.style.top = top;
        hint.style.left = left;

        hint.style.visibility = 'visible';

        this.hint = hint;

        if (destroyType === 'timeout') {
            setTimeout( () => {
                this.destroyHint();
            }, timeout);
        }
    };

    destroyHint() {
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