import React, { Component } from 'react'

export default class ListsKeys extends Component {
    productList = [
        { id: 1, name: "Black", price: 200, img: './img/products/black-car.jpg', },
        { id: 2, name: "Red", price: 200, img: './img/products/red-car.jpg', },
        { id: 3, name: "Steel", price: 200, img: './img/products/steel-car.jpg', },
        { id: 4, name: "Silver", price: 200, img: './img/products/silver-car.jpg', }

    ]
    renderProductList() {
        return this.productList.map((car, index) => {
            const { id, name, price, img } = car;
            return (
                <tr key={index} >
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                        <img src={img} width='120px' />
                    </td>
                </tr >
            );
        });
    }
    render() {
        return (
            <div>
                <h1 className='text-center mb-5'>List of fashion car</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
