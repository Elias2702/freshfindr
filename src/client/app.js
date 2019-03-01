/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";

import Freshfindr from "./components/freshfindr";

import "./scss/app.scss";

ReactDOM.render(<Freshfindr />, document.querySelector("#app"));
