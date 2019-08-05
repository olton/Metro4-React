import React, {Children} from "react";
import "./select.less";
import "../d-menu/d-menu.less";
import Collapse from "../collapse/collapse.jsx";
import Input from "../input/input.jsx";
import Tag from "../tag/tag.jsx"
import ClickOutside from "../click-outside/click-outside.jsx";

export default class Select extends React.Component {
    static defaultProps = {
        animationDuration: 100,
        dropHeight: 200,
        onChange: () => {}
    };

    static addOptions(options, list){
        Children.forEach(list, function(el, index){
            if (el.type === 'optgroup') {
                Select.addOptions(options, el.props.children);
            } else {
                options[el.props.value] = el.props.children;
            }
        });
    }

    constructor(props){
        super(props);

        this.select = React.createRef();
        this.selectInput = React.createRef();
        this.input = React.createRef();
        this.options = {};

        Select.addOptions(this.options, this.props.children);

        this.state = {
            open: false,
            filter: "",
            value: this.props.value
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

    selectClick(e){
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

    inputChange(value, input){
        this.setState({
            filter: value
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

    render() {
        const {multiple, dropHeight, animationDuration, onChange} = this.props;
        const {open, filter, value} = this.state;
        const transition = `height ${animationDuration}ms cubic-bezier(.4, 0, .2, 1)`;
        const options = this.options;
        const items = [];
        const listItemClick = this.listItemClick;
        const tagClick = this.tagClick;

        let optionIndex = -1;

        function addOption(el, isGroupTitle) {
            if (isGroupTitle) {
                items.push(<li className={'group-title'} key={optionIndex++}>{el.props.label}</li>);
            } else {
                items.push(
                    <li hidden={(filter !== "" && el.props.children.toLowerCase().indexOf(filter.toLowerCase()) === -1) || ( !multiple ? value === el.props.value : value.indexOf(el.props.value) !== -1 )}
                        key={optionIndex++}
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
            } else if (el.type === 'optgroup') {
                addOption(el, true);
                Children.forEach(el.props.children, function(el){
                    addOption(el, false);
                })
            }
        });

        return (
            <ClickOutside onClickOutside={this.close}>
                <label className={'select ' + (open ? ' focused ':'') + (multiple ? ' multiple ':'')}>

                    <span className={'dropdown-toggle ' + (open ? 'active-toggle':'')} onClick={this.selectClick}/>

                    <select value={value} multiple={multiple}
                            ref={this.select}
                            onChange={onChange}
                            name={this.props.name}
                    >
                        {this.props.children}
                    </select>

                    <div className={'select-input'} ref={this.selectInput} onClick={this.selectClick}>
                        {multiple && value.map( function(el, index){
                            return (
                                <Tag key={index} onClick={tagClick} data-value={el}>{options[el]}</Tag>
                            )
                        })}

                        {!multiple && value !== "" && (
                            <span>{options[value]}</span>
                        )}
                    </div>

                    <Collapse isOpen={open} className={'drop-container'} transition={transition}>
                        <Input onChange={this.inputChange} ref={this.input} placeholder={'Search...'}/>
                        <ul className={'d-menu'} style={{maxHeight: dropHeight}}>
                            {items}
                        </ul>
                    </Collapse>
                </label>
            </ClickOutside>
        )
    }
}