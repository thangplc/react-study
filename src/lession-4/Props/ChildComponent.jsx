import React, { Component } from "react";

export default class ChildComponent extends Component {
    render() {
        const { name, rate, author } = this.props;
        return (
            <div className="col-4" style={{ paddingBottom: "30px" }}>
                <div className="card">
                    <div className="card-body">
                        <p className='text-danger'>This is children component</p>
                        <h4 className="card-title">
                            Name:  {name}
                        </h4>
                        <p className="card-text">
                            Rate:  {rate}
                        </p>
                        <p className="card-text">
                            Author:  {author}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
