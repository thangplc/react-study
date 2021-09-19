import React, { Component } from "react";

export default class ChooseCar extends Component {
    state = {
        imgName: "black-car.jpg",
    };
    handleChangeColor = (imgName) => {
        this.setState({
            imgName: imgName,
        })
        console.log(imgName);
    };
    render() {
        // boc tach object
        const { imgName } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <img src={`./img/products/${imgName}`} className="w-100" />
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">Choose Color</div>
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item"
                                    onClick={() => {
                                        this.handleChangeColor("black-car.jpg");
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./img/icons/icon-black.jpg" className="w-100" />
                                        </div>
                                        <div className="col-10 d-flex align-item-center">
                                            Crystal Black
                                        </div>
                                    </div>
                                </li>
                                <li
                                    className="list-group-item"
                                    onClick={() => {
                                        this.handleChangeColor("red-car.jpg");
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./img/icons/icon-red.jpg" className="w-100" />
                                        </div>
                                        <div className="col-10 d-flex align-item-center">
                                            Rallye Red
                                        </div>
                                    </div>
                                </li>
                                <li
                                    className="list-group-item"
                                    onClick={() => {
                                        this.handleChangeColor("silver-car.jpg");
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-2">
                                            <img
                                                src="./img/icons/icon-silver.jpg"
                                                className="w-100"
                                            />
                                        </div>
                                        <div className="col-10 d-flex align-item-center">
                                            Lunar Silver
                                        </div>
                                    </div>
                                </li>
                                <li
                                    className="list-group-item"
                                    onClick={() => {
                                        this.handleChangeColor("steel-car.jpg");
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./img/icons/icon-steel.jpg" className="w-100" />
                                        </div>
                                        <div className="col-10 d-flex align-item-center">
                                            Moder Steel
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
