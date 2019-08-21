import React from "react";
import "./table.less";

export default class Table extends React.Component {
    static defaultProps = {
        head: null,
        data: null,
        cls: "",
        className: ""
    };

    render(){
        const {data, head, cls, className, children, ...rest} = this.props;
        const classTable = `table ${cls} ${className}`;
        return (
            <table className={classTable} {...rest}>
                {head && (
                    <thead>{head}</thead>
                )}
                {data && (
                    <tbody>{data}</tbody>
                )}
                {!data && (
                    <tbody>{children}</tbody>
                )}
            </table>
        )
    }
}