import React from "react";
import Table from "./table";
import Pagination from "../pagination/pagination";
import {FetchStatus} from "../../../public/components/Defs";
import Input from "../input/input";
import Select from "../select/select";

export default class MemoryTable extends React.Component {
    static defaultProps = {
        source: null,
        pagination: true,
        search: true,
        rows: [-1, 10, 20, 100],
        showRows: 10,
        clsSearchBlock: "row",
        clsSearch: "cell-md-9",
        clsRows: "cell-md-3",
        searchPlaceholder: "Search...",
        rowsPrepend: null
    };

    constructor(props){
        super(props);

        this.rawData = null;

        this.state = {
            status: FetchStatus.init,
            dataSlice: null,
            dataView: null,
            rowsPerPage: props.showRows
        };
    }

    load = (source) => {
        if (source && typeof source === 'string') {
            fetch(source).then(
                (response) => response.json()
            ).then(
                (response) => {
                    this.rawData = response;
                    this.setState({
                        status: FetchStatus.ok
                    })
                }
            ).catch( (e)=>{
                this.setState({
                    status: FetchStatus.error,
                    message: e.message
                })
            })
        }
    };

    componentDidMount(){
        const {source} = this.props;
        this.load(source);
    }

    render(){
        const {source, pagination, search, rows, showRows, clsSearchBlock, clsSearch, clsRows, searchPlaceholder, rowsPrepend, ...rest} = this.props;
        const {dataView, dataSlice, rowsPerPage} = this.state;
        return (
            <div className={'memory-table'}>

                <div className={clsSearchBlock}>
                    <div className={clsSearch}>
                        <Input placeholder={searchPlaceholder}/>
                    </div>
                    <div className={clsRows}>
                        <Select value={rowsPerPage} prepend={rowsPrepend}>
                            {rows.map( (val, index)=>{
                                return <option key={index} value={val}>{val === -1 ? 'All' : val}</option>
                            } )}
                        </Select>
                    </div>
                </div>

                <Table head={dataView} data={dataSlice} {...rest}/>

                {pagination && (
                    <div className={'pagination-wrapper'}>
                        <Pagination/>
                    </div>
                )}
            </div>
        )
    }
}