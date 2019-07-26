import React from "react";
import "./input.less";
import Button from "../button/button.jsx";

export default class Input extends React.Component {
    static defaultProps = {
        type: 'text',
        append: "",
        prepend: "",
        clear: true,
        reveal: true,
        search: false
    };

    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            type: props.type
        };
        this.input = null;
        this.onChange = this.onChange.bind(this);
        this.changeInputType = this.changeInputType.bind(this);
        this.clearValue = this.clearValue.bind(this);
    }

    onChange(e){
        this.setState({
            value: e.target.value
        })
    }

    changeInputType(){
        this.setState((prev) => ({
            type: prev.type === 'text' ? 'password' : 'text'
        }))
    }

    clearValue(){
        console.log("clear clicked");
        this.setState({
            value: ""
        })
    }

    render() {
        const {append, prepend, clear, reveal, search, type: inputType} = this.props;
        const {value, type} = this.state;
        const buttons = clear || reveal || search;

        return (
            <div className='input'>

                {prepend !== "" && (
                    <span className='prepend'>{prepend}</span>
                )}

                <input type={this.state.type} value={this.state.value} onChange={this.onChange} ref={ref => this.input = ref}/>

                {buttons && (
                    <div className='button-group'>
                        {clear && (
                            <Button cls='input-clear-button' type='button' onClick={this.clearValue} tabIndex={-1}>
                                <span className='default-icon-cross'/>
                            </Button>
                        )}
                        {inputType === 'password' && reveal && (
                            <Button cls='input-reveal-button' type='button' onClick={this.changeInputType} tabIndex={-1}>
                                <span className='default-icon-eye'/>
                            </Button>
                        )}
                    </div>
                )}

                {append !== "" && (
                    <span className='append'>{append}</span>
                )}
            </div>
        )
    }
}