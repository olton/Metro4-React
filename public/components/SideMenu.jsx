import React from "react";
import {Router, NavLink, Link} from "react-router-dom";
import SearchForm from "./SearchForm";
import Collapse from "../../src/components/collapse/collapse";
import "../css/side-bar.less";

export default class SideMenu extends React.Component {
    render(){
        return (
            <div className={'side-bar'}>
                <SearchForm/>

                <Collapse isOpen={true}>
                    <ul className={'side-bar-menu'}>
                        <li className={'group-title'}>General</li>
                        <li><NavLink exact to={'/guide'}>Intro</NavLink></li>
                        <li><NavLink to={'/guide/common'}>Common styles</NavLink></li>
                        <li><NavLink to={'/guide/colors'}>Color styles</NavLink></li>
                        <li><NavLink to={'/guide/grid'}>Grid</NavLink></li>

                        <li className={'group-title'}>Buttons</li>
                        <li><NavLink to={'/guide/push-button'}>PushButton</NavLink></li>
                        <li><NavLink to={'/guide/split-button'}>SplitButton</NavLink></li>
                        <li><NavLink to={'/guide/tool-button'}>ToolButton</NavLink></li>
                        <li><NavLink to={'/guide/command-button'}>CommandButton</NavLink></li>
                        <li><NavLink to={'/guide/info-button'}>InfoButton</NavLink></li>
                        <li><NavLink to={'/guide/image-button'}>ImageButton</NavLink></li>
                        <li><NavLink to={'/guide/shortcut'}>Shortcut</NavLink></li>
                        <li><NavLink to={'/guide/action-button'}>ActionButton</NavLink></li>
                        <li><NavLink to={'/guide/pagination'}>Pagination</NavLink></li>
                        <li><NavLink to={'/guide/breadcrumbs'}>Breadcrumbs</NavLink></li>
                        <li><NavLink to={'/guide/hamburger'}>Hamburger</NavLink></li>

                        <li className={'group-title'}>Form elements</li>
                        <li><NavLink to={'/guide/input'}>Input</NavLink></li>
                        <li><NavLink to={'/guide/input-file'}>File</NavLink></li>
                        <li><NavLink to={'/guide/checkbox'}>Checkbox</NavLink></li>
                        <li><NavLink to={'/guide/switch'}>Switch</NavLink></li>
                        <li><NavLink to={'/guide/radio'}>Radio</NavLink></li>
                        <li><NavLink to={'/guide/select'}>Select</NavLink></li>
                        <li><NavLink to={'/guide/rating'}>Rating</NavLink></li>
                        <li><NavLink to={'/guide/textarea'}>Textarea</NavLink></li>

                        <li className={'group-title'}>Menus</li>
                        <li><NavLink to={'/guide/app-bar'}>App bar</NavLink></li>
                        <li><NavLink to={'/guide/bottom-nav'}>Bottom nav</NavLink></li>

                        <li className={'group-title'}>Visual components</li>
                        <li><NavLink to={'/guide/activity'}>Activity</NavLink></li>
                        <li><NavLink to={'/guide/progress'}>Progress</NavLink></li>
                        <li><NavLink to={'/guide/gravatar'}>Gravatar</NavLink></li>
                        <li><NavLink to={'/guide/badge'}>Badge</NavLink></li>

                        <li className={'group-title'}>Layout</li>
                        <li><NavLink to={'/guide/container'}>Container</NavLink></li>
                        <li><NavLink to={'/guide/panel'}>Panel</NavLink></li>
                        <li><NavLink to={'/guide/info-panel'}>Info Panel</NavLink></li>
                        <li><NavLink to={'/guide/accordion'}>Accordion</NavLink></li>
                        <li><NavLink to={'/guide/accordion'}>Tabs</NavLink></li>
                        <li><NavLink to={'/guide/modal'}>Modal</NavLink></li>
                        <li><NavLink to={'/guide/body'}>Body</NavLink></li>
                        <li><NavLink to={'/guide/html-container'}>Html container</NavLink></li>
                        <li><NavLink to={'/guide/html-container'}>Dialog</NavLink></li>
                        <li><NavLink to={'/guide/html-container'}>Button group</NavLink></li>

                        <li className={'group-title'}>Dropdown &amp; Collapse</li>
                        <li><NavLink to={'/guide/collapse'}>Collapse</NavLink></li>
                        <li><NavLink to={'/guide/dropdown'}>Dropdown</NavLink></li>

                        <li className={'group-title'}>Routines</li>
                        <li><NavLink to={'/guide/utils'}>Utils functions</NavLink></li>
                        <li><NavLink to={'/guide/color-module'}>Color routines</NavLink></li>
                        <li><NavLink to={'/guide/md5'}>MD5</NavLink></li>
                        <li><NavLink to={'/guide/media'}>Media</NavLink></li>

                        <li className={'group-title'}>Icon font</li>
                        <li><NavLink to={'/guide/mif'}>Metro icon font</NavLink></li>
                        <li><NavLink to={'/guide/icon-component'}>Icon component</NavLink></li>
                        <li><NavLink to={'/guide/other-fonts'}>Other fonts</NavLink></li>
                    </ul>
                </Collapse>
            </div>
        )
    }
}