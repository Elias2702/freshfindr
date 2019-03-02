import * as React from "react";

export default class SettingsButton extends React.Component {
    render() {
        return (
            <div className="mapButton" onClick={this.props.onAnalyticsClick}>
                <i className="fas fa-cogs" />
            </div>
        );
    }
}
