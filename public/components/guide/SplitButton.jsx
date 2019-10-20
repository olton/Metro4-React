import React from "react";
import {Adsense, Button, Cell, Grid, Row, SplitButton, Table} from "../../../index";
import PrismCode from "../PrismCode";
import Defs, {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideSplitButton extends React.Component {
    render(){
        const codeImport = `import {SplitButton} from 'metro4-react'`;
        const codeUseDefault = `
            <SplitButton>
                <Button>Reply</Button>
                <Button/>
                <ul>
                    <li><a href={'#'}>Item 1</a></li>
                    <li><a href={'#'}>Item 2</a></li>
                    <li><a href={'#'}>Item 3</a></li>
                </ul>
            </SplitButton>
        `;

        const tablePropsData = [
            ["<code>cls</code>", "", "Additional classes"],
            ["<code>className</code>", "", "Additional classes"],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>Split button</h1>
                <p className='text-leader2'>
                    With the Metro 4 you can easily create different types of stylized split buttons.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    <code>SplitButton</code> is a composite component and consists of the main button, drop-down list, and a drop-down list control button.
                </p>
                <div className='example'>
                    <Row>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton>
                                <Button>Reply</Button>
                                <Button/>
                                <ul>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </SplitButton>
                        </Cell>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton>
                                <Button cls={'primary'}>Reply</Button>
                                <Button cls={'alert'}/>
                                <ul>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </SplitButton>
                        </Cell>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton  clsMainButton={'warning rounded'} clsSplitButton={'info rounded'}>
                                <Button>Reply</Button>
                                <Button/>
                                <ul>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </SplitButton>
                        </Cell>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton  clsMainButton={'success outline'} clsSplitButton={'info rounded'}>
                                <Button>Reply</Button>
                                <Button onClick={ () => alert('Clicked') }>...</Button>
                            </SplitButton>
                        </Cell>
                    </Row>
                </div>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className='table-border cell-border' head={tablePropsHeader} body={tablePropsData}/>

                <br/>
                <h3>Using</h3>
                <p className='remark warning'>
                    Button elements must be followed in strict order: main button, list control button and list. The list is an optional item.
                </p>
                <PrismCode language="js" code={codeUseDefault}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}