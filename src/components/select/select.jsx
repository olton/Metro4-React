import React, {Children} from "react";
import "./select.less";
import "../d-menu/d-menu.less";
import Collapse from "../collapse/collapse.jsx";
import Input from "../input/input.jsx";
import Tag from "../tag/tag.jsx"

export default class Select extends React.Component {
    static defaultProps = {
        source: null,
        placeholder: "Select a value...",
        searchPlaceholder: "Search...",
        fieldState: "normal",
        filter: true,
        errorMessage: "",
        cls: "",
        className: "",
        clsSelected: "",
        clsTag: "",
        clsPlaceholder: "",
        clsErrorMessage: "",
        speed: 100,
        dropHeight: 200,
        prepend: null,
        append: null,
        clsPrepend: "",
        clsAppend: "",
        clsDropdownToggle: "",
        useHTML: false,
        onChange: () => {},
        onFocus: () => {},
        onBlur: () => {},
        onDrawItem: (item) => item,
        onDrawCaption: ( caption ) => caption
    };

    static getDerivedStateFromProps(props, state){
        if (props.value !== state.initValue || props.fieldState !== state.fieldState) {
            return {
                value: props.value,
                initValue: props.value,
                fieldState: props.fieldState
            }
        }
        return null;
    }

    constructor(props) {
        super(props);

        this.select = React.createRef();
        this.selectInput = React.createRef();
        this.input = React.createRef();
        this.component = React.createRef();

        this.state = {
            focus: false,
            open: false,
            filter: "",
            value: props.value,
            initValue: props.value,
            fieldState: props.fieldState
        };

        this.selectClick = this.selectClick.bind(this);
        this.tagClick = this.tagClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.close = this.close.bind(this);
    }

    selectChange(){
        const event = new Event('change', { bubbles: true, composed: true });
        this.select.current.dispatchEvent(event);
    }

    tagClick(e){
        const key = e.target.parentNode.getAttribute('data-value');
        const {value} = this.state;
        const index = value.indexOf(key);

        if (index !== -1) {
            value.splice(index, 1);
        }

        this.setState({
            value: value
        });
        e.stopPropagation();
    }

    selectClick(){
        const isOpen = this.state.open;

        this.setState({
            open: !isOpen
        });

        if (!isOpen) {
            setTimeout( () => {
                if (this.input.current) this.input.current.focus();
            }, 100 );
        }
    }

    inputChange(e){
        this.setState({
            filter: e.target.value
        })
    }

    close(){
        this.setState({
            open: false
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.value !== this.state.value) {
            this.selectChange();
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        this.component.current.addEventListener("keydown", this.handleComponentKeydown);

        const select = this.component.current;
        if (select) {
            select.addEventListener("focus", this.handleSelectFocusing);
            select.addEventListener("blur", this.handleSelectFocusing);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        this.component.current.removeEventListener("keydown", this.handleComponentKeydown);

        const select = this.component.current;
        if (select) {
            select.removeEventListener("focus", this.handleSelectFocusing);
            select.removeEventListener("blur", this.handleSelectFocusing);
        }
    }

    handleComponentKeydown = e => {
        // for correct keyboard behavior for search input
        if ((e.target.tagName || '').toLowerCase() === 'input') {
            return true;
        }

        if (e.keyCode === 32) {
            this.selectClick();
        }

        // TODO add change selected items by arrow key up
        if (this.state.open && e.keyCode === 38) {
            // Up
        }

        // TODO add change selected items by arrow key down
        if (this.state.open && e.keyCode === 40) {
            // Down
        }

        e.preventDefault();
    };

    handleSelectFocusing = (e) => {
        this.setState({
            focus: e.type === 'focus'
        });
        this.props[ e.type === 'focus' ? 'onFocus' : 'onBlur' ](e);
    };

    handleClickOutside = event => {
        if (this.component.current && !this.component.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    createListItemGroupTitle = (cap) => {
        return <li className={'group-title'}>{cap}</li>;
    };

    handleListClick = e => {

        let node = e.target;

        while (node.tagName !== 'LI') {
            node = node.parentNode;
        }

        const val = node.getAttribute("data-value");

        if (val === undefined) return;

        const {multiple} = this.props;
        const {value} = this.state;

        if (multiple) {
            if (value.indexOf(val) === -1) value.push(val);
            this.setState({
                filter: "",
                value: value
            })
        } else {
            this.setState({
                open: false,
                filter: "",
                value: val
            });
        }

    };

    createListItem = (val, cap) => {
        let hidden;
        const {multiple, onDrawItem, useHTML} = this.props;
        const {filter, value} = this.state;

        hidden = multiple ? value.indexOf(val) !== -1 : filter !== "" && (""+cap).toLowerCase().indexOf(filter.toLowerCase()) === -1;

        return (
            <li hidden={hidden}
                className={ !multiple && value === val ? 'active' : '' }
                data-value={val}
            >
                {useHTML && (
                    <a dangerouslySetInnerHTML={{__html: onDrawItem(cap)}}/>
                )}

                {!useHTML && (
                    <a>{onDrawItem(cap)}</a>
                )}
            </li>
        );
    };

    render() {
        const {source, placeholder, multiple, cls, className, dropHeight, speed, onChange, errorMessage, clsSelected, clsTag, clsPlaceholder, clsErrorMessage, searchPlaceholder, prepend, append, clsPrepend, clsAppend, clsDropdownToggle, onDrawItem, onDrawCaption} = this.props;
        const {open, filter, value, fieldState, focus} = this.state;
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;
        const options = {};
        const items = [];
        const tagClick = this.tagClick;

        let optionIndex = -1;

        if (!source) {
            Children.toArray(this.props.children).forEach(el => {
                if (el.type === 'option') {
                    items.push(React.cloneElement(this.createListItem(el.props.value, el.props.children), {
                        key: optionIndex++
                    }));
                    options[el.props.value] = el.props.children;
                } else if (el.type === 'optgroup') {
                    items.push(React.cloneElement(this.createListItemGroupTitle(el.props.label), {
                        key: optionIndex++
                    }));
                    Children.toArray(el.props.children).forEach(el => {
                        items.push(React.cloneElement(this.createListItem(el.props.value, el.props.children), {
                            key: optionIndex++
                        }));
                        options[el.props.value] = el.props.children;
                    })
                }
            });
        } else {
            for (let key in source) {
                items.push(React.cloneElement(this.createListItem(source[key], key), {
                    key: optionIndex++
                }));
                options[source[key]] = key;
            }
        }

        return (
            <React.Fragment>
                <label tabIndex={1}
                       className={`select ${cls} ${className} ${focus ? 'focused':''} + ${multiple ? 'multiple':''} ${fieldState === 'error' ? 'invalid' : fieldState === 'success' ? 'success' : ''}`}
                       ref={this.component}>

                    <span className={'dropdown-toggle ' + (` ${clsDropdownToggle} `) + (open ? 'active-toggle':'')} onClick={this.selectClick}/>

                    <select value={value} multiple={multiple}
                            ref={this.select}
                            onChange={onChange}
                            name={this.props.name}
                    >
                        {source && Object.keys(source).map( (key, ind) => {
                            return (
                                <option  key={ind} value={source[key]}>{key}</option>
                            )
                        } )}

                        {this.props.children}
                    </select>

                    <div className={'select-input ' + clsSelected } ref={this.selectInput} onClick={this.selectClick}>
                        {multiple && value.map( function(el, index){
                            return (
                                <Tag cls={clsTag} key={index} onClick={tagClick} data-value={el}>{options[el]}</Tag>
                            )
                        })}

                        {!multiple && value !== undefined && !!options[value] && (
                            <span className={'caption ' + clsTag} dangerouslySetInnerHTML={{__html: onDrawCaption(options[value])}}/>
                        )}

                        {(!value && !options[value] || value === undefined || (multiple && value.length === 0)) && (
                            <span className={`placeholder ${clsPlaceholder}`}>{placeholder}</span>
                        )}
                    </div>

                    <Collapse isOpen={open} className={'drop-container'} transition={transition}>
                        { this.props.filter && <Input onChange={this.inputChange} ref={this.input} placeholder={searchPlaceholder} value={filter}/> }
                        <ul className={'d-menu'} style={{maxHeight: dropHeight}} onClick={this.handleListClick}>
                            {items}
                        </ul>
                    </Collapse>

                    {prepend && (
                        <span className={'prepend ' + clsPrepend} dangerouslySetInnerHTML={{__html: prepend}}/>
                    )}
                    {append && (
                        <span className={'append ' + clsAppend} dangerouslySetInnerHTML={{__html: append}}/>
                    )}
                </label>
                {fieldState === 'error' && errorMessage !== "" && (
                    <span className={'invalid_feedback ' + clsErrorMessage}>{errorMessage}</span>
                )}
            </React.Fragment>
        )
    }
}
