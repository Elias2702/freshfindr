import * as React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";

const style = {
    // style of the map
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    margin: "0 auto",
    position: "absolute",
};

let center = {
    // variable to keep position when navigator.geolocation is  on success
    lat: "",
    lng: "",
};

const error = err => {
    // error message when navigator.geolocation is on error
    console.warn(`ERREUR (${err.code}): ${err.message}`);
};
const success = pos => {
    // when success on getCurrentPosition, we store lat & lng in center variable
    center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
    };
};

navigator.geolocation.getCurrentPosition(success, error); // ask to the user if he allow the geolocalisation

export class MapContainer extends React.Component {
    state = {
        // state used with npm package for google maps : https://www.npmjs.com/package/google-maps-react
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker) => {
        // to show box information when click on position
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });
    };

    render() {
        return (
            <>
                <label htmlFor="site-search" />
                <input
                    type="search"
                    className="fresh_search"
                    name="q"
                    aria-label="Search your product"
                />
                <div className="MapContainer">
                    <Map
                        google={this.props.google}
                        zoom={15}
                        initialCenter={center}
                        style={style}>
                        <Marker
                            onClick={this.onMarkerClick}
                            name={"Freshfindr User"}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDalvpxv-7crRgGa3MNhZiWIClcM1urB2o",
})(MapContainer); // eslint-disable-line new-cap
