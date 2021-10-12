import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router';
import MyStartup from '../pages/MyStartup';
import Metrics from '../pages/Metrics';
import Requests from '../pages/Requests';
import Marketplace from '../pages/Marketplace';
import Resources from '../pages/Resources';
import Home from '../pages/Home';


const Main = () => {
    return (
        <main className="founder-main">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/my-startup">
                    <MyStartup />
                </Route>
                <Route path="/metrics">
                    <Metrics />
                </Route>
                <Route path="/requests">
                    <Requests />
                </Route>
                <Route path="/marketplace">
                    <Marketplace />
                </Route>
                <Route path="/resources">
                    <Resources />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
