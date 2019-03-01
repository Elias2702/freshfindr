/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";

import Login from "./components/login";

import "./scss/app.scss";

ReactDOM.render(<Login />, document.querySelector("#app"));
