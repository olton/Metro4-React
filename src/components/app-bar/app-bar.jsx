import React, {Component, Children} from "react";
import Hamburger from "../hamburger/hamburger";
import AppBarBrand from "./brand"
import AppBarItem from "./item"
import AppBarMenu from "./menu"
import "./app-bar.less";
import {mediaPoints} from "../../common/common";

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

        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.collectMedias = this.collectMedias.bind(this);

        this.collectMedias();

        this.state = {
            open: this.props.expand || this.medias.includes(this.props.expandPoint),
            menuCollapsed: !this.props.expand && !this.medias.includes(this.props.expandPoint)
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

    handleWindowResize(){
        this.collectMedias();
        this.setState({
            open: this.props.expand || this.medias.includes(this.props.expandPoint)
        });
    }

    componentDidMount(){
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleWindowResize);
    }

    render(){
        const {as: Element, cls, hamburgerColor} = this.props;
        const {open, menuCollapsed} = this.state;

        return (
            <Element className={'app-bar ' + cls + ' ' + (open ? 'app-bar-expand' : '')} ref={ref => this.appBar = ref}>
                <Hamburger cls={hamburgerColor + ' ' + (open ? 'hidden' : '')} hidden={!open}/>
                {Children.map(this.props.children, function(el, index){
                    if (el.type.name === 'AppBarMenu') {
                    }

                    return el;
                })}
            </Element>
        )
    }
}

export {AppBarBrand, AppBarMenu};