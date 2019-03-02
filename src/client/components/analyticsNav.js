import * as React from "react";

export default class AnalyticsSidebar extends React.Component {
    render() {
        return (
            <div className="analyticsNavContainer">
                <h3>{"Analytics"}</h3>
                <nav className="analyticsNav">
                    <p className="analysticsNavElement">{"Overview"}</p>
                    <p className="analysticsNavElement">{"Products"}</p>
                    <p className="analysticsNavElement">{"Users"}</p>
                    <p className="analysticsNavElement">{"Reviews"}</p>
                </nav>
            </div>
        );
    }
}
