import React from "react";
import "./textarea.css";
import Button from "../button/button";

const changeEvents = ["keyup", "keydown", "change", "cut", "paste", "drop", "propertychange", "input"];

export default class Textarea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initValue: props.value,
            value: props.value,
            focus: false
        };

        this.input = React.createRef();
        this.fakeInput = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.focus = this.focus.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidMount(){
        this.input.addEventListener("blur", this.onBlur);
        this.input.addEventListener("focus", this.onFocus);

        if (this.props.autosize) {
            changeEvents.forEach( (ev) => {
                this.input.addEventListener(ev, this.resize);
            });
        }
        this.resize();
    }

    componentWillUnmount() {
        this.input.removeEventListener("blur", this.onBlur);
        this.input.removeEventListener("focus", this.onFocus);

        if (this.props.autosize) {
            changeEvents.forEach( (ev) => {
                this.input.removeEventListener(ev, this.resize);
            });
        }
    }

    static getDerivedStateFromProps(props, state){
        if (props.value !== state.initValue) {
            return {
                value: props.value,
                initValue: props.value
            }
        }
        return null;
    }

    onBlur(e){
        this.setState({
            focus: false
        });
        this.props.onBlur(e);
    }

    onFocus(e){
        this.resize();
        this.setState({
            focus: true
        });
        this.props.onFocus(e);
    }

    onChange(e){
        const {onChange} = this.props;

        this.setState({
            value: e.target.value
        });

        onChange(e);
    }

    clearValue(e){
        this.setState({
            value: ""
        });

        setTimeout(()=>{
            this.resize();
        }, 100);

        this.focus();

        this.props.onClear(e);
    }

    focus(){
        this.input.focus();
    }

    resize(){
        this.fakeInput.value = this.input.value;
        this.fakeInput.style.cssText = 'height:auto;';
        this.fakeInput.style.cssText = 'height:' + this.fakeInput.scrollHeight + 'px';
        this.input.style.cssText = 'height:' + this.fakeInput.scrollHeight + 'px';
    }

    render(){
        const {autosize, append, prepend, clear, onClear, clsClearButton, ...props} = this.props;
        const {value, focus} = this.state;

        return (
            <div className={`textarea  ${autosize ? 'autosize no-scroll-vertical' : ''} ${focus ? 'focused' : ''}`}>
                {prepend !== "" && (
                    <span className='prepend'>{prepend}</span>
                )}

                <textarea defaultValue={value} className="fake-textarea" ref={ref => this.fakeInput = ref}/>

                <textarea {...props} value={value} onChange={this.onChange} ref={ref => this.input = ref}/>

                {clear && !props.readOnly && (
                    <Button cls={'input-clear-button ' + clsClearButton} type='button' onClick={this.clearValue} tabIndex={-1}>
                        <span className='default-icon-cross'/>
                    </Button>
                )}

                {append !== "" && (
                    <span className='append'>{append}</span>
                )}

            </div>
        )
    }
}

Textarea.defaultProps = {
    autosize: true,
    value: "",
    append: "",
    prepend: "",
    clear: true,
    clsClearButton: "",
    onClear: () => {},
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {}
};