import React from "react";
import "./panel.less";
import Collapse from "../collapse/collapse";
import Icon from "../icon/icon";

export default class Panel extends React.Component {
    static defaultProps = {
        caption: "",
        icon: "",
        iconPrefix: "mif-",
        image: "",
        collapsible: true,
        speed: 100,
        open: true,
        customButtons: {},
        cls: "",
        clsTitle: "",
        clsCaption: "",
        clsIcon: "",
        clsContent: "",
        clsCustomButton: "",
        clsDropdownToggle: ""
    };

    constructor(props){
        super(props);
        this.state = {
            open: props.open,
            initState: props.open
        };
    }

    static getDerivedStateFromProps(props, state){
        if (props.open !== state.initState) {
            return {
                open: props.open,
                initState: props.open
            }
        }
        return null;
    }

    togglePanelState = () => {
        this.setState({
            open: !this.state.open
        })
    };

    render(){
        const {caption, icon, iconPrefix, image, speed, collapsible, open: panelState, customButtons, cls, clsTitle, clsCaption, clsIcon, clsContent, clsCustomButton, clsDropdownToggle} = this.props;
        const {open} = this.state;
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;
        const iconClass = `icon ${clsIcon}`;

        return(
            <div className={'panel ' + cls}>
                <div className={'panel-title ' + clsTitle}>
                    <div className={'caption ' + clsCaption}>{caption}</div>

                    {icon !== "" && (
                        <Icon name={icon} prefix={iconPrefix} cls={iconClass}/>
                    )}

                    {image !== "" && (
                        <img src={image} alt='' className={iconClass}/>
                    )}

                    {collapsible && (
                        <span className={'dropdown-toggle marker-center ' + (open ? ' active-toggle ' : '') + clsDropdownToggle} onClick={this.togglePanelState}/>
                    )}
                </div>

                <Collapse isOpen={collapsible ? open : true} className={'panel-content'} transition={transition}>
                    <div className={'panel-content-inner ' + clsContent}>
                        {this.props.children}
                    </div>
                </Collapse>

            </div>
        )
    }
}