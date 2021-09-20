import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PropsTypeComponent extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    };
    render() {
        const { content, number } = this.props;
        return (
            <div>
                <button className="btn btn-danger" style={{ marginLeft: "20px" }}>
                    {content}
                </button>
                <p>Number: {number}</p>
            </div>

        );
    }
}
