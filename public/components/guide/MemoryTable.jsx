import React from "react";
import {Adsense, MemoryTable} from "../../../index";
import PrismCode from "../PrismCode";
import Example from "../Example";
import Table from "../../../src/components/table/table";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideMemoryTable extends React.Component {

    constructor(props) {
        super(props);
        this.drawCell = this.drawCell.bind(this);
    }

    drawCell(val, props) {
        if (props.name === 'name') {
            return <a href="#">{val}</a>
        }
        return val;
    };

    render(){
        const codeImport = `import {MemoryTable} from "metro4-react";`;
        const codeUse= `
            <MemoryTable 
                className="table-border striped" 
                source={'../data/table.json'} 
                rowsTitle='Show: ' 
                onDrawCell={ 
                    (val, props, index) => index === 0 ? "<code>"+val+"</code>" : val 
                } 
                clsPagination='no-gap'
                clsEmptyTitle='text-center'
                />`;

        const tablePropsData = [
            ["scrollable", "false", "Enable horizontal scroll for wide table"],
            ["source", "...", "Link to table data source"],
            ["pagination", "true", "Add pagination"],
            ["search", "true", "Add search feature"],
            ["rowsSteps", "[-1, 10, 20, 100]", "Data for select, where shown how much rows will be displayed"],
            ["rows", "10", "Init value for rowsSteps"],
            ["rowsTitle", "null", "Prepend for select for rowsSteps"],
            ["searchPlaceholder", "Search...", "Placeholder for search field"],
            ["searchFilter", "null", "Init search filter"],
            ["searchFilterLength", "1", "Chars when filter fired"],
            ["searchFilterThreshold", "500", "Milliseconds for filter fired after user stop typing"],
            ["clsSearchBlock", "null", "Additional class for search block"],
            ["clsSearch", "null", "Additional class for search input"],
            ["clsRows", "null", "Additional class for rows steps"],
            ["clsInfoBlock", "null", "Additional class for info block (pagination + info)"],
            ["clsPagination", "null", "Additional class for pagination"],
            ["clsPaginationBlock", "null", "Additional class for pagination block"],
            ["clsInfo", "null", "Additional class for table information block"],
            ["onHeadClick", "() => {}", "Callback for table head cell click"],
            ["onCellClick", "() => {}", "Callback for table body cell click"],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>MemoryTable</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    <code>MemoryTable</code> - component that extends the capabilities of the standard Table component. It adds features such as: search, sorting, pagination.
                </p>
                <br/>
                <Example>
                    <MemoryTable
                        className="table-border striped"
                        source={'../data/table.json'}
                        rowsTitle='Show: '
                        onDrawCell={this.drawCell}
                        clsSearchBlock='row'
                        clsSearch='cell-md-9'
                        clsRows='cell-md-3'
                        clsInfoBlock='row'
                        clsInfo='cell-md-6 order-2 text-center'
                        clsPaginationBlock='cell-md-6'
                        clsPagination='no-gap'
                        clsEmptyTitle='text-center'
                    />
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <p>
                    Component <code>MemoryTable</code> has standard props as for <code>Table</code> component and an addition properties:
                </p>
                <Table className="table-border cell-border" body={tablePropsData} head={tablePropsHeader}/>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUse}/>


                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}