import React from "react";
import "./select-icon.less";
import Select from "../select/select";
import {FetchStatus} from "../../defines";

export default class SelectIcon extends React.Component {
    static defaultProps = {
        source: null,
        nameInCaption: true,
        nameInItem: true,
        valueAsPath: false,
        cls: "",
        className: ""
    };

    constructor(props){
        super(props);
        this.source = {};
        this.items = {};
        this.state = {
            viewWidth: 0,
            viewHeight: 0,
            loaded: FetchStatus.init,
            message: ""
        };
    }

    componentDidMount(){
        const {source} = this.props;

        if (source) {
            fetch(source).then( r => r.text() ).then( r => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(r, "application/xml");
                const fontFace = xml.querySelector("font-face");
                const icons = Array.from(xml.querySelectorAll("glyph")).filter( el => {
                    return el.getAttribute("d").trim() !== "";
                }).sort( (a, b) => {
                    if (a.getAttribute("glyph-name").toLowerCase() < b.getAttribute("glyph-name").toLowerCase()) {
                        return -1;
                    }
                    if (a.getAttribute("glyph-name").toLowerCase() > b.getAttribute("glyph-name").toLowerCase()) {
                        return 1;
                    }
                    return 0;
                } );
                icons.forEach( el => {
                    this.source = Object.assign(this.source, {
                        [el.getAttribute("glyph-name")]: el.getAttribute("d")
                    });
                    this.items = Object.assign(this.items, {
                        [el.getAttribute("glyph-name")]: el.getAttribute("glyph-name")
                    });
                });
                this.setState({
                    loaded: FetchStatus.ok,
                    message: "OK",
                    viewWidth: +fontFace.getAttribute("units-per-em"),
                    viewHeight: +fontFace.getAttribute("ascent"),
                });
            }).catch( e=> {
                this.setState({
                    loaded: FetchStatus.error,
                    message: e
                })
            })
        }
    }

    drawItem = item => {
        const {nameInItem} = this.props;
        const {viewWidth, viewHeight} = this.state;
        return !this.source ? item : `
            <div class='icon'>
                <svg width="24" height="24" viewBox="0 0 ${viewWidth} ${viewHeight}">
                    <path d="${this.source[item]}" stroke="black"/>
                </svg>
            </div>
            <span class='caption ${nameInItem ? '' : 'd-none'}'>${item}</span>
        `;
    };

    drawCaption = item => {
        const {nameInCaption} = this.props;
        const {viewWidth, viewHeight} = this.state;
        return !this.source ? item : `
            <div class='select-icon-item'>
                <div class='icon'>
                    <svg width="24" height="24" viewBox="0 0 ${viewWidth} ${viewHeight}">
                        <path d="${this.source[item]}" stroke="black"/>
                    </svg>
                </div>
                <span class='caption ${nameInCaption ? '' : 'd-none'}'>${item}</span>
            </div>
        `;
    };

    render(){
        const {source, viewBoxWidth, viewBoxHeight, nameInCaption, nameInItem, valueAsPath, cls, className, ...rest} = this.props;
        const {loaded, message} = this.state;
        let placeholder;

        if (loaded === FetchStatus.init) placeholder = "Icons loading...";
        else if (loaded === FetchStatus.ok) placeholder = "Select your icon";
        else if (loaded === FetchStatus.error) placeholder = message;
        else placeholder = "Icons not loaded";

        return(
            <Select className={`select-icon ${cls} ${className}`} useHTML={true} onDrawItem={this.drawItem} onDrawCaption={this.drawCaption} source={valueAsPath ? this.source : this.items} {...rest} placeholder={placeholder}/>
        )
    }
}
