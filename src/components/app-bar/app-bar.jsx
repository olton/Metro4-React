import React, {Component, Children} from "react";
import Hamburger from "../hamburger/hamburger";
import AppBarBrand from "./brand"
import AppBarItem from "./item"
import AppBarMenu from "./menu"
import "./app-bar.less";
import {mediaPoints} from "../../routines";

export default class AppBar extends Component {
    static defaultProps = {
        as: "header",
        cls: "",
        expand: false,
        expandPoint: 'md',
        hamburgerColor: "dark"
    };

    constructor(props){
        super(props);

        this.medias = [];

        this.windowResize = this.windowResize.bind(this);
        this.collectMedias = this.collectMedias.bind(this);
        this.hamburgerClick = this.hamburgerClick.bind(this);

        this.collectMedias();

        const expanded = this.props.expand || this.medias.includes(this.props.expandPoint);

        this.state = {
            expanded: expanded,
            menuCollapsed: !expanded
        };
    }

    collectMedias(){
        this.medias = [];
        for(let k in mediaPoints) {
            if (window.matchMedia(`(min-width: ${mediaPoints[k]}px)`).matches) {
                this.medias.push(k);
            }
        }
    }

    windowResize(){
        this.collectMedias();
        const expanded = this.props.expand || this.medias.includes(this.props.expandPoint);
        this.setState({
            expanded: expanded,
            menuCollapsed: !expanded
        });
    }

    componentDidMount(){
        window.addEventListener("resize", this.windowResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.windowResize);
    }

    hamburgerClick(){
        this.setState({
            menuCollapsed: !this.state.menuCollapsed
        })
    }

    render(){
        const {as: Element, cls, hamburgerColor} = this.props;
        const {expanded, menuCollapsed} = this.state;

        return (
            <Element className={'app-bar ' + cls + ' ' + (expanded ? 'app-bar-expand' : '')}>

                <Hamburger cls={hamburgerColor + ' ' + (expanded ? 'hidden' : '')} hidden={!expanded} onClick={this.hamburgerClick}/>

                {Children.map(this.props.children, function(el, index){
                    if (el.type.name === 'AppBarMenu') {
                        return React.cloneElement(el, {
                            style: {overflow: ""},
                            collapsed: menuCollapsed
                        }, el.props.children);
                    }

                    return el;
                })}
            </Element>
        )
    }
}

export {AppBarBrand, AppBarMenu, AppBarItem};