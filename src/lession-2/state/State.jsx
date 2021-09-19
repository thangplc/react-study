import React, { Component } from "react";

export default class State extends Component {

    username = "thangplc";
    state = {
        isLogIn: false,
    }
    login = () => {
        // setState la ham bat dong bo
        this.setState({
            isLogIn: true,
        })
    }
    render() {
        return (
            <div>
                {this.state.isLogIn ? (
                    <p>Welcome {this.username} to this page</p>
                ) : (
                    <button onClick={this.login} className="btn btn-success">Login</button>
                )}
            </div>
        );
    }
}
