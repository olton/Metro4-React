import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import {
    Color,
    Container,
    Icon,
    Badge,
    Grid, Row, Cell,
    Activity, ActivityModal,
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
    Input,
    ActionButton, MultiAction, MultiActionItem,
    Tag,
    ToolBar, ToolButton,
    ClickOutside,
    Gravatar, Adsense,
    Dialog, Pagination, Textarea, InputFile,
    Dropdown, Modal, AppBar, AppBarMenu, AppBarItem, Collapse, ButtonGroup,
    Tabs, Tab, SplitButton, Progress, Panel,
    Rating, HtmlContainer, SelectColor, SelectIcon
} from "../../src/index";

import Example from "./Example";

export default class Test extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

    onDrawItem = item => {
        return "H-"+item;
    };

    render(){

        const selectOptions = {
            99358: 99358
        };

        const serviceCodes = [99351, 99352, 99353, 99354];
        const options = serviceCodes.map((el, index) => {
            return (
                <option value={el} key={index}>H-{el}</option>
            )
        });
        const options2 = serviceCodes.map((el, index) => {
            const name = `H-${el}`;
            return (
                <option value={el} key={index}>{name}</option>
            )
        });

        return (
            <Container>
                <h1>Test any</h1>

                <Example>
                    <Row>
                        <Cell className="cell-md-4">
                            <Select source={selectOptions} onDrawItem={this.onDrawItem} onDrawCaption={this.onDrawItem}/>
                        </Cell>
                        <Cell className="cell-md-4">
                            <Select>
                                {options}
                            </Select>
                        </Cell>
                        <Cell className="cell-md-4">
                            <Select>
                                {options2}
                            </Select>
                        </Cell>
                    </Row>
                </Example>
            </Container>
        )
    }
}