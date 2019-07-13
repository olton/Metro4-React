import React from "react";
import "./accordion.css"
import "./accordion-rtl.css"

export default class Accordion extends React.Component{
    static defaultProps = {
        dataMarker: true,
        dataMaterial: false,
        dataDuration: 100,
        dataOneFrame: true,
        dataShowActive: true,

        dataClsAccordion: "",

        dataClsFrame: "",
        dataClsHeading: "",
        dataClsContent: "",

        dataClsActiveFrame: "",
        dataClsActiveHeading: "",
        dataClsActiveContent: "",

        dataOnFrameOpen: () => {},
        dataOnFrameBeforeOpen: () => true,
        dataOnFrameClose: () => {},
        dataOnFrameBeforeClose: () => true,
        dataOnAccordionCreate: () => {}
    };

    render(){
        const accordionClassName = `accordion ${this.props.dataClsAccordion} ${this.props.dataMarker ? 'marker-on' : ''}`;

        return (
            <div className={accordionClassName}>
                {this.props.children}
            </div>
        );
    }
}