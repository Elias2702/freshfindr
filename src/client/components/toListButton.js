import * as React from "react";

export default class MapButtons extends React.Component {
    render() {
        return (
            <div className="mapButton" onClick={this.props.onListClick}>
                <i className="fas fa-clipboard-list" />
            </div>
        );
    }
}
