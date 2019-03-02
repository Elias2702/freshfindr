import * as React from "react";
import ToListButton from "./toListButton";
import SettingButton from "./settingsButton";

export default class MapButtons extends React.Component {
    render() {
        return (
            <div className="mapButtonsContainer">
                <ToListButton onListClick={this.props.onListClick} />
                <SettingButton onSettingsClick={this.props.onSettingsClick} />
            </div>
        );
    }
}
