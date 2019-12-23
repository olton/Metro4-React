import React from "react";
import "./select-icon.less";
import Select from "../select/select";
import {FetchStatus} from "../../defines";

const SelectIconItem = (props) => {
    return (
        <div className='select-icon-item'>
            <div className='icon'>
                <svg width="24" height="24" viewBox={`0 0 ${props.viewWidth} ${props.viewHeight}`}>
                    <path d={props.path} stroke={props.color}/>
                </svg>
            </div>
            <span className='caption' hidden={props.hidden}>{props.caption}</span>
        </div>
    )
};

export default class SelectIcon extends React.Component {
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
        const {showIconName, iconColor} = this.props;
        const {viewWidth, viewHeight} = this.state;
        return !this.source ? item : <SelectIconItem viewWidth={viewWidth} viewHeight={viewHeight} path={this.source[item]} color={iconColor} hidden={!showIconName} caption={item}/>
    };

    render(){
        const {placeholder, placeholderLoading, placeholderError, source, viewBoxWidth, viewBoxHeight, nameInCaption, nameInItem, valueAsPath, cls, className, ...rest} = this.props;
        const {loaded, message} = this.state;
        const _placeholder = loaded === FetchStatus.ok ? placeholder : loaded === FetchStatus.error ? placeholderError : placeholderLoading;

        return(
            <Select className={`select-icon ${cls} ${className}`} onDrawItem={this.drawItem} onDrawCaption={this.drawItem} source={valueAsPath ? this.source : this.items} {...rest} placeholder={_placeholder}/>
        )
    }
}

SelectIcon.defaultProps = {
    placeholder: "Select icon...",
    placeholderLoading: "Loading...",
    placeholderError: "",
    source: null,
    valueAsPath: false,
    iconColor: "#000",
    showIconName: true,
    cls: "",
    className: ""
};