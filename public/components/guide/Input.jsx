import React from "react";
import {Adsense, Cell, Grid, Icon, Input, Row, Table} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideInput extends React.Component {
    render(){
        const autocompleteList = ["Ukraine", "USA", "Canada", "Marokko", "Singapur"];
        const customButtons = [
            {
                title: '',
                icon: 'apple',
                image: '',
                cls: 'info',
                onClick: () => {alert('info!')}
            },
            {
                title: '',
                icon: 'rocket',
                iconPrefix: 'fa fa-',
                image: '',
                cls: 'alert',
                onClick: () => {alert('halo!')}
            }
        ];

        const codeImport = `import {Input} from "metro4-react";`;
        const codeUsing = ``;

        const tablePropsBody = [];

        return(
            <Article>
                <GuideLogo/>
                <h1>Input</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    Use <code>Input</code> component to create form text input element.
                </p>
                <Example>
                    <Row>
                        <Cell cls="cell-md-4">
                            <h6>default</h6>
                            <Input placeholder='Input value' value={123}/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>password</h6>
                            <Input placeholder='Enter a password' type='password'/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>search</h6>
                            <Input placeholder='Search...' search={true} onSearch={ val => console.log(val) } />
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4">
                            <h6>history</h6>
                            <Input history={true}/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>autocomplete</h6>
                            <Input autocomplete={autocompleteList} />
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h5>custom buttons</h5>
                            <Input customButtons={customButtons}/>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4">
                            <h6>state required</h6>
                            <Input cls={'required'} />
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>state error</h6>
                            <Input fieldState={'error'} errorMessage={'Enter a valid value'}/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>state success</h6>
                            <Input fieldState={'success'} />
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-6">
                            <h6>prepend</h6>
                            <Input value='Input value' prepend='Prepend:'/>
                        </Cell>
                        <Cell cls="cell-md-6">
                            <h6>prepend icon</h6>
                            <Input value='Input value' prepend={<Icon name='rocket'/>}/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell cls="cell-md-6">
                            <h6>append</h6>
                            <Input value='Input value' append='%'/>
                        </Cell>
                        <Cell cls="cell-md-6">
                            <h6>append icon</h6>
                            <Input value='Input value' append={<Icon name='rocket'/>}/>
                        </Cell>
                    </Row>
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className="table-border cell-border" head={tablePropsHeader} body={tablePropsBody}/>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUsing}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}