import * as React from "react";
import MapContainer from "./map";
import Analytics from "./analytics";

export default class Freshfindr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayContent: (
                <MapContainer
                    displayTheList={this.displayTheList}
                    displayAnalytics={this.displayAnalytics}
                />
            ),
        };
        this.displayTheList = this.displayTheList.bind(this);
        this.displayAnalytics = this.displayAnalytics.bind(this);
        this.displayMap = this.displayMap.bind(this);
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

    displayMap = () => {
        this.setState({
            displayContent: (
                <MapContainer
                    displayTheList={this.displayTheList}
                    displayAnalytics={this.displayAnalytics}
                />
            ),
        });
    };

    render() {
        return <div className="container">{this.state.displayContent}</div>;
    }
}
