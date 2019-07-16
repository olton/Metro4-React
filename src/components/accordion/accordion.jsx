import React from "react";
import "./accordion.less";
import "./accordion-rtl.less";
import AccordionFrame from "./frame.jsx";

export default class Accordion extends React.Component{
    static defaultProps = {
        dataMarker: true,
        dataMaterial: false,
        dataOneFrame: true,
        dataAnimationDuration: 300,

        dataClsAccordion: "",
        dataClsFrame: "",
        dataClsFrameHeading: "",
        dataClsFrameContent: "",

        dataOnFrameOpen: () => {},
        dataOnFrameBeforeOpen: () => true,
        dataOnFrameClose: () => {},
        dataOnFrameBeforeClose: () => true,
        dataOnAccordionCreate: () => {}
    };

    constructor(props){
        super(props);

        const openFrames = {};

        React.Children.forEach(this.props.children, (child, index) => {
            if (child.props.open) {
                openFrames[index] = true;
            }
        });

        this.state = {
            single: this.props.dataOneFrame,
            openFrames: openFrames
        };

        this.clickFrameHeading = this.clickFrameHeading.bind(this);
    }

    clickFrameHeading(frame){
        const {openFrames} = this.state;
        const isOpen = !!openFrames[frame];
        const allowMultipleOpen = this.props.dataOneFrame === false;

        if (allowMultipleOpen) {
            this.setState({
                openFrames: {
                    ...openFrames,
                    [frame]: !isOpen
                }
            });
        } else {
            this.setState({
                openFrames: {
                    [frame]: !isOpen
                }
            });
        }
    }

    render(){
        const className = `accordion ${this.props.dataMaterial ? 'material' : ''} ${this.props.dataClsAccordion} ${this.props.dataMarker ? 'marker-on' : ''}`;

        return (
            <div className={className}>
                {
                    React.Children.map(this.props.children, (frame, index) => (
                        <AccordionFrame key={index}
                                        dataAnimationDuration={this.props.dataAnimationDuration}
                                        dataTitle={frame.props.dataTitle}
                                        dataClsFrame={this.props.dataClsFrame+ ' ' + frame.props.dataClsFrame}
                                        dataClsFrameHeading={this.props.dataClsFrameHeading+ ' ' + frame.props.dataClsFrameHeading}
                                        dataClsFrameContent={this.props.dataClsFrameContent+ ' ' + frame.props.dataClsFrameContent}
                                        open={!!this.state.openFrames[index]}
                                        onHeadingClick={this.clickFrameHeading}
                                        dataFrame={index}>
                            {frame.props.children}
                        </AccordionFrame>
                    ))
                }
            </div>
        )
    }
}