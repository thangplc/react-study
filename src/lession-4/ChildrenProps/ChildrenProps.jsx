import React, { Component } from 'react'
import Button from './Button'

export default class ChildrenProps extends Component {
    render() {
        return (
            <div>
                {/* truyen chilren props bang cach truyen content vao giua 2 the dong mo component */}
                <Button content='see more'>See more</Button>
                <Button content='log in'>Login</Button>
            </div>
        )
    }
}
