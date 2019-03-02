import * as React from "react";

export default class AnalyticsSidebar extends React.Component {
    render() {
        return (
            <div className="analyticsSidebarContainer">
                <div className="sidebarElement">
                    <i className="fas fa-chart-line" />
                </div>
                <div className="sidebarElement">
                    <i className="far fa-user" />
                </div>
                <div className="sidebarElement">
                    <i className="fas fa-euro-sign" />
                </div>
                <div className="sidebarElement">
                    <h3>Support</h3>
                </div>
            </div>
        );
    }
}
