import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './Components/Main';

const Routes = () => {
    return (
        <Router>
            <main>
                <Route path="/" component={Main} />
            </main>
        </Router>
    );
};

export default Routes;
