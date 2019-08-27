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
        clsDataCol: "",
        onHeadClick: () => {},
        onColumnClick: () => {},
    };

    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            dataHash: MD5(JSON.stringify(props.data))
        };
        this.header = null;
        this.table = null;
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
                            <th index={index} className={`${sortClass} ${clsHeadCol} ${headClass}`} key={index} dangerouslySetInnerHTML={{__html: title ? title : name}} onClick={this.headClick}/>
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
                            const colProps = this.props.head ? this.props.head[key] : null;
                            return (
                                <td key={key}
                                    className={`${clsDataCol} ${colProps && colProps["clsColumn"] ? colProps["clsColumn"] : ''}`}
                                    dangerouslySetInnerHTML={{__html: colProps && colProps["template"] ?  colProps["template"].replace("%VAL%", val) : val}} onClick={this.columnClick}
                                    style={{
                                        width: (colProps && colProps["size"] ? colProps["size"] : "auto")
                                    }}
                                />
                            )
                        })}
                    </tr>
                );
            })
        }
        return tableBody;
    };

    headClick = e => {
        this.props.onHeadClick(e);
    };

    columnClick = e => {
        this.props.onColumnClick(e);
    };

    render(){
        const {data, head, cls, className, staticTable, clsHeadRow, clsHeadCol, clsDataRow, clsDataCol, children, onHeadClick, onColumnClick, ...rest} = this.props;
        const classTable = `table ${cls} ${className}`;

        return (
            <table className={classTable} {...rest} ref={ref => this.table = ref}>
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