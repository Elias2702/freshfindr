import * as React from "react";
import ToListButton from "./toListButton";
import AnalyticsButton from "./analyticsButton";

export default class MapButtons extends React.Component {
    render() {
        return (
            <div className="mapButtonsContainer">
                <ToListButton onListClick={this.props.onListClick} />
                <AnalyticsButton
                    onAnalyticsClick={this.props.onAnalyticsClick}
                />
            </div>
        );
    }
}
