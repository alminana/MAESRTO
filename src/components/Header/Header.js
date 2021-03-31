import React from 'react';
import Navbar from '../Navigation/Navbar';
const Header = () => {
    return (
        <div className="banner">
            <Navbar/>
                <div className="banner__content">
                    <div className="container">
                        <div className="banner__text">
                            <div className="container">
                                <h3>Pizza Delivery</h3>
                                <h1>MAESRTO</h1>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <div className="banner__btn">
                                    <a href="" className="btn btn-smart">
                                        DELIVERY NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Header
