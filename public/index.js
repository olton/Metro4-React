import React from "react";
import ReactDom from "react-dom";

import "../src/common/metro-common.less";
import "../src/colors/metro-colors.less";
import "../src/icons/mif.less";

import "@fortawesome/fontawesome-free/css/all.css";

import {
    Container,
    Icon,
    Badge,
    Grid, Row, Cell,
    Activity,
    Accordion,
    AccordionFrame,
    Checkbox,
    Radio,
    Switch,
    BottomNav, BottomNavItem,
    Button,
    CommandButton,
    ImageButton,
    Shortcut,
    Breadcrumbs, BreadcrumbsItem,
    InfoButton,
    Select,
    Input
} from "../src/index";

ReactDom.render(
    <Container>
        <Grid>
            <h2 className="text-light">&lt;Icon /&gt;</h2>
            <Row>
                <Cell cls="cell-md-6">
                    <h5>Use Metro Icons Font</h5>
                    <Icon name="rocket"/>
                    <Icon name="rocket" cls="fg-red" size="2x"/>
                    <Icon name="rocket" cls="fg-green" size="3x"/>
                    <Icon name="rocket" cls="fg-blue" size="4x"/>
                    <Icon name="rocket" cls="fg-orange" size="5x"/>
                </Cell>
                <Cell cls="cell-md-6">
                    <h5>Use Font Awesome</h5>
                    <Icon name="rocket" prefix="fas fa-"/>
                    <Icon name="rocket" prefix="fas fa-" cls="fg-red" size="2x"/>
                    <Icon name="rocket" prefix="fas fa-" cls="fg-green" size="3x"/>
                    <Icon name="rocket" prefix="fas fa-" cls="fg-blue" size="4x"/>
                    <Icon name="rocket" prefix="fas fa-" cls="fg-orange" size="5x"/>
                </Cell>
            </Row>

            <h2 className="text-light">&lt;Activity /&gt;</h2>
            <Row>
                <Cell cls="cell-md-4 bg-darkGray p-2">
                    <Activity type="ring" style="light" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="ring" style="dark" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="ring" style="color" cls="mx-auto"/>
                </Cell>
            </Row>

            <Row>
                <Cell cls="cell-md-4 bg-darkGray p-2">
                    <Activity type="metro" style="light" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="metro" style="dark" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="metro" style="color" cls="mx-auto"/>
                </Cell>
            </Row>

            <Row>
                <Cell cls="cell-md-4 bg-darkGray p-2">
                    <Activity type="square" style="light" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="square" style="dark" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="square" style="color" cls="mx-auto"/>
                </Cell>
            </Row>

            <Row>
                <Cell cls="cell-md-4 bg-darkGray p-2">
                    <Activity type="cycle" style="light" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="cycle" style="dark" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="cycle" style="color" cls="mx-auto"/>
                </Cell>
            </Row>

            <Row>
                <Cell cls="cell-md-4 bg-darkGray p-2">
                    <Activity type="simple" style="light" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="simple" style="dark" cls="mx-auto"/>
                </Cell>
                <Cell cls="cell-md-4 p-2">
                    <Activity type="simple" style="color" cls="mx-auto"/>
                </Cell>
            </Row>

            <h2 className="text-light">&lt;Accordion /&gt;</h2>
            <Row>
                <Cell cls="w-100">
                    <Accordion material={false} oneFrame={true} oneFrameOpen={false} clsFrameContent="p-4" onFrameBeforeClose={()=>true}>
                        <AccordionFrame title="Head 1" open>
                            Season eight tablespoons of blueberries in four pounds of fish sauce.
                            Season eight tablespoons of blueberries in four pounds of fish sauce.
                            Season eight tablespoons of blueberries in four pounds of fish sauce.
                        </AccordionFrame>
                        <AccordionFrame title="Head 2">
                            Dogma is the only samadhi, the only guarantee of fear.
                            Dogma is the only samadhi, the only guarantee of fear.
                            Dogma is the only samadhi, the only guarantee of fear.
                        </AccordionFrame>
                        <AccordionFrame title="Head 3">
                            None of these coordinates will be lost in voyages like devastations in mysteries
                            None of these coordinates will be lost in voyages like devastations in mysteries
                            None of these coordinates will be lost in voyages like devastations in mysteries

                            <h2>Nested accordion</h2>
                            <Accordion material={true} oneFrame={true} clsFrameContent="p-4">
                                <AccordionFrame title="Head 1" open>
                                    Season eight tablespoons of blueberries in four pounds of fish sauce.
                                    Season eight tablespoons of blueberries in four pounds of fish sauce.
                                    Season eight tablespoons of blueberries in four pounds of fish sauce.
                                </AccordionFrame>
                                <AccordionFrame title="Head 2">
                                    Dogma is the only samadhi, the only guarantee of fear.
                                    Dogma is the only samadhi, the only guarantee of fear.
                                    Dogma is the only samadhi, the only guarantee of fear.
                                </AccordionFrame>
                                <AccordionFrame title="Head 3">
                                    None of these coordinates will be lost in voyages like devastations in mysteries
                                    None of these coordinates will be lost in voyages like devastations in mysteries
                                    None of these coordinates will be lost in voyages like devastations in mysteries
                                </AccordionFrame>
                            </Accordion>

                        </AccordionFrame>
                    </Accordion>
                </Cell>
            </Row>

            <h2 className="text-light">&lt;Checkbox/&gt;, &lt;Radio/&gt;, &lt;Switch/&gt;</h2>
            <Row>
                <Cell cls="cell-md-4">
                    <div>
                        <Checkbox name="check1"/>
                        <Checkbox name="check2" checked/>
                        <Checkbox name="check3" disabled/>
                        <Checkbox name="check4" checked disabled/>
                        <Checkbox name="check5" caption="my checkbox"/>
                    </div>
                    <div>
                        <Checkbox name="check1" style2={true}/>
                        <Checkbox name="check2" checked style2={true}/>
                        <Checkbox name="check3" disabled style2={true}/>
                        <Checkbox name="check4" checked disabled style2={true}/>
                        <Checkbox name="check5" caption="my checkbox" style2={true}/>
                    </div>
                </Cell>
                <Cell cls="cell-md-4">
                    <div>
                        <Radio name="radio1_1" value={1}/>
                        <Radio name="radio1_1" value={2} checked/>
                        <Radio name="radio1_2" disabled/>
                        <Radio name="radio1_3" checked disabled/>
                        <Radio name="radio1_4" caption="my radio"/>
                    </div>
                    <div>
                        <Radio name="radio2_1" checked style2={true}/>
                        <Radio name="radio2_1" style2={true}/>
                        <Radio name="radio2_2" disabled style2={true}/>
                        <Radio name="radio2_3" checked disabled style2={true}/>
                        <Radio name="radio2_4" caption="my radio" style2={true}/>
                    </div>
                </Cell>
                <Cell cls="cell-md-4">
                    <div>
                        <Switch name="switch1"/>
                        <Switch name="switch2" checked/>
                        <Switch name="switch3" disabled/>
                        <Switch name="switch4" checked disabled/>
                    </div>
                    <div>
                        <Switch name="switch1" material={true}/>
                        <Switch name="switch2" checked material={true}/>
                        <Switch name="switch3" disabled material={true}/>
                        <Switch name="switch4" checked disabled material={true}/>
                    </div>
                </Cell>
            </Row>

            <h2 className="text-light">&lt;BottomNav /&gt;</h2>
            <Row>
                <Cell cls="cell-md-4 bg-light" style={{height: 300}}>
                    <BottomNav cls="pos-absolute">
                        <BottomNavItem label="Button1" icon="rocket"/>
                        <BottomNavItem label="Button2" icon="apps"/>
                        <BottomNavItem label="Button3" icon="windows"/>
                    </BottomNav>
                </Cell>
                <Cell cls="cell-md-4"/>
                <Cell cls="cell-md-4"/>
            </Row>

            <h2 className="text-light">Buttons</h2>
            <h4 className="mt-0">&lt;Button/&gt;</h4>
            <Row>
                <Cell>
                    <Button title='Button'/>
                    &nbsp;<Button cls="alert" title='Button'/>
                    &nbsp;<Button cls="info" title='Button' icon="rocket"/>
                    &nbsp;<Button cls="warning" icon="bell"/>
                    &nbsp;<Button as="a" cls="secondary" title="Link as Button" href="#"/>
                    &nbsp;<Button as="span" cls="primary" title="Span as Button"/>
                    &nbsp;<Button title="Flat Button" isFlat={true}/>
                    &nbsp;<Button icon="envelop"><Badge cls="alert" value={10}/></Button>
                </Cell>
            </Row>

            <h4>&lt;CommandButton/&gt;</h4>
            <Row>
                <Cell>
                    <CommandButton icon="share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                    &nbsp;<CommandButton icon="share" title="Yes, share and connect" subtitle="Use this option for home or work" cls="icon-right info"/>
                    &nbsp;<CommandButton as="a" icon="share" title="Yes, share and connect" subtitle="Use this option for home or work" cls="icon-right info"/>
                </Cell>
            </Row>

            <h4>&lt;ImageButton/&gt;</h4>
            <Row>
                <Cell>
                    <ImageButton icon="share" title="Share your connect"/>
                    &nbsp;<ImageButton icon="share" title="Share your connect" cls="icon-right info"/>
                    &nbsp;<ImageButton as="a" icon="share" title="Share your connect" />
                    &nbsp;<ImageButton as="a" icon="share" title="Share your connect" cls="icon-right"/>
                </Cell>
            </Row>

            <h4>&lt;Shortcut/&gt;</h4>
            <Row>
                <Cell>
                    <Shortcut icon="rocket" title="Rocket"/>
                    &nbsp;<Shortcut icon="share" title="Share" cls="info"/>
                    &nbsp;<Shortcut icon="share" cls="warning no-caption"/>
                    &nbsp;<Shortcut icon="windows" cls="alert" title="Windows" tag={10}/>
                    &nbsp;<Shortcut as="a" href="#" icon="windows" cls="success" title="Anchor" tag={10}/>
                </Cell>
            </Row>

            <h4>&lt;Breadcrumbs/&gt;</h4>
            <Row>
                <Cell>
                    <Breadcrumbs cls="mt-0">
                        <BreadcrumbsItem>Home</BreadcrumbsItem>
                        <BreadcrumbsItem>Products</BreadcrumbsItem>
                        <BreadcrumbsItem>Download</BreadcrumbsItem>
                        <BreadcrumbsItem cls="fg-red">Windows 10</BreadcrumbsItem>
                    </Breadcrumbs>
                </Cell>
            </Row>

            <h4>&lt;InfoButton/&gt;</h4>
            <Row>
                <Cell>
                    <InfoButton title="Star" subtitle="6,208" icon="star-full" />
                    &nbsp;<InfoButton title="Star" subtitle="6,208" icon="star-full" cls="alert" />
                    &nbsp;<InfoButton title="Star" subtitle="6,208" icon="star-full" cls="info rounded" />
                    &nbsp;<InfoButton as="a" title="This is a link" subtitle="6,208" icon="star-full" cls="warning rounded" href="https://metroui.org.ua"/>
                </Cell>
            </Row>


            <h4>&lt;Input/&gt;</h4>
            <Row>
                <Cell cls="cell-md-4">
                    <Input placeholder='Input value' value={123}/>
                </Cell>
                <Cell cls="cell-md-4">
                    <Input placeholder='Enter a password' type='password'/>
                </Cell>
                <Cell cls="cell-md-4">
                    <Input placeholder='Search...' search={true} onSearch={ val => console.log(val) } />
                </Cell>
            </Row>
            <br/>
            <Row>
                <Cell cls="cell-md-4">
                    <Input placeholder='Input value' history={true}/>
                </Cell>
                <Cell cls="cell-md-4">
                </Cell>
                <Cell cls="cell-md-4">
                </Cell>
            </Row>
            <br/>
            <Row>
                <Cell cls="cell-md-3">
                    <Input value='Input value' prepend='Prepend:'/>
                </Cell>
                <Cell cls="cell-md-3">
                    <Input value='Input value' prepend={<Icon name='rocket'/>}/>
                </Cell>
                <Cell cls="cell-md-3">
                    <Input value='Input value' append='%'/>
                </Cell>
                <Cell cls="cell-md-3">
                    <Input value='Input value' append={<Icon name='rocket'/>}/>
                </Cell>
            </Row>

            <h4>&lt;Select/&gt;</h4>
            <Row>
                <Cell cls="cell-md-6">
                    <Select>
                        <option value={1}>Value 1</option>
                        <option value={2}>Value 2</option>
                        <option value={3}>Value 3</option>
                    </Select>
                </Cell>
                <Cell cls="cell-md-6">
                </Cell>
            </Row>


        </Grid>
    </Container>
    , document.getElementById("mount")
);
