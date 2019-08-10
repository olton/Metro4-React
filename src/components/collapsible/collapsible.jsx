import React from "react";
import "./collapsible.less";

export default class Collapsible extends React.Component {
    static defaultProps = {
        as: "div",
        speed: 300,
        cls: ""
    };

    static getDerivedStateFromProps(props, state) {
        if (props.open !== state.expanded) {
            return {
                expanded: props.open
            }
        }
        return null;
    }

    constructor(props){
        super(props);

        this.content = React.createRef();

        this.state = {
            expanded: this.props.open,
            height: 0
        };

        this.onTransitionEnd = this.onTransitionEnd.bind(this);
        this.onTransitionStart = this.onTransitionStart.bind(this);
    }

    componentDidMount(){
        this.setState({
            height: this.content.current.scrollHeight
        })
    }

    onTransitionStart() {
        const el = this.content.current;

        if (parseInt(el.style.height) !== 0) {
            el.style.overflow = "hidden";
        }
    };

    onTransitionEnd() {
        const el = this.content.current;

        if (parseInt(el.style.height) !== 0) {
            el.style.overflow = "visible";
        }
    };

    render(){
        const {as: Element, speed, cls, children} = this.props;
        const {expanded, height} = this.state;
        const currentHeight = expanded ? height : 0;
        let style = {
            height: currentHeight,
            transitionDuration: `${speed}ms`
        };

        if (currentHeight !== 0) style = Object.assign({}, style, {overflow: "hidden"});

        return(
            <Element className={'collapsible ' + cls} ref={this.content} style={style} onTransitionEnd={this.onTransitionEnd} >
                {children}
            </Element>
        )
    }
}