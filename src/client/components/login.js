import * as React from "react";
// import {Redirect} from "react-router-dom";
import LoginForm from "./loginForm";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: true,
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(data) {
    //     let input = data.target;

    //     this.setState({
    //         [input.name]: input.value,
    //     });
    // }

    handleSubmit() {
        // return <Redirect to="/home" />;
        window.location = "/home";
    }

    render() {
        return (
            <div className="loginContainer">
                <LoginForm
                    // handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}
