import * as React from "react";

export default class SettingsButton extends React.Component {
    render() {
        return (
            <div className="mapButton" onClick={this.props.onSettingsClick}>
                <i className="fas fa-cogs" />
            </div>
        );
    }
}
