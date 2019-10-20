import React from "react";
import {Adsense, Cell, InfoButton, Table} from "../../../index";
import PrismCode from "../PrismCode";
import Defs, {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideInfoButton extends React.Component {
    render(){
        const codeImport = `import {InfoButton} from "metro4-react" `;
        const codeUse = `<InfoButton title="Star" subtitle="6,208" icon="star-full" />`;
        const codeUseAnchor = `
            <InfoButton as="a" 
                title="This is a link" 
                subtitle="6,208" 
                icon="star-full" 
                cls="warning rounded" 
                href="https://metroui.org.ua"/>
        `;
        const codeUseAnchor2 = `
            <InfoButton 
                title="This is a link" 
                subtitle="6,208" 
                icon="star-full" 
                cls="warning rounded" 
                hrefTitle="https://metroui.org.ua" 
                hrefSubtitle="https://github.com/olton/Metro-UI-CSS"/>
        `;

        return(
            <Article>
                <GuideLogo/>
                <h1>Info button</h1>
                <p className='text-leader2'>
                    Need button as on GitHub site? Use Metro 4 InfoButton!
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <div className='example'>
                    <InfoButton title="Star" subtitle="6,208" icon="star-full" />
                    &nbsp;<InfoButton title="Star" subtitle="6,208" icon="star-full" cls="alert" />
                    &nbsp;<InfoButton title="Star" subtitle="6,208" icon="star-full" cls="info rounded" />
                    &nbsp;<InfoButton as="a" title="This is a link" subtitle="6,208" icon="star-full" cls="warning rounded" href="https://metroui.org.ua"/>
                </div>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className='table-border cell-border' head={tablePropsHeader}>
                    <tbody>
                    <tr>
                        <td><code>as</code></td>
                        <td><code>span</code></td>
                        <td>Semantic element. If this is anchor, sub elements created as <code>span</code></td>
                    </tr>
                    <tr>
                        <td><code>title</code></td>
                        <td></td>
                        <td>Button title</td>
                    </tr>
                    <tr>
                        <td><code>subtitle</code></td>
                        <td></td>
                        <td>Button subtitle</td>
                    </tr>
                    <tr>
                        <td><code>href</code></td>
                        <td></td>
                        <td>Global target, when semantic element is anchor</td>
                    </tr>
                    <tr>
                        <td><code>hrefTitle</code></td>
                        <td></td>
                        <td>Target for title part</td>
                    </tr>
                    <tr>
                        <td><code>hrefSubtitle</code></td>
                        <td></td>
                        <td>Target for subtitle part</td>
                    </tr>
                    <tr>
                        <td><code>icon</code></td>
                        <td></td>
                        <td>Button icon</td>
                    </tr>
                    <tr>
                        <td><code>iconPrefix</code></td>
                        <td><code>mif-</code></td>
                        <td>Button icon prefix (example: for Font Awesome prefix is <code>fa fa-</code>)</td>
                    </tr>
                    <tr>
                        <td><code>image</code></td>
                        <td></td>
                        <td>Button image source</td>
                    </tr>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td></td>
                        <td>Button classes</td>
                    </tr>
                    <tr>
                        <td><code>clsTitle</code></td>
                        <td></td>
                        <td>Class for title and subtitle</td>
                    </tr>
                    <tr>
                        <td><code>clsSubtitle</code></td>
                        <td></td>
                        <td>Class for subtitle only</td>
                    </tr>
                    <tr>
                        <td><code>clsIcon</code></td>
                        <td></td>
                        <td>Class for button icon or image</td>
                    </tr>
                    <tr>
                        <td><code>onClick</code></td>
                        <td></td>
                        <td>onClick event handler</td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUse}/>
                <PrismCode language="js" code={codeUseAnchor}/>
                <PrismCode language="js" code={codeUseAnchor2}/>


                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}