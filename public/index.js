import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Common, Colors, Icons} from "../src"
import {Utils} from "../src/routines";

import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Guide from "./components/Guide";
import Support from "./components/Support";
import Demo from "./components/Demo";
import Prism from "prismjs";
import Test from "./components/Test";

import "./css/index.less";

window.METRO_OFF_SITE = 'https://metroui.org.ua/';
window.SITE_MODE_DEV = Utils.isLocalhost() ? 'on' : 'off';

render (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/guide' component={Guide}/>
            <Route path='/support' component={Support}/>
            <Route path='/demo' component={Demo}/>
            <Route path='/test' component={Test}/>
            <Route component={NotFound} />
        </Switch>
    </Router>,
    document.getElementById("root")
);

setTimeout( () => Prism.highlightAll(), 0 );