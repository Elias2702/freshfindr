import * as React from "react";
import AnalyticsHeader from "./analyticsHeader";
import AnalyticsSidebar from "./analyticsSidebar";
import AnalyticsNav from "./analyticsNav";
import NumberOfRating from "./numberOfRating";
import graph from "./assets/chart.png";

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
                {<AnalyticsNav />}
                <h3 className="yearOverview">{"Year overview : "}</h3>
                <img src={graph}/>
                <NumberOfRating />
            </div>
        );
    }
}
