import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router';
import ScrollToTop from './../../scrollToTop/ScrollToTop';
import MyStartup from '../myStartap/MyStartup';
import Metrics from '../metrics/Metrics';
import Requests from '../requests/Requests';
import Marketplace from '../marketplace/Marketplace';
import Resources from '../resources/Resources';
import Advisors from '../advisors/Advisors';
import Login from './../login/Login';
import SignUp from './../signUp/SignUp';
import Home from '../home/Home';
import NoMatch from '../NoMatch/NoMatch';
import SignUpStartup from '../signUpStartup/SignUpStartup';
import SignUpInvestor from '../signUpInvestor/SignUpInvestor';

const Main = () => {
    return (
        <main className="founder-main">
            <ScrollToTop />
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
                <Route path="/advisors">
                    <Advisors />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signUp">
                    <SignUp />
                </Route>
                <Route path="/signUpStartUp">
                    <SignUpStartup />
                </Route>
                <Route path="/signUpInvestor">
                    <SignUpInvestor />
                </Route>
                <Route component={NoMatch}/>
            </Switch>
        </main>
    );
};

export default Main;
