import React from "react";
import {Adsense, Cell, Icon, Table, ToolBar, ToolButton} from "../../../src";
import PrismCode from "../PrismCode";
import Defs, {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideToolButton extends React.Component {
    render(){
        const codeImport = `import {ToolBar, ToolButton} from 'metro4-react';`;
        const codeUseDefault = `
            <ToolBar>
                <ToolButton><Icon name={'rocket'}/></ToolButton>
                <ToolButton cls={'text-button'}>Open</ToolButton>
                <ToolButton as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
            </ToolBar>
        `;
        const codeUseVertical = `
            <ToolBar vertical={true}>
                <ToolButton><Icon name={'rocket'}/></ToolButton>
                <ToolButton cls={'text-button'}>Open</ToolButton>
                <ToolButton as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
            </ToolBar>
        `;
        const codeUserAnchor = `<ToolButton as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>`;

        return(
            <Article>
                <GuideLogo/>
                <h1>ToolBar &amp; ToolButton</h1>

                <p className={'text-leader2'}>
                    If you need to create toolbar, Metro 4 provides the special components.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    If you need to create toolbar, Metro 4 provides the special components fro this: <code>&lt;ToolBar/&gt;</code> and <code>&lt;ToolButton/&gt;</code>.
                    Toolbar buttons support accent mode (primary, alert, ...), outline mode and rounded corners.
                </p>
                <div className='example'>
                    <ToolBar>
                        <ToolButton><Icon name={'rocket'}/></ToolButton>
                        <ToolButton cls={'text-button'}>Open</ToolButton>
                        <ToolButton as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                    </ToolBar>
                    <ToolBar>
                        <ToolButton cls={'primary'}><Icon name={'rocket'}/></ToolButton>
                        <ToolButton cls={'info text-button'}>Open</ToolButton>
                        <ToolButton cls={'alert'} as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                    </ToolBar>
                    <ToolBar>
                        <ToolButton cls={'primary outline'}><Icon name={'rocket'}/></ToolButton>
                        <ToolButton cls={'info text-button outline'}>Open</ToolButton>
                        <ToolButton cls={'alert outline'} as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                    </ToolBar>
                    <ToolBar>
                        <ToolButton cls={'primary rounded'}><Icon name={'rocket'}/></ToolButton>
                        <ToolButton cls={'info text-button rounded'}>Open</ToolButton>
                        <ToolButton cls={'alert rounded'} as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                    </ToolBar>
                </div>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUseDefault}/>

                <br/>
                <h4>ToolBar props</h4>
                <Table className='table-border cell-border' head={tablePropsHeader}>
                    <tbody>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td>Button classes</td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <h4>ToolButton props</h4>
                <Table className='table-border cell-border' head={tablePropsHeader}>
                    <tbody>
                    <tr>
                        <td><code>as</code></td>
                        <td><code>span</code></td>
                        <td>Semantic element for button</td>
                    </tr>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td></td>
                        <td>Button classes</td>
                    </tr>
                    </tbody>
                </Table>
                <p>
                    You can also use any allowed props for the button. Example, if semantic element is <code>anchor</code>, you can use prop <code>href</code> for define link target.
                </p>
                <PrismCode language="js" code={codeUserAnchor}/>

                <br/>
                <h3>Vertical ToolBar</h3>
                <p>
                    If you need to create <code>&lt;ToolBar/&gt;</code> with vertical orientation, use prop <code>vertical={Defs.OPEN_BRACE+"true"+Defs.CLOSE_BRACE}</code>.
                </p>
                <div className='example'>
                    <ToolBar vertical={true}>
                        <ToolButton><Icon name={'rocket'}/></ToolButton>
                        <ToolButton><Icon name={'folder'}/></ToolButton>
                        <ToolButton as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                    </ToolBar>
                </div>
                <PrismCode language="js" code={codeUseVertical}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}