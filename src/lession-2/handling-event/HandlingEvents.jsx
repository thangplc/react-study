import React, { Component } from 'react'

export default class HandlingEvents extends Component {
    hello = () => {
        alert('welcome you');
    }
    thanks = (name) => {
        const content = `Thanks ${name} for subcribe`;
        alert(content);
    }
    render() {
        const username = 'thangplc';
        return (
            <div>
                <button onClick={this.hello} type="submit" className='btn btn-success'>Click</button>
                <button onClick={() => { this.thanks(username) }} className='btn btn-primary'>Subcribe</button>
            </div>
        )
    }
}
