import React from "react";
import {Adsense, Radio, Table, Row, Cell} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideRadio extends React.Component {
    render(){
        const codeImport = `import {Radio} from "metro4-react";`;
        const codeUsing = `
            <Radio name="r11" caption="Radio" checked/>
            <Radio name="r11" caption="Radio" />
            <Radio name="r12" caption="Radio" disabled/>
            <Radio name="r12" caption="Radio" checked disabled/>

            <Radio name="r21" caption="Radio" checked variant={2}/>
            <Radio name="r21" caption="Radio" variant={2} />
            <Radio name="r22" caption="Radio" disabled variant={2}/>
            <Radio name="r22" caption="Radio" checked disabled variant={2}/>
        `;

        const tablePropsBody = [
            ['caption', 'empty', 'Element caption'],
            ['variant', '1', 'Element variant modern or material'],
            ['cls', 'empty', 'Additional component classes'],
            ['className', 'empty', 'Additional component classes'],
            ['clsCheckbox', 'empty', 'Additional component classes'],
            ['clsCheck', 'empty', 'Additional classes for check sub-component'],
            ['clsCaption', 'empty', 'Additional classes for component caption'],
            ['onCheck', '()=>{}', 'Callback for check state'],
            ['onUnCheck', '()=>{}', 'Callback for uncheck state'],
            ['onChange', '()=>{}', 'Callback for change state'],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>Radio</h1>

                <p className={'text-leader2'}>
                    Create a styled radio buttons with support for highly used options.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Row>
                        <Cell cls='cell-md-6'>
                            <Radio name="r11" caption="Radio" checked={true}/>
                            <Radio name="r11" caption="Radio"/>
                            <Radio name="r12" caption="Radio" disabled/>
                            <Radio name="r12" caption="Radio" checked disabled/>
                        </Cell>
                        <Cell cls='cell-md-6'>
                            <Radio name="r21" caption="Radio" checked variant={2}/>
                            <Radio name="r21" caption="Radio" variant={2} />
                            <Radio name="r22" caption="Radio" disabled variant={2}/>
                            <Radio name="r22" caption="Radio" checked disabled variant={2}/>
                        </Cell>
                    </Row>
                </Example>

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