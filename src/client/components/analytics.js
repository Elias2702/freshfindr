import * as React from "react";
import AnalyticsHeader from "./analyticsHeader";
import AnalyticsSidebar from "./analyticsSidebar";

export default class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayList: false,
        };
    }

    render() {
        return (
            <div className="Analyticscontainer">
                <AnalyticsHeader displayMap={this.props.displayMap} />
                {<AnalyticsSidebar />}
            </div>
        );
    }
}
