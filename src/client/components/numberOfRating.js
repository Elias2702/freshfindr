import * as React from "react";

export default class NumberOfRating extends React.Component {
    render() {
        return (
            <div className="numberOfRatingContainer">
                <p className="ratingCount">{"1900"}</p>
                <p className="ratingSince">{"Ratings since"}</p>
                <p className="ratingDate">{"01/03/2019"}</p>
            </div>
        );
    }
}
