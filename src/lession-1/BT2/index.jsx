import React, { Component } from "react";
import { TabContent } from "react-bootstrap";
import Header from "./Component/Header";
import Navigation from "./Component/Navigation";
import { Footer } from "./Component/Footer";
import { Content } from "./Component/Content";

class Home extends Component {
    render() {
        return (
            <div className="container w-50">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                    <div className="col-4 h-50">
                        <Navigation />
                    </div>
                    <div className="col-8">
                        <Content />
                    </div>
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>

            </div>
        );
    }
}
export { Home };

