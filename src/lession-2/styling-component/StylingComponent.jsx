import React, { Component } from 'react'
import './External.css';
import classes from "./Styling.module.css";
export default class StylingComponent extends Component {
    render() {
        return (
            <div>
                <h1>Styling Component</h1>
                <p
                    style={{
                        backgroundColor: "red",
                        color: "white",
                    }}
                >
                    Inline style
                </p>
                <p className="text">External style</p>
                <p className={`${classes.colorText}, ${classes.bgColor}`}>
                    Styling with module
                </p>
            </div>
        );
    }
}
