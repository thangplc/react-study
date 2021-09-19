import React, { Component } from 'react'

export default class DataBinding extends Component {
    age = '19';
    fullName = "Phan Lương Công Thắng";
    renderStudent() {
        const student = {
            fullName: 'Phan Luong Cong Thang',
            age: 19,
            className: 'BC12'
        }
        const { fullName, age, className } = student;
        return (
            <div>
                <p>Name: {fullName}</p>
                <p>Age: {age}</p>
                <p>Class: {className}</p>
            </div>
        );
    }
    render() {
        const age = 19;
        const fullName = 'Phan Luong Cong Thang';
        return (
            <div>
                <p>Full name: {fullName}</p>
                <p>Age: {age}</p>
                <p>Full name: {this.fullName}</p>
                <p>Age: {this.age}</p>
                <h2>Student Info</h2>
                {this.renderStudent()}
            </div>
        )
    }
}
