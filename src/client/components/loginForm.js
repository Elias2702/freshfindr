import * as React from "react";
import tangerine from "../ressources/tangerine_1f34a.png";

export default class LoginFrom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loginFormContainer">
                <img src={tangerine} />
                <form onSubmit={this.props.handleSubmit} className="loginForm">
                    <input
                        type="text"
                        // onChange={this.props.handleChange}
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        // onChange={this.props.handleChange}
                    />
                    <button
                        type="submit"
                        value="submit"
                        className="loginButton">
                        {"Login"}
                    </button>
                </form>
            </div>
        );
    }
}
