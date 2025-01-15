import React, { Component } from 'react';
import './Calc.css';

export default class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: null,
        };
    }

    getDOB = () => {
        const dobInput = document.getElementById('inputDob').value;

        if (!dobInput) {
            alert('Please enter your Date of Birth.');
            return;
        }

        const dob = new Date(dobInput);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - dob.getFullYear();
        const monthDifference = currentDate.getMonth() - dob.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
            age--;
        }

        if (age <= 0) {
            alert('Please enter a Valid Date of Birth.');
            return;
        }

        this.setState({ age });
    };

    render() {
        return (
            <div className="card">
                <h1>Age Calculator</h1>
                <div>
                    <label>Enter your Date of Birth</label>
                    <input id="inputDob" type="date" defaultValue="" />
                </div>
                <button type="button" onClick={this.getDOB}>Calculate</button>
                {this.state.age !== null && (
                    <div id="currentAge">Your age is {this.state.age} years.</div>
                )}
            </div>
        );
    }
}