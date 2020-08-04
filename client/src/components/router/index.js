import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignUp from '../signup/index';
import LogIn from '../logIn/index';

function Routing() {
    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route> */}
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routing;