import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import "./scss/app.scss";
import Freshfindr from "./components/freshfindr";
import Login from "./components/login";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Freshfindr} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        );
    }
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app"),
);
