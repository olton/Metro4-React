import React from "react";
import "./table.less";
import {MD5} from "../../routines";

export default class Table extends React.Component {
    static defaultProps = {
        staticTable: true,
        head: null,
        data: null,
        cls: "",
        className: "",
        clsHeadRow: "",
        clsHeadCol: "",
        clsDataRow: "",
        clsDataCol: ""
    };

    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            dataHash: MD5(JSON.stringify(props.data))
        };
        this.header = null;
    }

    static getDerivedStateFromProps(props, state){
        if (MD5(JSON.stringify(props.data)) !== state.dataHash) {
            return {
                dataHash: MD5(JSON.stringify(props.data)),
                data: props.data
            }
        }
        return null;
    }

    drawHeader = () => {
        const {head, staticTable, clsHeadRow, clsHeadCol} = this.props;
        if (Array.isArray(head) && head.length > 0) {
            return (
                <tr className={clsHeadRow}>
                    {head.map( (el, index) => {
                        const {sortable, sortDir, title, name, cls} = el;
                        const sortClass = staticTable ? `${sortable ? 'sortable-column' : ''} ${sortDir ? 'sort-'+sortDir : ''}` : '';
                        const headClass = cls ? cls : '';
                        return (
                            <th className={`${sortClass} ${clsHeadCol} ${headClass}`} key={index} dangerouslySetInnerHTML={{__html: title ? title : name}}/>
                        )
                    } )}
                </tr>
            )
        }
    };

    drawBody = () => {
        const {clsDataRow, clsDataCol} = this.props;
        const {data} = this.state;
        const tableBody = [];
        if (Array.isArray(data) && data.length > 0) {
            data.forEach( (el, index) => {
                tableBody.push(
                    <tr key={index} className={clsDataRow}>
                        {el.map((val, key)=>{
                            return <td className={`${clsDataCol}`} key={key} dangerouslySetInnerHTML={{__html: val}}/>
                        })}
                    </tr>
                );
            })
        }
        return tableBody;
    };

    render(){
        const {data, head, cls, className, staticTable, clsHeadRow, clsHeadCol, clsDataRow, clsDataCol, children, ...rest} = this.props;
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