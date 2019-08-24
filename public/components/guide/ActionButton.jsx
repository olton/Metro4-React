import React from "react";
import {ActionButton, Adsense, Row, Cell, MultiAction, MultiActionItem, Table} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import Defs, {tablePropsHeader} from "../Defs";

export default class GuideActionButton extends React.Component {
    render(){
        const codeImportAction = `import {ActionButton} from "metro4-react";`;
        const codeImportMultiAction = `import {MultiAction, MultiActionItem} from "metro4-react";`;
        const codeUseActionButton = `
            <ActionButton icon="star-full" />
            <ActionButton icon="star-full" variant="secondary"/>
            <ActionButton icon="rocket" className="alert" />
            <ActionButton icon="rocket" className="info" variant="secondary" clsIcon="fg-yellow"/>
        `;
        const codeUseMultiAction = `
            <MultiAction icon="star-full" cls="alert" drop={'right'}>
                <MultiActionItem icon="home" />
                <MultiActionItem icon="rocket" onClick={...}/>
                <MultiActionItem icon="adb" onClick={...}/>
            </MultiAction>
        `;


        return(
            <div>
                <h1>Action button</h1>

                <p className={'text-leader2'}>
                    Need material action button? Use Metro 4 &lt;ActionButton/&gt; component.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    Metro 4 include two type action button: <code>ActionButton</code> for single action, and <code>MultiAction</code>.
                </p>

                <br/>
                <h3>Importing ActionButton</h3>
                <PrismCode language="js" code={codeImportAction}/>

                <br/>
                <h4>Props</h4>
                <Table className='table-border cell-border' head={tablePropsHeader}>
                    <tbody>
                    <tr>
                        <td><code>as</code></td>
                        <td><code>button</code></td>
                        <td>Semantic element</td>
                    </tr>
                    <tr>
                        <td><code>variant</code></td>
                        <td><code>default</code></td>
                        <td>Button size, second value <code>secondary</code></td>
                    </tr>
                    <tr>
                        <td><code>icon</code></td>
                        <td></td>
                        <td>Button icon</td>
                    </tr>
                    <tr>
                        <td><code>iconPrefix</code></td>
                        <td></td>
                        <td>Button icon prefix</td>
                    </tr>
                    <tr>
                        <td><code>image</code></td>
                        <td></td>
                        <td>Button image</td>
                    </tr>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td></td>
                        <td>Button additional classes</td>
                    </tr>
                    <tr>
                        <td><code>clsIcon</code></td>
                        <td></td>
                        <td>Button classes for icon</td>
                    </tr>
                    <tr>
                        <td><code>active</code></td>
                        <td>false</td>
                        <td>Button state</td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <h4>Using</h4>
                <Example>
                    <ActionButton icon="star-full" />
                    &nbsp;<ActionButton icon="star-full" variant="secondary"/>
                    &nbsp;<ActionButton icon="rocket" className="alert" />
                    &nbsp;<ActionButton icon="rocket" className="info" variant="secondary" clsIcon="fg-yellow"/>
                </Example>
                <PrismCode language="js" code={codeUseActionButton}/>

                <br/>
                <h3>Importing MultiAction</h3>
                <PrismCode language="js" code={codeImportMultiAction}/>

                <br/>
                <h4>Props for MultiAction</h4>
                <p>Same as for <code>ActionButton</code> and:</p>
                <Table className='table-border cell-border' head={tablePropsHeader}>
                    <tbody>
                    <tr>
                        <td><code>drop</code></td>
                        <td><code>up</code></td>
                        <td>Items drop direction: up, down, left, right</td>
                    </tr>
                    <tr>
                        <td><code>itemClickClose</code></td>
                        <td><code>true</code></td>
                        <td>Close items after user click on the item</td>
                    </tr>
                    <tr>
                        <td><code>onClick</code></td>
                        <td></td>
                        <td>Callback for click event</td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <h4>Props for MultiActionItem</h4>
                <Table className='table-border cell-border' head={tablePropsHeader}>
                    <tbody>
                    <tr>
                        <td><code>icon</code></td>
                        <td></td>
                        <td>Button icon</td>
                    </tr>
                    <tr>
                        <td><code>iconPrefix</code></td>
                        <td></td>
                        <td>Button icon prefix</td>
                    </tr>
                    <tr>
                        <td><code>image</code></td>
                        <td></td>
                        <td>Button image</td>
                    </tr>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td></td>
                        <td>Button additional classes</td>
                    </tr>
                    <tr>
                        <td><code>onClick</code></td>
                        <td></td>
                        <td>Callback for click event </td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <h4>Using</h4>
                <Example>
                    <Row>
                        <Cell cls='cell-md-3'>
                            <MultiAction icon="star-full" cls="alert" drop={'right'}>
                                <MultiActionItem icon="home" />
                                <MultiActionItem icon="rocket" onClick={() => alert('rocket')}/>
                                <MultiActionItem icon="adb" onClick={() => alert('adb')}/>
                            </MultiAction>
                        </Cell>
                        <Cell cls='cell-md-3 d-flex flex-justify-center'>
                            <MultiAction icon="star-full" cls="alert" drop={'up'}>
                                <MultiActionItem icon="home" onClick={() => alert('home')}/>
                                <MultiActionItem icon="rocket" onClick={() => alert('rocket')}/>
                                <MultiActionItem icon="adb" onClick={() => alert('adb')}/>
                            </MultiAction>
                        </Cell>
                        <Cell cls='cell-md-3 d-flex flex-justify-center'>
                            <MultiAction icon="star-full" cls="alert" drop={'bottom'}>
                                <MultiActionItem icon="home" onClick={() => alert('home')}/>
                                <MultiActionItem icon="rocket" onClick={() => alert('rocket')}/>
                                <MultiActionItem icon="adb" onClick={() => alert('adb')}/>
                            </MultiAction>
                        </Cell>
                        <Cell cls='cell-md-3 d-flex flex-justify-end'>
                            <MultiAction icon="star-full" cls="alert" drop={'left'}>
                                <MultiActionItem icon="home" onClick={() => alert('home')}/>
                                <MultiActionItem icon="rocket" onClick={() => alert('rocket')}/>
                                <MultiActionItem icon="adb" onClick={() => alert('adb')}/>
                            </MultiAction>
                        </Cell>
                    </Row>
                </Example>

                <PrismCode language="js" code={codeUseMultiAction}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </div>
        )
    }
}