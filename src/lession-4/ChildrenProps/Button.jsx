import React, { Component } from 'react'

export default class Button extends Component {
    render() {

        return (
            // Nhận nội dung của giữa 2 thẻ đóng mở componet
            <button className='btn btn-primary' style={{
                marginLeft: '20px'
            }}>
                {this.props.children}
            </button>
        )
    }
}
