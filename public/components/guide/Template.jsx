import React from "react";
import {Adsense, Table} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideTemplate extends React.Component {
    render(){
        const codeImport = `import {Component} from "metro4-react";`;
        const codeUsing = ``;

        const tablePropsBody = [];

        return(
            <Article>
                <GuideLogo/>
                <h1>Title</h1>

                <p className={'text-leader2'}>
                    ...
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    ...
                </p>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUsing}/>

                <br/>
                <h4>Props</h4>
                <Table className="table-border cell-border" head={tablePropsHeader} body={tablePropsBody}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}