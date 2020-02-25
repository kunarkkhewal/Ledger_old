import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";

const Routes = () => {
    return (
        <Router>
            <main>
                <Route path="/home" component={Home} />
            </main>
        </Router>
    );
};

export default Routes;
