import React from "react";
import ReactDom from "react-dom";

import "../src/common/metro-common.less";
import "../src/colors/metro-colors.less";

import {Grid, Row, Cell} from "../src/components/grid/grid.jsx"

import Activity from "../src/components/activity/activity.jsx";

import Accordion from "../src/components/accordion/accordion.jsx";
import AccordionFrame from "../src/components/accordion/frame.jsx";

import Checkbox from "../src/components/checkbox/checkbox.jsx";
import Radio from "../src/components/radio/radio.jsx";
import Switch from "../src/components/switch/switch.jsx";

ReactDom.render(
    <Grid>
        <h1>Activities</h1>
        <Row>
            <Cell dataCls="cell-md-4 bg-darkGray p-2">
                <Activity dataType="ring" dataStyle="light" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="ring" dataStyle="dark" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="ring" dataStyle="color" dataCls="mx-auto"/>
            </Cell>
        </Row>

        <Row>
            <Cell dataCls="cell-md-4 bg-darkGray p-2">
                <Activity dataType="metro" dataStyle="light" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="metro" dataStyle="dark" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="metro" dataStyle="color" dataCls="mx-auto"/>
            </Cell>
        </Row>

        <Row>
            <Cell dataCls="cell-md-4 bg-darkGray p-2">
                <Activity dataType="square" dataStyle="light" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="square" dataStyle="dark" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="square" dataStyle="color" dataCls="mx-auto"/>
            </Cell>
        </Row>

        <Row>
            <Cell dataCls="cell-md-4 bg-darkGray p-2">
                <Activity dataType="cycle" dataStyle="light" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="cycle" dataStyle="dark" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="cycle" dataStyle="color" dataCls="mx-auto"/>
            </Cell>
        </Row>

        <Row>
            <Cell dataCls="cell-md-4 bg-darkGray p-2">
                <Activity dataType="simple" dataStyle="light" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="simple" dataStyle="dark" dataCls="mx-auto"/>
            </Cell>
            <Cell dataCls="cell-md-4 p-2">
                <Activity dataType="simple" dataStyle="color" dataCls="mx-auto"/>
            </Cell>
        </Row>

        <h1>Accordion</h1>
        <Row>
            <Cell dataCls="w-100">
                <Accordion dataMaterial={false} dataOneFrame={false} dataClsFrameContent="p-4">
                    <AccordionFrame dataTitle="Head 1" open>
                        Season eight tablespoons of blueberries in four pounds of fish sauce.
                        Season eight tablespoons of blueberries in four pounds of fish sauce.
                        Season eight tablespoons of blueberries in four pounds of fish sauce.
                    </AccordionFrame>
                    <AccordionFrame dataTitle="Head 2">
                        Dogma is the only samadhi, the only guarantee of fear.
                        Dogma is the only samadhi, the only guarantee of fear.
                        Dogma is the only samadhi, the only guarantee of fear.
                    </AccordionFrame>
                    <AccordionFrame dataTitle="Head 3">
                        None of these coordinates will be lost in voyages like devastations in mysteries
                        None of these coordinates will be lost in voyages like devastations in mysteries
                        None of these coordinates will be lost in voyages like devastations in mysteries

                        <h3>Nested accordion</h3>
                        <Accordion dataMaterial={true} dataOneFrame={true} dataClsFrameContent="p-4" dataClsAccordion="border bd-default" dataClsFrameHeading="bg-light">
                            <AccordionFrame dataTitle="Head 1" open>
                                Season eight tablespoons of blueberries in four pounds of fish sauce.
                                Season eight tablespoons of blueberries in four pounds of fish sauce.
                                Season eight tablespoons of blueberries in four pounds of fish sauce.
                            </AccordionFrame>
                            <AccordionFrame dataTitle="Head 2">
                                Dogma is the only samadhi, the only guarantee of fear.
                                Dogma is the only samadhi, the only guarantee of fear.
                                Dogma is the only samadhi, the only guarantee of fear.
                            </AccordionFrame>
                            <AccordionFrame dataTitle="Head 3">
                                None of these coordinates will be lost in voyages like devastations in mysteries
                                None of these coordinates will be lost in voyages like devastations in mysteries
                                None of these coordinates will be lost in voyages like devastations in mysteries
                            </AccordionFrame>
                        </Accordion>

                    </AccordionFrame>
                </Accordion>
            </Cell>
        </Row>

        <h1>Checkbox, radio, switch</h1>
        <Row>
            <Cell dataCls="cell-md-4">
                <div>
                    <Checkbox name="check1"/>
                    <Checkbox name="check2" checked/>
                    <Checkbox name="check3" disabled/>
                    <Checkbox name="check4" checked disabled/>
                    <Checkbox name="check5" dataCaption="my checkbox"/>
                </div>
                <div>
                    <Checkbox name="check1" dataStyle={2}/>
                    <Checkbox name="check2" checked dataStyle={2}/>
                    <Checkbox name="check3" disabled dataStyle={2}/>
                    <Checkbox name="check4" checked disabled dataStyle={2}/>
                    <Checkbox name="check5" dataCaption="my checkbox" dataStyle={2}/>
                </div>
            </Cell>
            <Cell dataCls="cell-md-4">
                <div>
                    <Radio name="radio1_1" value={1}/>
                    <Radio name="radio1_1" value={2} checked/>
                    <Radio name="radio1_2" disabled/>
                    <Radio name="radio1_3" checked disabled/>
                    <Radio name="radio1_4" dataCaption="my radio"/>
                </div>
                <div>
                    <Radio name="radio2_1" checked dataStyle={2}/>
                    <Radio name="radio2_1" dataStyle={2}/>
                    <Radio name="radio2_2" disabled dataStyle={2}/>
                    <Radio name="radio2_3" checked disabled dataStyle={2}/>
                    <Radio name="radio2_4" dataCaption="my radio" dataStyle={2}/>
                </div>
            </Cell>
            <Cell dataCls="cell-md-4">
                <div>
                    <Switch name="switch1"/>
                    <Switch name="switch2" checked/>
                    <Switch name="switch3" disabled/>
                    <Switch name="switch4" checked disabled/>
                </div>
                <div>
                    <Switch name="switch1" dataMaterial={true}/>
                    <Switch name="switch2" checked dataMaterial={true}/>
                    <Switch name="switch3" disabled dataMaterial={true}/>
                    <Switch name="switch4" checked disabled dataMaterial={true}/>
                </div>
            </Cell>
        </Row>
    </Grid>
    , document.getElementById("mount")
);
