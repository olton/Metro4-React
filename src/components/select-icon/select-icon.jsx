import React from "react";
import "./select-icon.less";
import Select from "../select/select";
import icon from "../icon/icon";
import {FetchStatus} from "../../defines";

export default class SelectIcon extends React.Component {
    static defaultProps = {
        source: null,
        viewBoxWidth: 1024,
        viewBoxHeight: 960,
        nameInCaption: true,
        nameInItem: true,
        valueAsPath: false
    };

    constructor(props){
        super(props);
        this.source = {};
        this.items = {};
        this.state = {
            loaded: FetchStatus.init,
            message: ""
        };
    }

    componentDidMount(){
        const {source, valueAsPath} = this.props;

        if (source) {
            fetch(source).then( r => r.text() ).then( r => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(r, "application/xml");
                const icons = Array.from(xml.querySelectorAll("glyph")).filter( el => {
                    return el.getAttribute("d").trim() !== "";
                }).sort( (a, b) => {
                    if (a.attributes["glyph-name"].nodeValue.toLowerCase() < b.attributes["glyph-name"].nodeValue.toLowerCase()) {
                        return -1;
                    }
                    if (a.attributes["glyph-name"].nodeValue.toLowerCase() > b.attributes["glyph-name"].nodeValue.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                } );
                icons.forEach( el => {
                    this.source = Object.assign(this.source, {
                        [el.attributes["glyph-name"].nodeValue]: el.attributes.d.nodeValue
                    });
                    this.items = Object.assign(this.items, {
                        [el.attributes["glyph-name"].nodeValue]: el.attributes["glyph-name"].nodeValue
                    });
                });
                this.setState({
                    loaded: FetchStatus.ok,
                    message: "OK"
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
        const {viewBoxWidth, viewBoxHeight, nameInItem} = this.props;
        return !this.source ? item : `
            <div class='icon'>
                <svg width="24" height="24" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}">
                    <path d="${this.source[item]}" stroke="black"/>
                </svg>
            </div>
            <span class='caption ${nameInItem ? '' : 'd-none'}'>${item}</span>
        `;
    };

    drawCaption = item => {
        const {viewBoxWidth, viewBoxHeight, nameInCaption} = this.props;
        return !this.source ? item : `
            <div class='select-icon-item'>
                <div class='icon'>
                    <svg width="24" height="24" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}">
                        <path d="${this.source[item]}" stroke="black"/>
                    </svg>
                </div>
                <span class='caption ${nameInCaption ? '' : 'd-none'}'>${item}</span>
            </div>
        `;
    };

    render(){
        const {source, viewBoxWidth, viewBoxHeight, nameInCaption, nameInItem, valueAsPath, ...rest} = this.props;
        const {loaded, message} = this.state;
        let placeholder;

        if (loaded === FetchStatus.init) placeholder = "Icons loading...";
        else if (loaded === FetchStatus.ok) placeholder = "Select your icon";
        else if (loaded === FetchStatus.error) placeholder = message;
        else placeholder = "Icons not loaded";

        return(
            <Select onDrawItem={this.drawItem} onDrawCaption={this.drawCaption} source={valueAsPath ? this.source : this.items} {...rest} placeholder={placeholder}/>
        )
    }
}
