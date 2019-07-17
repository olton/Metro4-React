import React from "react";
import Collapse from "../collapse/collapse.jsx";

export default class AccordionFrame extends React.Component {
    static defaultProps = {
        frame: null,
        open: false,
        animationDuration: 300,
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
        const {open, animationDuration, title, clsFrame, clsFrameHeading, clsFrameContent} = this.props;
        const props = this.props;
        const transition = `height ${animationDuration}ms cubic-bezier(.4, 0, .2, 1)`;

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