import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Guide from "./components/Guide";
import Support from "./components/Support";

import "../src/common/metro-common.less";
import "../src/colors/metro-colors.less";
import "../src/icons/mif.less";
import "./css/index.less";

render (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/guide' component={Guide}/>
            <Route path='/support' component={Support}/>
            <Route component={NotFound} />
        </Switch>
    </Router>,
    document.getElementById("root")
);