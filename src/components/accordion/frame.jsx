import React from "react";
import Collapse from "@kunukn/react-collapse/dist/Collapse.umd";

export default class AccordionFrame extends React.Component {
    static defaultProps = {
        dataFrame: null,
        open: false,
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

        return (
            <div className={'frame ' + props.dataClsFrame}>
                <div className={'heading ' + props.dataClsFrameHeading} onClick={this.onHeadingClick}>{props.dataTitle}</div>
                <Collapse isOpen={open} transition="height 100ms cubic-bezier(.4, 0, .2, 1)">
                    <div className={'content ' + props.dataClsFrameContent}>
                        {props.children}
                    </div>
                </Collapse>
            </div>
        )
    }
}