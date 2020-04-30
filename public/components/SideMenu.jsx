import React from "react";
import {Router, NavLink, Link} from "react-router-dom";
import SearchForm from "./SearchForm";
import Collapse from "../../src/components/collapse/collapse";
import "../css/side-bar.css";
import {Button} from "../../index";

const menuItems = {
    "General": [
        {to: "/guide", caption: "Intro", exact: true},
        {to: "/guide/common", caption: "Common styles"},
        {to: "/guide/colors", caption: "Colors styles"},
    ],
    "Grid & Table": [
        {to: "/guide/grid", caption: "Responsive Grid"},
        {to: "/guide/table", caption: "Table"},
        {to: "/guide/memory-table", caption: "MemoryTable"}
    ],
    "Buttons": [
        {to: "/guide/push-button", caption: "PushButton"},
        {to: "/guide/split-button", caption: "SplitButton"},
        {to: "/guide/tool-button", caption: "ToolButton"},
        {to: "/guide/command-button", caption: "CommandButton"},
        {to: "/guide/info-button", caption: "InfoButton"},
        {to: "/guide/image-button", caption: "ImageButton"},
        {to: "/guide/action-button", caption: "ActionButton"},
        {to: "/guide/shortcut", caption: "Shortcut"},
        {to: "/guide/pagination", caption: "Pagination"},
        {to: "/guide/breadcrumbs", caption: "Breadcrumbs"},
        {to: "/guide/hamburger", caption: "Hamburger"},
        {to: "/guide/button-group", caption: "ButtonGroup"},
    ],
    "Form elements": [
        {to: "/guide/input", caption: "Input"},
        {to: "/guide/input-file", caption: "File"},
        {to: "/guide/checkbox", caption: "Checkbox"},
        {to: "/guide/switch", caption: "Switch"},
        {to: "/guide/radio", caption: "Radio"},
        {to: "/guide/select", caption: "Select"},
        {to: "/guide/select-color", caption: "SelectColor"},
        {to: "/guide/select-icon", caption: "SelectIcon"},
        {to: "/guide/rating", caption: "Rating"},
        {to: "/guide/textarea", caption: "Textarea"},
    ],
    "Menus": [
        {to: "/guide/app-bar", caption: "AppBar"},
        {to: "/guide/bottom-nav", caption: "BottomNav"},
    ],
    "Layout": [
        {to: "/guide/container", caption: "Container"},
        {to: "/guide/panel", caption: "Panel"},
        {to: "/guide/info-panel", caption: "InfoPanel"},
        {to: "/guide/accordion", caption: "Accordion"},
        {to: "/guide/tabs", caption: "Tabs"},
        {to: "/guide/modal", caption: "Modal"},
        {to: "/guide/body", caption: "Body"},
        {to: "/guide/html-container", caption: "HtmlContainer"},
        {to: "/guide/dialog", caption: "Dialog"},
    ],
    "Dropdown & collapse": [
        {to: "/guide/collapse", caption: "Collapse"},
        {to: "/guide/dropdown", caption: "Dropdown"},
    ],
    "Routines": [
        {to: "/guide/utils", caption: "Utils functions"},
        {to: "/guide/color", caption: "Color routines"},
        {to: "/guide/md5", caption: "MD5"},
        {to: "/guide/media", caption: "Media"},
    ],
    "Icon font": [
        {to: "/guide/mif", caption: "Metro Icon Font"},
        {to: "/guide/icon", caption: "Icon"},
        {to: "/guide/other-icon-fonts", caption: "Other icon fonts"},
    ]
};

export default class SideMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: !props.isMobile,
            isMobile: props.isMobile
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        if (props.isMobile !== state.isMobile) {
            return {
                open: !props.isMobile,
                isMobile: props.isMobile
            }
        }
        return null;
    }

    toggleMenu(e) {
        this.setState({
            open: !this.state.open
        })
    };

    render(){
        const {open, isMobile} = this.state;
        const items = [];
        let itemIndex = -1;

        for (let itemGroup in menuItems) {
            items.push(<li key={itemIndex++} className={'group-title'}>{itemGroup.toUpperCase()}</li>);

            menuItems[itemGroup].map( item => {
                return items.push(<li key={itemIndex++}><NavLink exact={item.exact ? true : null} to={item.to} onClick={isMobile ? this.toggleMenu : null}>{item.caption}</NavLink></li>);
            });
        }

        return (
            <div className={'side-bar'}>
                <SearchForm/>

                <div className='p-4' hidden={!this.props.isMobile} >
                    <Button cls={'dropdown-toggle w-100 ' + (open ? 'active-toggle' : '')} onClick={this.toggleMenu}>Navigator</Button>
                </div>

                <Collapse isOpen={open}>
                    <ul className={'side-bar-menu'}>
                        {items}
                    </ul>
                </Collapse>
            </div>
        )
    }
}