import React, {Children, Component} from "react";
import "./tabs.less";

export class Tab extends Component {
    static defaultProps = {
        cls: "",
        target: "",
        onClick: ()=>{}
    };
    render(){
        const {cls, target, children, ...rest} = this.props;

        return (
            <li className={cls} {...rest}><a href={'#'+target} >{this.props.children}</a></li>
        )
    }
}

export default class Tabs extends Component {
    static defaultProps = {
        active: 0,
        position: "top", // top, bottom, right, left
        variant: "default",
        cls: "",
        clsTabsList: "",
        clsTab: "",
        onTabClick: ()=>{}
    };

    constructor(props){
        super(props);

        const tabs = Children.toArray(props.children);
        let openTab = 0;

        tabs.forEach( (t, i)=> {
            if (i === parseInt(props.active)) {
                openTab = i;
            }
        } );

        this.state = {
            tab: openTab
        };

        this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(e){
        const tab = parseInt(e.target.parentNode.getAttribute('tab'));
        this.setState({
            tab: tab
        });
        this.props.onTabClick(e);
    }

    render(){
        const {position, variant, cls, clsTabsList, clsTab} = this.props;
        const classPosition = (position === 'left' || position === 'right' ? ' vertical ' : ' horizontal ') + ' ' + position;
        const {tab} = this.state;

        return (
            <div className={`tabs ${classPosition} ${cls}`}>
                <ul className={`tabs-list tabs-${variant} ${clsTabsList}`}>
                    {Children.map( this.props.children, (el, index)=>{
                        const status = index === tab ? ' active ' : '';
                        return (
                            React.cloneElement(el, {
                                key: index,
                                cls: el.props.cls + ' ' + clsTab + status,
                                tab: index,
                                onClick: this.onTabClick
                            })
                        )
                    })}
                </ul>
            </div>
        )
    }
}