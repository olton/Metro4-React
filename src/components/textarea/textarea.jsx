import React from "react";
import "./textarea.less";
import Button from "../button/button";

export default class Textarea extends React.Component {
    static defaultProps = {
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

    constructor(props){
        super(props);
        this.state = {
            initValue: props.value,
            value: props.value,
            focus: false
        };

        this.input = React.createRef();

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
            this.input.addEventListener("keyup", this.resize);
            this.input.addEventListener("keydown", this.resize);
            this.input.addEventListener("change", this.resize);
            this.input.addEventListener("cut", this.resize);
            this.input.addEventListener("paste", this.resize);
            this.input.addEventListener("drop", this.resize);
        }
    }

    componentWillUnmount() {
        this.input.removeEventListener("blur", this.onBlur);
        this.input.removeEventListener("focus", this.onFocus);

        if (this.props.autosize) {
            this.input.removeEventListener("keyup", this.resize);
            this.input.removeEventListener("keydown", this.resize);
            this.input.removeEventListener("change", this.resize);
            this.input.removeEventListener("cut", this.resize);
            this.input.removeEventListener("paste", this.resize);
            this.input.removeEventListener("drop", this.resize);
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

        this.focus();

        this.props.onClear(e);
    }

    focus(){
        this.input.focus();
    }

    resize(){
        this.input.style.cssText = 'height:auto;';
        this.input.style.cssText = 'height:' + this.input.scrollHeight + 'px';
    }

    render(){
        const {autosize, append, prepend, clear, onClear, clsClearButton, ...props} = this.props;
        const {value, focus} = this.state;

        return (
            <div className={'textarea ' + (autosize ? ' autosize ' : '') + (focus ? ' focused ' : '')}>
                {prepend !== "" && (
                    <span className='prepend'>{prepend}</span>
                )}

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
