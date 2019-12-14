import React from "react";
import ReactDOM from "react-dom";
import "./hint.less";

export default class Hint extends React.Component {
    static defaultProps = {
        text: "",
        position: 'top',
        distance: 4
    };

    constructor(props) {
        super(props);
        this.children = typeof props.children === 'object' ? props.children : React.createElement('span', null, props.children);
        this.ref = React.createRef();
        this.hint = null;
    }

    componentDidMount(){
        const el = ReactDOM.findDOMNode(this.ref.current);
        el.addEventListener("mouseenter", this.mouseEnter);
        el.addEventListener("mouseleave", this.mouseLeave);
    }

    componentWillUnmount(){
        const el = ReactDOM.findDOMNode(this.ref.current);
        el.removeEventListener("mouseenter", this.mouseEnter);
        el.removeEventListener("mouseleave", this.mouseLeave);
    }

    mouseEnter = e => {
        const {text, position, distance} = this.props;
        const rect = e.target.getBoundingClientRect();
        const hint = document.createElement("div");

        document.body.appendChild(hint);

        hint.style.visibility = 'hidden';
        hint.className = 'hint';
        hint.innerText = text;

        const hintRect = hint.getBoundingClientRect();

        hint.style.top = (rect.top - hintRect.height - distance) + 'px';
        hint.style.left = (rect.left - (hintRect.width - rect.width) / 2) + 'px';

        hint.style.visibility = 'visible';

        this.hint = hint;
    };

    mouseLeave = e => {
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