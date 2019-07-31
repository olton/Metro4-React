import React from "react";
import "./select.less";
import "../d-menu/d-menu.less";
import Collapse from "../collapse/collapse.jsx";
import Input from "../input/input.jsx";
import Tag from "../tag/tag.jsx";

export default class Select extends React.Component {
    static defaultProps = {
        animationDuration: 100,
        dropHeight: 200
    };

    constructor(props){
        super(props);

        this.state = {
            open: false,
            multiple: false,
            filter: ""
        };

        this.select = null;
        this.selectInput = null;
        this.input = null;
        this.options = [];

        this.selectClick = this.selectClick.bind(this);
        this.listItemClick = this.listItemClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }

    selectChange(){
        if (this.state.multiple) {

        } else {
            this.selectInput.innerHTML = this.select.value;
        }
    }

    selectClick(e){
        const isOpen = this.state.open;
        this.setState({
            open: !isOpen
        });
        e.preventDefault();
    }

    listItemClick(e){
        if (this.state.multiple) {

        } else {
            this.setState({
                open: false,
                filter: ""
            });

            const value = e.target.parentNode.getAttribute("data-value");
            const title = e.target.parentNode.getAttribute("data-title");

            this.select.value = value;
            this.selectInput.innerHTML = title;
        }

        e.preventDefault();
    }

    inputChange(value, input){
        this.setState({
            filter: value
        })
    }

    render() {
        const {dropHeight, animationDuration} = this.props;
        const {open, multiple, filter} = this.state;
        const transition = `height ${animationDuration}ms cubic-bezier(.4, 0, .2, 1)`;
        const options = [];
        let optionIndex = -1;
        const listItemClick = this.listItemClick;

        function addOption(el, isGroupTitle) {
            if (isGroupTitle) {
                options.push(<li className={'group-title'} key={optionIndex++}>{el.props.label}</li>);
            } else {
                options.push(
                    <li hidden={filter !== "" && el.props.children.indexOf(filter) === -1}
                        key={optionIndex++}
                        onClick={listItemClick}
                        data-value={el.props.value}
                        data-title={el.props.children}
                    >
                        <a>{el.props.children}</a>
                    </li>
                );
            }
        }

        React.Children.map(this.props.children, function(el){
            if (el.type === 'option') {
                addOption(el, false);
            } else if (el.type === 'optgroup') {
                addOption(el, true);
                React.Children.map(el.props.children, function(el, index){
                    addOption(el, false);
                })
            }
        });

        return (
            <label className={'select dropdown-toggle ' + (open ? 'focused active-toggle':'')} >
                <select multiple={multiple} ref={ref => this.select = ref} onChange={this.selectChange} name={this.props.name}>{this.props.children}</select>

                <div className={'select-input'} onClick={this.selectClick} ref={ref => this.selectInput = ref}/>

                <Collapse isOpen={open} className={'drop-container'} transition={transition}>
                    <Input onChange={this.inputChange} ref={ref => this.input = ref}/>
                    <ul className={'d-menu'} style={{maxHeight: dropHeight}}>
                        {options}
                    </ul>
                </Collapse>
            </label>
        )
    }
}