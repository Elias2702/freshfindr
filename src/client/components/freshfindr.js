import * as React from "react";
import MapContainer from "./map";
import Analytics from "./analytics";
import SearchBar from "./searchbar";

export default class Freshfindr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayContent: (
                <MapContainer
                    displayTheList={this.displayTheList}
                    displayAnalytics={this.displayAnalytics}
                    displaySearchbar={this.displaySearchbar}
                />
            ),
            displayList: false,
            displaySearchbar: false,
        };
        this.displayTheList = this.displayTheList.bind(this);
        this.displayAnalytics = this.displayAnalytics.bind(this);
        this.displayMap = this.displayMap.bind(this);
        this.displaySearchbar = this.displaySearchbar.bind(this);
    }

    displayTheList = () => {
        this.setState({
            hiddenList: false,
        });
    };

    displayAnalytics = () => {
        this.setState({
            displayContent: <Analytics displayMap={this.displayMap} />,
        });
    };

    displaySearchbar = () => {
        this.setState({
            displaySearchbar: true,
        });
    };

    displayMap = () => {
        this.setState({
            displayContent: (
                <MapContainer
                    displayTheList={this.displayTheList}
                    displayAnalytics={this.displayAnalytics}
                    displaySearchbar={this.displaySearchbar}
                />
            ),
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
                {this.state.displayContent}
                <SearchBar displaySearchbar={this.displaySearchbar} />
            </div>
        );
    }
}
