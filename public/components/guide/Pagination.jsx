import React from "react";
import {Adsense, Cell, Pagination} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import Table from "../../../src/components/table/table";
import Defs, {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";


export default class GuidePagination extends React.Component {

    render(){
        const codeImport = `import {Pagination} from "metro4-react";`;
        const codeUse = `<Pagination total={100} itemsPerPage={5} current={7} onClick=${Defs.OPEN_BRACE} (e) => {...} ${Defs.CLOSE_BRACE}/>`;
        const tablePropsData = [
            ["total", "0", "Total records in set"],
            ["itemPerPage", "0", "How much item sowed on the page"],
            ["current", "0", "Current page number (from 1)"],
            ["distance", "5", "Page distance"],
            ["cls", "null", "Pagination classes"],
            ["className", "null", "Pagination classes"],
            ["prevTitle", "Prev", "Previous button title"],
            ["nextTitle", "Next", "Next button title"],
            ["moreTitle", "...", "More title"],
            ["onClick", "() => {}", "Callback for pagination button click event. Function receive <code>page number</code> or <code>next</code>, <code>prev</code>"]
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>Pagination</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Pagination total={100} itemsPerPage={5} current={7} onClick={this.paginationClick}/>
                    <Pagination total={100} itemsPerPage={5} current={7} onClick={this.paginationClick} className='no-gap info'/>
                    <Pagination total={100} itemsPerPage={5} current={7} onClick={this.paginationClick} className='size-small warning rounded'/>
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className="table-border cell-border" head={tablePropsHeader} body={tablePropsData}/>

                <br/>
                <h3>Use</h3>
                <PrismCode language="js" code={codeUse}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}