import React from "react";
import Collapse from "../collapse/collapse.jsx";
import "./accordion.less";

export class AccordionFrame extends React.Component {
    static defaultProps = {
        frame: null,
        open: false,
        speed: 300,
        title: "",
        clsFrame: "",
        clsFrameHeading: "",
        clsFrameContent: ""
    };

    constructor(props){
        super(props);
        this.onHeadingClick = this.onHeadingClick.bind(this);
    }

    onHeadingClick(){
        this.props.onHeadingClick(this.props.frame);
    }

    render(){
        const {open, speed, title, clsFrame, clsFrameHeading, clsFrameContent} = this.props;
        const props = this.props;
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;

        return (
            <div className={'frame ' + (open ? 'active' : '') + ' ' + clsFrame}>
                <div className={'heading ' + clsFrameHeading} onClick={this.onHeadingClick}>{title}</div>
                <Collapse isOpen={open} transition={transition}>
                    <div className={'content ' + clsFrameContent}>
                        {props.children}
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default class Accordion extends React.Component{
    static defaultProps = {
        marker: true,
        variant: 1,
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
        const { variant, marker, clsAccordion, clsFrame, clsFrameHeading, clsFrameContent, animationDuration } = this.props;
        const { openFrames } = this.state;
        const className = `accordion ${variant === 2 ? 'material' : ''} ${marker ? 'marker-on' : ''} ${clsAccordion}`;

        return (
            <div className={className}>
                {
                    React.Children.map(this.props.children, (frame, index) => {
                        const props = frame.props;
                        const frameProps = {
                            animationDuration,
                            title: props.title,
                            clsFrame: clsFrame + ' ' + props.clsFrame,
                            clsFrameHeading: clsFrameHeading+ ' ' + props.clsFrameHeading,
                            clsFrameContent: clsFrameContent+ ' ' + props.clsFrameContent
                        };

                        return (
                            <AccordionFrame key={index}
                                            {...frameProps}
                                            open={!!openFrames[index]}
                                            onHeadingClick={this.clickFrameHeading}
                                            frame={index}>
                                {props.children}
                            </AccordionFrame>
                        )
                    })
                }
            </div>
        )
    }
}