import React, { Component } from 'react'
import PropsTypeComponent from './PropsTypeComponent'

export default class PropsType extends Component {
    render() {
        return (
            <div>
                <PropsTypeComponent content='see more' number={1} />
                <PropsTypeComponent content='login' number={3} />
                <PropsTypeComponent content='checkout' number={1} />
            </div>
        )
    }
}
