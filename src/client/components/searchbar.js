import * as React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DisplaySearchBar: "",
            ButtonClicked: "",
        };

        this.buttonIsClicked = this.buttonIsClicked.bind(this);
    }

    buttonIsClicked(e) {
        e.preventDefault();
        this.setState({
            DisplaySearchBar: (
                <input
                    type="text"
                    placeholder="Search our Awesome Database ;)"
                    className="textarea"
                />
            ),
            ButtonClicked: "buttonIsClicked",
        });
        this.props.displaySearchbar();
    }

    render() {
        return (
            <div className="searchBar">
                <form>
                    {this.state.DisplaySearchBar}
                    <input
                        type="button"
                        className={`searchButton ${this.state.ButtonClicked}`}
                        onClick={this.buttonIsClicked}
                    />
                </form>
            </div>
        );
    }
}
