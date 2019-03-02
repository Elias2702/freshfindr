import * as React from "react";
import MapContainer from "./map";
import SearchBar from "./searchbar";

export default class Freshfindr extends React.Component {
    render() {
        return (
            <div className="container">
                <MapContainer />
                <SearchBar />
            </div>
        );
    }
}
