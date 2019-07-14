import React from "react";
import ReactDom from "react-dom";

import "../src/common/metro-common.css";
import "../src/colors/metro-colors.css";

import {Grid, Row, Cell} from "../src/components/grid/grid"

import Activity from "../src/components/activity/activity";
import "../src/components/activity/activity.css";

ReactDom.render(
    <Grid>
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
    </Grid>
    , document.getElementById("activities")
);
