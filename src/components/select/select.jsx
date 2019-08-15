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
        errorMessage: "",
        cls: "",
        clsSelected: "",
        clsTag: "",
        clsErrorMessage: "",
        speed: 100,
        dropHeight: 200,
        onChange: () => {}
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
            // Need focus search input
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
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.component.current && !this.component.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    render() {
        const {multiple, cls, dropHeight, speed, onChange, errorMessage, clsSelected, clsTag, clsErrorMessage, searchPlaceholder} = this.props;
        const {open, filter, value, fieldState} = this.state;
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
                    <li
                        hidden={
                            (filter !== "" && el.props.children.toLowerCase().indexOf(filter.toLowerCase()) === -1)
                            || ( multiple && value.indexOf(el.props.value) !== -1 )}
                        key={optionIndex++}
                        className={ !multiple && value === el.props.value ? 'active' : '' }
                        onClick={listItemClick.bind(this, el.props.value)}
                    >
                        <a>{el.props.children}</a>
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
                <label className={'select ' + cls + (open ? ' focused ':'') + (multiple ? ' multiple ':'') + (fieldState === 'error' ? ' invalid ' : fieldState === 'success' ? ' success ' : '')} ref={this.component}>

                    <span className={'dropdown-toggle ' + (open ? 'active-toggle':'')} onClick={this.selectClick}/>

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

                        {!multiple && value !== "" && (
                            <span className={clsTag}>{options[value]}</span>
                        )}
                    </div>

                    <Collapse isOpen={open} className={'drop-container'} transition={transition}>
                        <Input onChange={this.inputChange} ref={this.input} placeholder={searchPlaceholder}/>
                        <ul className={'d-menu'} style={{maxHeight: dropHeight}}>
                            {items}
                        </ul>
                    </Collapse>
                </label>
                {fieldState === 'error' && errorMessage !== "" && (
                    <span className={'invalid_feedback ' + clsErrorMessage}>{errorMessage}</span>
                )}
            </React.Fragment>
        )
    }
}
