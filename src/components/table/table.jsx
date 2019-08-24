import React from "react";
import "./table.less";

export default class Table extends React.Component {
    static defaultProps = {
        head: null,
        data: null,
        cls: "",
        className: ""
    };

    constructor(props){
        super(props);
        this.state = {

        };
        this.header = null;
    }

    drawHeader = () => {
        const {head} = this.props;
        if (Array.isArray(head) && head.length > 0) {
            return (
                <tr>
                    {head.map( (el, index) => {
                        return (
                            <th key={index} dangerouslySetInnerHTML={{__html: el.title ? el.title : el.name}}/>
                        )
                    } )}
                </tr>
            )
        }
    };

    drawBody = () => {
        const {data} = this.props;
        const tableBody = [];
        if (Array.isArray(data) && data.length > 0) {
            data.forEach( (el, index) => {
                tableBody.push(
                    <tr key={index}>
                        {el.map((val, key)=>{
                            return <td key={key} dangerouslySetInnerHTML={{__html: val}}/>
                        })}
                    </tr>
                );
            })
        }
        return tableBody;
    };

    render(){
        const {data, head, cls, className, children, ...rest} = this.props;
        const classTable = `table ${cls} ${className}`;

        return (
            <table className={classTable} {...rest}>
                {head && (
                    <thead>{this.drawHeader()}</thead>
                )}
                {data && (
                    <tbody>{this.drawBody()}</tbody>
                )}

                {children}
            </table>
        )
    }
}