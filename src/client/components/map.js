import * as React from "react";
import MapSideBar from "./mapSideBar";

export default class Map extends React.Component {

    render(){
        return(
            <div className="mapContainer">
                <MapSideBar/>
            </div>
        );
    }
}
