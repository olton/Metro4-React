import "../src/common/common.less";
import "../src/colors/colors.less";
import "../src/icons/mif.less";
import {Utils} from "../src/common/common";

import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Guide from "./components/Guide";
import Support from "./components/Support";
import Demo from "./components/Demo";

import "./css/index.less";

window.SITE_MODE_DEV = Utils.isLocalhost() ? 'on' : 'off';

render (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/guide' component={Guide}/>
            <Route path='/support' component={Support}/>
            <Route path='/demo' component={Demo}/>
            <Route component={NotFound} />
        </Switch>
    </Router>,
    document.getElementById("root")
);