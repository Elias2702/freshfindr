import * as React from "react";
import LoginForm from "./loginForm";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(data) {
        let input = data.target;

        this.setState({
            [input.name]: input.value,
        });
    }

    handleSubmit() {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div className="loginContainer">
                <LoginForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}
