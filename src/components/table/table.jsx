import React from "react";
import "./table.less";
import {MD5} from "../../routines";
import CustomElement from "../custom-element/custom-element";

export default class Table extends React.Component {
    static defaultProps = {
        emptyTitle: "Nothing to show",
        mode: "normal",
        head: null,
        body: null,
        cls: "",
        className: "",
        clsHeadRow: "",
        clsHeadCell: "",
        clsBodyRow: "",
        clsBodyCell: "",
        clsEmptyTitle: "",
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
        const {head, mode, clsHeadRow, clsHeadCell} = this.props;

        if (Array.isArray(head) && head.length > 0) {
            return (
                <tr className={clsHeadRow}>
                    {head.map( (el, index) => {
                        const {sortable, sortDir, title, name, cls} = el;
                        const sortClass = mode !== "static" ? `${sortable ? 'sortable-column' : ''} ${sortDir ? 'sort-'+sortDir : ''}` : '';
                        const headClass = cls ? cls : '';
                        return (
                            <th index={index} className={`${sortClass} ${clsHeadCell} ${headClass}`} key={index} dangerouslySetInnerHTML={{__html: title ? title : name}} onClick={this.headClick}/>
                        )
                    } )}
                </tr>
            )
        }
    };

    drawBody = () => {
        const {emptyTitle, head, clsBodyRow, clsBodyCell, clsEmptyTitle, onDrawCell} = this.props;
        const {body} = this.state;
        const tableBody = [];
        const colSpan = head ? head.length : 1;

        if (!Array.isArray(body) || body.length === 0) {
            tableBody.push(
                <tr className={clsBodyRow} key={0}>
                    <td colSpan={colSpan} className={clsEmptyTitle}>{emptyTitle}</td>
                </tr>
            )
        } else {
            body.forEach( (el, index) => {
                tableBody.push(
                    <tr key={index} className={clsBodyRow}>
                        {el.map((val, key)=>{
                            const colProps = this.props.head ? this.props.head[key] : null;
                            const cellClass = `${clsBodyCell} ${colProps && colProps["clsColumn"] ? colProps["clsColumn"] : ''}`;
                            const hasTemplate = colProps && colProps["template"];
                            let cellVal = hasTemplate ? colProps["template"].replace("%VAL%", val) : val;
                            const style = {};

                            if (colProps && colProps["size"]) {
                                style.width = colProps["size"];
                            }

                            cellVal = onDrawCell(cellVal, colProps, key);

                            return hasTemplate ?
                                <CustomElement as="td" key={key} className={cellClass} onClick={this.cellClick} style={style} dangerouslySetInnerHTML={{__html: cellVal}}/> :
                                <CustomElement as="td" key={key} className={cellClass} onClick={this.cellClick} style={style}>{cellVal}</CustomElement>
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
            emptyTitle, clsEmptyTitle, body: initBody, head, cls, className, mode, clsHeadRow, clsHeadCell, clsBodyRow, clsBodyCell, children,
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