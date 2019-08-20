import React from "react";
import "./table.less";

export default class Table extends React.Component {
    render(){
        return (
            <table className={'table'}>
                <tbody>{this.props.children}</tbody>
            </table>
        )
    }
}