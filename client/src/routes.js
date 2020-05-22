import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Main from './Components/Main';
import LoginPage from './Components/LoginPage';
import Signup from './Components/SignupPage';

const Routes = () => {
    return (
        <Router>
            <main>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/signup" component={Signup} />
                    {/* <Route exact path="/home" component={Main} /> */}
                    <PrivateRoute
                        path={'/home'}
                        component={Main}
                    />
                    <Redirect from='*' to='/' />
                </Switch>
            </main>
        </Router>
    );
};

export default Routes;

const PrivateRoute = ({ component: Component, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={(props) => localStorage.getItem("token") ? <Component {...props} /> : <Redirect to={'/'} />}
        />
    )
}
