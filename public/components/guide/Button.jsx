import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import {Adsense, Table, Button} from "../../../src";
import PrismCode from "../PrismCode";

export default class GuideButton extends React.Component {
    render(){
        const codeImport = `import {Button} from "metro4-react`;
        const codeDefaultUse = `
<Button title="Button">
<Button>Button</Button>
`;
        const codeAddIcon = `
<Button icon='rocket'/>
<Button icon='rocket' iconPrefix="fa fa-"/>
<Button image='images/location.png'/>
`;
        const codeAddBadge = `<Button icon="envelop" badge={10} clsBadge={'alert'}/>`;
        const codeSemanticUse = `<Button as='a' title='This is link' href='https://metroui.org.ua'/>`;

        const codeCLassesUse = `<Button title='Button' cls='alert' clsTitle='fg-yellow'/>`;

        return(
            <div>
                <h1>Push button</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className='table-border cell-border'>
                    <tr>
                        <td><code>as</code></td>
                        <td><code>button</code></td>
                        <td>Semantic element</td>
                    </tr>
                    <tr>
                        <td><code>title</code></td>
                        <td></td>
                        <td>Button title</td>
                    </tr>
                    <tr>
                        <td><code>badge</code></td>
                        <td></td>
                        <td>Badge in title</td>
                    </tr>
                    <tr>
                        <td><code>icon</code></td>
                        <td></td>
                        <td>Button icon from icon font</td>
                    </tr>
                    <tr>
                        <td><code>iconPrefix</code></td>
                        <td><code>mif-</code></td>
                        <td>Button icon prefix for icon from icon font</td>
                    </tr>
                    <tr>
                        <td><code>image</code></td>
                        <td></td>
                        <td>Source for button image</td>
                    </tr>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td></td>
                        <td>Button classes</td>
                    </tr>
                    <tr>
                        <td><code>clsTitle</code></td>
                        <td></td>
                        <td>Button class for title (when use prop title)</td>
                    </tr>
                    <tr>
                        <td><code>clsIcon</code></td>
                        <td></td>
                        <td>Button class for icon or image</td>
                    </tr>
                    <tr>
                        <td><code>clsBadge</code></td>
                        <td></td>
                        <td>Button class for badge</td>
                    </tr>
                </Table>

                <br/>
                <h3>Using</h3>

                <h5>Default</h5>
                <div className={'example'}>
                    <Button title={'Button'}/>
                    &nbsp;<Button>Button</Button>
                </div>
                <PrismCode language="jsx" code={codeDefaultUse}/>

                <h5>Create as anchor</h5>
                <div className={'example'}>
                    <Button as='a' title='This is link' href='https://metroui.org.ua'/>
                </div>
                <PrismCode language="jsx" code={codeSemanticUse}/>

                <h5>Add icon</h5>
                <div className={'example'}>
                    <Button icon={'rocket'}/>
                    &nbsp;<Button icon='rocket' iconPrefix="fa fa-"/>
                    &nbsp;<Button image='../images/location.png'/>
                </div>
                <PrismCode language="jsx" code={codeAddIcon}/>

                <h5>Add badge</h5>
                <div className={'example'}>
                    <Button icon="envelop" badge={10} clsBadge={'alert'}/>
                </div>
                <PrismCode language="jsx" code={codeAddBadge}/>

                <h5>Use classes</h5>
                <div className='example'>
                    <Button title='Button' cls='alert' clsTitle='fg-yellow'/>
                </div>
                <PrismCode language="jsx" code={codeCLassesUse}/>

            </div>
        )
    }
}