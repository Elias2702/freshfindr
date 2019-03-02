import * as React from "react";
import MapContainer from "./map";
import SearchBar from "./searchbar";

export default class Freshfindr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayList: false,
            displaySearchbar: false,
        };
        this.displayTheList = this.displayTheList.bind(this);
        this.displaySettings = this.displaySettings.bind(this);
        this.displaySearchbar = this.displaySearchbar.bind(this);
    }

    displayTheList = () => {
        this.setState({
            displayList: true,
        });
    };

    displaySettings = () => {
        this.setState({
            displayList: false,
            displaySettings: true,
        });
    };

    displaySearchbar = () => {
        this.setState({
            displaySearchbar: true,
        });
    };

    render() {
        let isBlurred = "";

        if (this.state.displaySearchbar) {
            isBlurred = "blurred";
        } else {
            isBlurred = "";
        }

        return (
            <div className="container">
                <MapContainer
                    displayTheList={this.displayTheList}
                    displaySettings={this.displaySettings}
                    blurred={isBlurred}
                />
                <SearchBar displaySearchbar={this.displaySearchbar} />
            </div>
        );
    }
}
