import React from "react";
import "./table.less";
import {MD5} from "../../routines";

export default class Table extends React.Component {
    static defaultProps = {
        mode: "normal",
        head: null,
        body: null,
        cls: "",
        className: "",
        clsHeadRow: "",
        clsHeadCol: "",
        clsDataRow: "",
        clsDataCol: "",
        onHeadClick: () => {},
        onCellClick: () => {},
        onDrawCell: val => val,
    };

    constructor(props){
        super(props);
        this.state = {
            body: props.body,
            bodyHash: MD5(JSON.stringify(props.body))
        };
        this.header = null;
        this.table = null;
    }

    static getDerivedStateFromProps(props, state){
        if (MD5(JSON.stringify(props.body)) !== state.bodyHash) {
            return {
                bodyHash: MD5(JSON.stringify(props.body)),
                body: props.body
            }
        }
        return null;
    }

    drawHeader = () => {
        const {head, mode, clsHeadRow, clsHeadCol} = this.props;
        if (Array.isArray(head) && head.length > 0) {
            return (
                <tr className={clsHeadRow}>
                    {head.map( (el, index) => {
                        const {sortable, sortDir, title, name, cls} = el;
                        const sortClass = mode !== "static" ? `${sortable ? 'sortable-column' : ''} ${sortDir ? 'sort-'+sortDir : ''}` : '';
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
        const {clsDataRow, clsDataCol, cellWrap, onDrawCell} = this.props;
        const {body} = this.state;
        const tableBody = [];

        if (Array.isArray(body) && body.length > 0) {
            body.forEach( (el, index) => {
                tableBody.push(
                    <tr key={index} className={clsDataRow}>
                        {el.map((val, key)=>{
                            const colProps = this.props.head ? this.props.head[key] : null;
                            const cellClass = `${clsDataCol} ${colProps && colProps["clsColumn"] ? colProps["clsColumn"] : ''}`;
                            let cellVal = colProps && colProps["template"] ?  colProps["template"].replace("%VAL%", val) : val;
                            const style = {};

                            if (colProps && colProps["size"]) {
                                style.width = colProps["size"];
                            }

                            cellVal = onDrawCell(cellVal, colProps);

                            return (
                                <td key={key}
                                    className={cellClass}
                                    dangerouslySetInnerHTML={{__html: cellVal}} onClick={this.cellClick}
                                    style={style}
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

    cellClick = e => {
        this.props.onCellClick(e);
    };

    render(){
        const {
            cellWrap, body: initBody, head, cls, className, mode, clsHeadRow, clsHeadCol, clsDataRow, clsDataCol, children,
            onHeadClick, onCellClick, onDrawCell,
            ...rest} = this.props;
        const {body} = this.state;
        const classTable = `table ${cls} ${className}`;

        return (
            <table className={classTable} {...rest} ref={ref => this.table = ref}>
                {head && (
                    <thead>{this.drawHeader()}</thead>
                )}
                {body && (
                    <tbody>{this.drawBody()}</tbody>
                )}

                {children}
            </table>
        )
    }
}