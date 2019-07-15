import React from "react";
import ReactDom from "react-dom";

import "../src/common/metro-common.less";
import "../src/colors/metro-colors.less";

import {Grid, Row, Cell} from "../src/components/grid/grid.jsx"

import Activity from "../src/components/activity/activity.jsx";

import Accordion from "../src/components/accordion/accordion.jsx";
import AccordionFrame from "../src/components/accordion/frame.jsx";

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
                    </AccordionFrame>
                </Accordion>
            </Cell>
        </Row>
    </Grid>
    , document.getElementById("mount")
);
