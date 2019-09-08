import React, {Children} from "react";
import "./select.less";
import "../d-menu/d-menu.less";
import Collapse from "../collapse/collapse.jsx";
import Input from "../input/input.jsx";
import Tag from "../tag/tag.jsx"

export default class Select extends React.Component {
    static defaultProps = {
        searchPlaceholder: "Search...",
        fieldState: "normal",
        filter: true,
        errorMessage: "",
        cls: "",
        clsSelected: "",
        clsTag: "",
        clsErrorMessage: "",
        speed: 100,
        dropHeight: 200,
        prepend: null,
        append: null,
        clsPrepend: "",
        clsAppend: "",
        clsDropdownToggle: "",
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
        this.listItemClick = this.listItemClick.bind(this);
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

    listItemClick(key){
        const {multiple} = this.props;
        const {value} = this.state;

        if (multiple) {
            if (value.indexOf(key) === -1) value.push(key);
            this.setState({
                filter: "",
                value: value
            })
        } else {
            this.setState({
                open: false,
                filter: "",
                value: key
            });
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

    render() {
        const {multiple, cls, dropHeight, speed, onChange, errorMessage, clsSelected, clsTag, clsErrorMessage, searchPlaceholder, prepend, append, clsPrepend, clsAppend, clsDropdownToggle, onDrawItem, onDrawCaption} = this.props;
        const {open, filter, value, fieldState, focus} = this.state;
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;
        const options = {};
        const items = [];
        const listItemClick = this.listItemClick;
        const tagClick = this.tagClick;

        let optionIndex = -1;

        function addOption(el, isGroupTitle) {
            if (isGroupTitle) {
                items.push(<li className={'group-title'} key={optionIndex++}>{el.props.label}</li>);
            } else {
                items.push(

                        <li hidden={
                                (filter !== "" && el.props.children.toLowerCase().indexOf(filter.toLowerCase()) === -1)
                                || ( multiple && value.indexOf(el.props.value) !== -1 )
                            }
                            key={optionIndex++}
                            className={ !multiple && value === el.props.value ? 'active' : '' }
                            onClick={listItemClick.bind(this, el.props.value)}
                        >
                            <a dangerouslySetInnerHTML={{__html: onDrawItem(el.props.children)}}/>
                        </li>

                );
            }
        }

        Children.forEach(this.props.children, function(el){
            if (el.type === 'option') {
                addOption(el, false);
                options[el.props.value] = el.props.children;
            } else if (el.type === 'optgroup') {
                addOption(el, true);
                Children.forEach(el.props.children, function(el){
                    addOption(el, false);
                    options[el.props.value] = el.props.children;
                })
            }
        });

        return (
            <React.Fragment>
                <label tabIndex={1} className={'select ' + cls + (focus ? ' focused ':'') + (multiple ? ' multiple ':'') + (fieldState === 'error' ? ' invalid ' : fieldState === 'success' ? ' success ' : '')} ref={this.component}>

                    <span className={'dropdown-toggle ' + (` ${clsDropdownToggle} `) + (open ? 'active-toggle':'')} onClick={this.selectClick}/>

                    <select value={value} multiple={multiple}
                            ref={this.select}
                            onChange={onChange}
                            name={this.props.name}
                    >
                        {this.props.children}
                    </select>

                    <div className={'select-input ' + clsSelected } ref={this.selectInput} onClick={this.selectClick}>
                        {multiple && value.map( function(el, index){
                            return (
                                <Tag cls={clsTag} key={index} onClick={tagClick} data-value={el}>{options[el]}</Tag>
                            )
                        })}

                        {!multiple && value !== undefined && !!options[value] && (
                            <span className={clsTag} dangerouslySetInnerHTML={{__html: onDrawCaption(options[value])}}/>
                        )}
                    </div>

                    <Collapse isOpen={open} className={'drop-container'} transition={transition}>
                        { this.props.filter && <Input onChange={this.inputChange} ref={this.input} placeholder={searchPlaceholder}/> }
                        <ul className={'d-menu'} style={{maxHeight: dropHeight}}>
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
