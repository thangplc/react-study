import React, { Component } from 'react'
import Footer from './Footer';
import Carousel from './Carousel'
import Header from './Header';
import Feature from './Feature'
export default class HeroicFeatures extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Feature />
                <Footer />
            </div>
        )
    }
}
