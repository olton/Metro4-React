import React from "react";
import Collapse from "@kunukn/react-collapse/dist/Collapse.umd";

export default class AccordionFrame extends React.Component {
    static defaultProps = {
        dataFrame: null,
        open: false,
        dataAnimationDuration: 300,
        dataTitle: "",
        dataClsFrame: "",
        dataClsFrameHeading: "",
        dataClsFrameContent: ""
    };

    constructor(props){
        super(props);
        this.onHeadingClick = this.onHeadingClick.bind(this);
    }

    onHeadingClick(){
        this.props.onHeadingClick(this.props.dataFrame);
    }

    render(){
        const {open} = this.props;
        const props = this.props;
        const transition = `height ${this.props.dataAnimationDuration}ms cubic-bezier(.4, 0, .2, 1)`;

        return (
            <div className={'frame ' + props.dataClsFrame}>
                <div className={'heading ' + props.dataClsFrameHeading} onClick={this.onHeadingClick}>{props.dataTitle}</div>
                <Collapse isOpen={open} transition={transition}>
                    <div className={'content ' + props.dataClsFrameContent}>
                        {props.children}
                    </div>
                </Collapse>
            </div>
        )
    }
}