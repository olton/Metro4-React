import React from "react";

import "./accordion.less";
import "./accordion-rtl.less";
import AccordionFrame from "./frame.jsx";

export default class Accordion extends React.Component{
    static defaultProps = {
        marker: true,
        material: false,
        oneFrame: true,
        oneFrameOpen: true,
        animationDuration: 300,

        clsAccordion: "",
        clsFrame: "",
        clsFrameHeading: "",
        clsFrameContent: "",

        onFrameOpen: () => {},
        onFrameBeforeOpen: () => true,
        onFrameClose: () => {},
        onFrameBeforeClose: () => true
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
            single: this.props.oneFrame,
            openFrames: openFrames
        };

        this.clickFrameHeading = this.clickFrameHeading.bind(this);
    }

    clickFrameHeading(index){
        const {openFrames} = this.state;
        const isOpen = !!openFrames[index];
        const allowMultipleOpen = this.props.oneFrame === false;
        const {oneFrameOpen} = this.props;
        const frame = React.Children.toArray(this.props.children)[index];

        if (!isOpen && !this.props.onFrameBeforeOpen(frame, index)) return;
        if (isOpen && !this.props.onFrameBeforeClose(frame, index)) return;

        if (allowMultipleOpen) {
            this.setState({
                openFrames: {
                    ...openFrames,
                    [index]: !isOpen
                }
            });
        } else {
            if (oneFrameOpen && isOpen) return;
            this.setState({
                openFrames: {
                    [index]: !isOpen
                }
            });
        }

        this.props[isOpen ? 'onFrameOpen' : 'onFrameClose'](frame, index);
    }

    render(){
        const { material, marker, clsAccordion, clsFrame, clsFrameHeading, clsFrameContent, animationDuration } = this.props;
        const { openFrames } = this.state;
        const className = `accordion ${material ? 'material' : ''} ${marker ? 'marker-on' : ''} ${clsAccordion}`;

        return (
            <div className={className}>
                {
                    React.Children.map(this.props.children, (frame, index) => (
                        <AccordionFrame key={index}
                                        animationDuration={animationDuration}
                                        title={frame.props.title}
                                        clsFrame={clsFrame+ ' ' + frame.props.clsFrame}
                                        clsFrameHeading={clsFrameHeading+ ' ' + frame.props.clsFrameHeading}
                                        clsFrameContent={clsFrameContent+ ' ' + frame.props.clsFrameContent}
                                        open={!!openFrames[index]}
                                        onHeadingClick={this.clickFrameHeading}
                                        frame={index}>
                            {frame.props.children}
                        </AccordionFrame>
                    ))
                }
            </div>
        )
    }
}