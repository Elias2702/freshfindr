import * as React from "react";

export default class AnalyticsHeader extends React.Component {
    render() {
        return (
            <div className="analyticsHeaderContainer">
                <i
                    className="fas fa-arrow-left"
                    onClick={this.props.displayMap}
                />
                <i className="fas fa-cogs" />
            </div>
        );
    }
}
