import React from "react";
import ReactDom from "react-dom";

import "../src/common/metro-common.less";
import "../src/colors/metro-colors.less";

import {
    Icon,
    Grid, Row, Cell,
    Activity,
    Accordion,
    AccordionFrame,
    Checkbox,
    Radio,
    Switch,
    BottomNav, BottomNavItem,
    Button,
    FaltButton,
    CommandButton,
    ImageButton,
} from "../src/index";

ReactDom.render(
    <Grid>
        <h2 className="text-light">Activities</h2>
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

        <h2 className="text-light">Accordion</h2>
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

        <h2 className="text-light">Checkbox, radio, switch</h2>
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

        <h2 className="text-light">BottomNav</h2>
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
        <h4 className="mt-0">Push button</h4>
        <Row>
            <Cell>
                <Button>Button</Button>
                &nbsp;<Button cls="alert">Button</Button>
                &nbsp;<Button cls="warning">Button</Button>
                &nbsp;<Button cls="success">Button</Button>
                &nbsp;<Button cls="info">Button</Button>
            </Cell>
        </Row>

        <h4>Command button</h4>
        <Row>
            <Cell>
                <CommandButton icon="share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                &nbsp;<CommandButton icon="share" title="Yes, share and connect" subtitle="Use this option for home or work" cls="icon-right info"/>
            </Cell>
        </Row>

        <h4>Image button</h4>
        <Row>
            <Cell>
                <ImageButton icon="share" title="Share your connect"/>
                &nbsp;<ImageButton icon="share" title="Share your connect" cls="icon-right info"/>
            </Cell>
        </Row>


    </Grid>
    , document.getElementById("mount")
);
