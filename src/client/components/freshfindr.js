import * as React from "react";
import MapContainer from "./map";
import SearchBar from "./searchbar";

export default class Freshfindr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayList: false,
        };
        this.displayTheList = this.displayTheList.bind(this);
        this.displaySettings = this.displaySettings.bind(this);
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

    render() {
        return (
            <div className="container">
                <MapContainer
                    displayTheList={this.displayTheList}
                    displaySettings={this.displaySettings}
                />
                <SearchBar />
            </div>
        );
    }
}
