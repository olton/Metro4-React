import React from "react";
import "./input.less";
import Button from "../button/button.jsx";

export default class Input extends React.Component {
    static defaultProps = {
        name: "",
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
        autocomplete: "",
        autocompleteDivider: ",",
        autocompleteHeight: 200,
        customButtons: [],
        onSearch: () => {},
        onClear: () => {},
        onReveal: () => {},
        onChange: () => {},
        onBlur: () => {},
        onFocus: () => {}
    };

    constructor(props){
        super(props);

        this.state = {
            value: props.value,
            type: props.type,
            focus: false
        };

        this.input = null;
        this.history = [];
        this.historyIndex = -1;
        this.autocomplete = this.props.autocomplete
            .split(",")
            .map(item => item.trim())
            .filter(item => item !== '');

        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.changeInputType = this.changeInputType.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.searchValue = this.searchValue.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.autocompleteItemClick = this.autocompleteItemClick.bind(this);
    }

    componentDidMount(){
        this.input.addEventListener("blur", this.onBlur);
        this.input.addEventListener("focus", this.onFocus);
    }

    componentWillUnmount() {
        this.input.removeEventListener("blur", this.onBlur);
        this.input.removeEventListener("focus", this.onFocus);
    }

    onBlur(){
        this.setState({
            focus: false
        });
        this.props.onBlur(this.input);
    }

    onFocus(){
        this.setState({
            focus: true
        });
        this.props.onFocus(this.input);
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

    autocompleteItemClick(e){
        const value = e.target.getAttribute('data-item');
        this.setState({
            value: value
        });
    }

    render() {
        const {name, placeholder, append, prepend, clear, reveal, search, type: inputType, customButtons} = this.props;
        const {value, type, focus} = this.state;
        const buttons = clear || reveal || search;
        const inputProps = {
            name, type, placeholder, value
        };

        const autocompleteItemClick = this.autocompleteItemClick;

        return (
            <div className={'input ' + (focus ? 'focused' : '')}>

                {prepend !== "" && (
                    <span className='prepend'>{prepend}</span>
                )}

                <input {...inputProps} onChange={this.onChange} ref={ref => this.input = ref} onKeyUp={this.onKeyUp}/>

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

                        {customButtons.map(function(btn, index){
                            return (
                                <Button key={index} {...btn}/>
                            )
                        })}
                    </div>
                )}

                {append !== "" && (
                    <span className='append'>{append}</span>
                )}

                {this.autocomplete.length > 0 && (
                    <div className='autocomplete-list'>
                        {
                            this.autocomplete.map(function(item, index) {
                                const searchIndex = item.indexOf(value);
                                const itemValue = `${item.substr(0, searchIndex)}<strong>${item.substr(searchIndex, value.length)}</strong>${item.substr(searchIndex + value.length)}`;

                                return (
                                    <div data-item={item} className='item' key={index} hidden={item === value || value === '' || searchIndex === -1} dangerouslySetInnerHTML={{__html: itemValue}} onClick={autocompleteItemClick}/>
                                )
                            })
                        }
                    </div>
                )}
            </div>
        )
    }
}