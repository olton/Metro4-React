import React from "react";
import "./input.less";
import Button from "../button/button.jsx";

export default class Input extends React.Component {
    static defaultProps = {
        placeholder: "",
        value: "",
        type: 'text',
        append: "",
        prepend: "",
        clear: true,
        reveal: true,
        search: false,
        searchType: 'custom',
        history: false,
        preventSubmit: true,
        autocomplete: false,
        autocompleteDivider: ",",
        autocompleteHeight: 200,
        onSearch: () => {},
        onClear: () => {},
        onReveal: () => {},
        onChange: () => {}
    };

    constructor(props){
        super(props);

        this.state = {
            value: props.value,
            type: props.type
        };

        this.input = null;
        this.history = [];
        this.historyIndex = -1;

        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.changeInputType = this.changeInputType.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.searchValue = this.searchValue.bind(this);
    }

    onChange(e){
        const {onChange} = this.props;

        this.setState({
            value: e.target.value
        });

        onChange(e.target.value, this.input);
    }

    onKeyUp(e){
        let val = this.input.value;

        if (this.props.history) {
            if (e.keyCode === 13) { //Enter
                this.history.push(val);
                this.historyIndex = this.history.length - 1;
                this.clearValue();
                if (this.props.preventSubmit) {
                    e.preventDefault();
                }
            }

            if (e.keyCode === 38) { //Up
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.setState({
                        value: this.history[this.historyIndex]
                    });
                }
            }

            if (e.keyCode === 40) { //Down
                if (this.historyIndex < this.history.length - 1) {
                    this.historyIndex++;
                    this.setState({
                        value: this.history[this.historyIndex]
                    });
                }
            }

            if ([13, 38, 40].indexOf(e.keyCode) !== -1) {
                this.props.onChange(this.input.value, this.input);
            }
        }
    }

    changeInputType(){
        const {onReveal} = this.props;

        this.setState((prev) => ({
            type: prev.type === 'text' ? 'password' : 'text'
        }));

        onReveal(this.input);
    }

    clearValue(){
        const {onClear, onChange} = this.props;

        this.setState({
            value: ""
        });

        onClear(this.input);
        onChange("", this.input);
    }

    searchValue(){
        const {searchType, onSearch} = this.props;

        if (searchType === 'custom') {
            onSearch(this.input.value, this.input);
        } else {
            if (this.input.form)
                this.input.form.submit();
        }
    }

    render() {
        const {placeholder, append, prepend, clear, reveal, search, type: inputType} = this.props;
        const {value, type} = this.state;
        const buttons = clear || reveal || search;

        return (
            <div className='input'>

                {prepend !== "" && (
                    <span className='prepend'>{prepend}</span>
                )}

                <input type={type} value={value} placeholder={placeholder} onChange={this.onChange} ref={ref => this.input = ref} onKeyUp={this.onKeyUp}/>

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
                        {search && (
                            <Button cls='input-search-button' type='button' onClick={this.searchValue} tabIndex={-1}>
                                <span className='default-icon-search'/>
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