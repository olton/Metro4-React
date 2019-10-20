import React from "react";
import {Adsense, Switch, Table, Row, Cell} from "../../../index";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideSwitch extends React.Component {
    render(){
        const codeImport = `import {Switch} from "metro4-react";`;
        const codeUsing = `
            <Switch/>
            <Switch checked/>
            <Switch caption='Switch'/>
            
            <Switch variant={2}/>
            <Switch checked variant={2}/>
            <Switch caption='Switch' variant={2}/>

            <Switch caption='Switch' disabled/>
            <Switch caption='Switch' readOnly={true}/>
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
                <h1>Switch</h1>

                <p className={'text-leader2'}>
                    Create a switch styled checkbox with support for highly used options.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Row>
                        <Cell cls='cell-md-6'>
                            <h4>Variant 1</h4>
                            <div>
                                <Switch/>
                                <Switch checked/>
                                <Switch caption='Switch'/>
                                <div>
                                    <Switch disabled/>
                                    <Switch checked disabled/>
                                    <Switch caption='Switch' disabled/>
                                </div>
                            </div>
                        </Cell>
                        <Cell cls='cell-md-6'>
                            <h4>Variant 2</h4>
                            <div>
                                <Switch variant={2}/>
                                <Switch checked variant={2}/>
                                <Switch caption='Switch' variant={2}/>
                                <div>
                                    <Switch disabled variant={2}/>
                                    <Switch checked disabled variant={2}/>
                                    <Switch caption='Switch' disabled variant={2}/>
                                </div>
                            </div>
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