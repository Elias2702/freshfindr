import * as React from "react";
import {
    Map,
    InfoWindow,
    Marker,
    GoogleApiWrapper,
    // Circle,
} from "google-maps-react";
import StoreInfo from "./StoreInfo";
import StoreEval from "./StoreEval";
import MapButtons from "./mapButtons";
import Icon from "./assets/icon/placeholder-resize.png";
import ShopIcon from "../ressources/icones/shopping-cart.png";

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
    constructor(props) {
        super(props);
        this.state = {
            // state used with npm package for google maps : https://www.npmjs.com/package/google-maps-react
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            modalIsOpen: false,
            modalEvalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeModal = this.changeModal.bind(this);
        this.closeModalEval = this.closeModalEval.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    // afterOpenModal() {
    //     this.subtitle.style.color = "#f00";
    // }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    closeModalEval() {
        this.setState({modalEvalIsOpen: false});
    }

    changeModal() {
        this.setState({modalIsOpen: false});
        this.setState({modalEvalIsOpen: true});
    }

    // onMarkerClick = (props, marker) => {
    //     // to show box information when click on position
    //     this.setState({
    //         selectedPlace: props,
    //         activeMarker: marker,
    //         showingInfoWindow: true,
    //     });
    // };

    // closeInfoWindow = () => {
    //     this.setState({
    //         selectedPlace: {},
    //         activeMarker: null,
    //         showingInfoWindow: false,
    //     });
    // };

    render() {
        return (
            <>
                {/* <span class="dot"></span> */}
                <MapButtons
                    onListClick={this.props.displayTheList}
                    onSettingsClick={this.props.displaySettings}
                    isBlurred={this.props.blurred}
                />
                <div className={`MapContainer ${this.props.blurred}`}>
                    <Map
                        google={this.props.google}
                        zoom={15}
                        initialCenter={center}
                        style={style}
                        streetViewControl={false}
                        fullscreenControl={false}
                        mapTypeControl={false}
                        zoomControl={false}>
                        <StoreInfo
                            modalIsOpen={this.state.modalIsOpen}
                            closeModal={this.closeModal}
                            changeModal={this.changeModal}
                        />
                        <StoreEval
                            modalIsOpen={this.state.modalEvalIsOpen}
                            closeModal={this.closeEvalModal}
                        />
                        {/* <Circle // delete node_modules/google-maps-react and git clone in node modules : https://github.com/fullstackreact/google-maps-react.git
                            radius={800}
                            center={center}
                            onMouseover={() => console.log("mouseover")}
                            onClick={() => console.log("click")}
                            onMouseout={() => console.log("mouseout")}
                            strokeColor="#DF8419"
                            fillColor="#DF8419"
                            strokeWeight={1.5}
                            fillOpacity={0.3}
                        /> */}

                        <Marker
                            onClick={this.onMarkerClick}
                            name={"Freshfindr User"}
                            icon={Icon}
                        />
                        <Marker
                            title={"Carrefour Express"}
                            name={"Carrefour Express"}
                            position={{lat: 50.876928, lng: 4.700598}}
                            onClick={this.openModal}
                            icon={ShopIcon}
                        />

                        <Marker
                            title={"Carrefour Express"}
                            name={"Carrefour Express"}
                            position={{lat: 50.876249, lng: 4.711735}}
                            onClick={this.openModal}
                            icon={ShopIcon}
                        />

                        <Marker
                            title={"Carrefour Express"}
                            name={"Carrefour Express"}
                            position={{lat: 50.870968, lng: 4.704145}}
                            onClick={this.openModal}
                            icon={ShopIcon}
                        />

                        <Marker
                            title={"Carrefour Express"}
                            name={"Carrefour Express"}
                            position={{lat: 50.871026, lng: 4.691831}}
                            onClick={this.openModal}
                            icon={ShopIcon}
                        />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.closeInfoWindow}>
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
    /* eslint new-cap: [2, {capIsNewExceptions: ["M"]}]*/
    apiKey: "AIzaSyDalvpxv-7crRgGa3MNhZiWIClcM1urB2o",
})(MapContainer); // eslint-disable-line new-cap
