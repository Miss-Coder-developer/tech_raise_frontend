import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router';
import MyStartup from '../pages/MyStartup';
import Metrics from '../pages/Metrics';
import Requests from '../pages/Requests';
import Marketplace from '../pages/Marketplace';
import Resources from '../pages/Resources';


const Main = () => {
    return (
        <main className="founder-main">
            <Switch>
                {/* <Redirect exact from="/" to="/my-startup" /> */}
                <Route exact path="/my-startup">
                    <MyStartup />
                </Route>
                <Route exact path="/metrics">
                    <Metrics />
                </Route>
                <Route exact path="/requests">
                    <Requests />
                </Route>
                <Route exact path="/marketplace">
                    <Marketplace />
                </Route>
                <Route exact path="/resources">
                    <Resources />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
