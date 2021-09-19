import React, { Component } from "react";

export default class ConditionalRendering extends Component {
    isLogged = true;
    username = "thangplc";
    checkLogIn = () => {
        if (this.isLogged) {
            return <p>Welcome {this.username} to this page</p>;
        }
        return <button class="btn btn-success">Log in</button>;
    };

    render() {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                {/* {this.checkLogIn()} */}
                {this.isLogged && <p>Welcome {this.username} to this page</p>}
                {!this.isLogged && <button class="btn btn-success">Log in</button>}
            </div>
        );
    }
}
