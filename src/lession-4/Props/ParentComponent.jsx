import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1> This is parent component</h1>
                <div className="row pt-5">
                    <ChildComponent name="Cafe khong duong" rate="4.5" author='a' />
                    <ChildComponent name="Run now" rate="4.5" author='a' />
                    <ChildComponent name="Yeu em la dieu khong the" rate="4.5" author='a' />
                    <ChildComponent name="Ne duyen" rate="4.5" author='a' />
                    <ChildComponent name="Tro dua" rate="4.5" author='a' />
                    <ChildComponent name="Anh lam gi toi nay" rate="4.5" author='a' />
                    <ChildComponent name="Co ai" rate="4.5" author='a' />
                    <ChildComponent name="Despacito" rate="4.5" author='a' />
                </div>
            </div>
        );
    }
}
