import * as React from "react";
import MapContainer from "./map";

export default class Freshfindr extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>{"Freshfindr Map"}</h1>
                <hr />
                <MapContainer />
            </div>
        );
    }
}
