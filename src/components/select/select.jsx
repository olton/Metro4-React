import React from "react";
import "./select.less";
import "../d-menu/d-menu.less";
import Collapse from "../collapse/collapse.jsx";

export default class Select extends React.Component {
    static defaultProps = {
        animationDuration: 100,
        dropHeight: 200
    };

    constructor(props){
        super(props);

        this.state = {
            open: false,
            multiple: false
        };

        this.options = [];

        this.handleSelectClick = this.handleSelectClick.bind(this);
    }

    handleSelectClick(e){
        const isOpen = this.state.open;
        this.setState({
            open: !isOpen
        });
        e.preventDefault();
    }

    static createOptions(list){
        const options = [];

        function addOption(el){
            return (
                <li><a>{el.props.children}</a></li>
            )
        }

        function addOptionGroup(list){
            return list.map(function(el, index){
                return addOption(el, index);
            })
        }


        list.forEach(function(el, index){
            if (el.type === 'option') {
                options.push(addOption(el))
            } else if (el.type === 'optgroup') {
                addOptionGroup(el).forEach(function(el){
                    options.push(addOption(el));
                })
            }
        });

        return (
            <ul className={'d-menu'}>{options}</ul>
        )
    }

    render() {
        const {dropHeight, animationDuration} = this.props;
        const {open, multiple} = this.state;
        const transition = `height ${animationDuration}ms cubic-bezier(.4, 0, .2, 1)`;
        const options = [];
        let optionIndex = -1;

        React.Children.map(this.props.children, function(el){
            if (el.type === 'option') {

                options.push(<li key={optionIndex++}><a >{el.props.children}</a></li>);

            } else if (el.type === 'optgroup') {

                options.push(<li className={'group-title'} key={optionIndex++}>{el.props.label}</li>);

                React.Children.map(el.props.children, function(el, index){
                    options.push(<li key={optionIndex++}><a >{el.props.children}</a></li>)
                })

            }
        });

        return (
            <label className={'select dropdown-toggle ' + (open ? 'focused active-toggle':'')} onClick={this.handleSelectClick}>
                <select multiple={multiple}>{this.props.children}</select>

                <div className={'select-input'}/>

                <Collapse isOpen={open} className={'drop-container'} transition={transition}>
                    <ul className={'d-menu'}>
                        {options}
                    </ul>
                </Collapse>
            </label>
        )
    }
}