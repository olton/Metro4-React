import React from "react";
import Hamburger from "../hamburger/hamburger";
import AppBarBrand from "./brand"
import AppBarMenu from "./menu"
import "./app-bar.less";

export default class AppBar extends React.Component {
    static defaultProps = {
        as: "header",
        cls: "",
        expand: true,
        expandPoint: null,
        hamburgerColor: "dark"
    };

    constructor(props){
        super(props);

        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    handleWindowResize(){

    }

    componentDidMount(){
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleWindowResize);
    }

    render(){
        const {as: Element, cls, hamburgerColor} = this.props;

        return (
            <Element className={'app-bar ' + cls} ref={ref => this.appBar = ref}>
                <Hamburger cls={hamburgerColor}/>
                {this.props.children}
            </Element>
        )
    }
}

export {AppBarBrand, AppBarMenu};