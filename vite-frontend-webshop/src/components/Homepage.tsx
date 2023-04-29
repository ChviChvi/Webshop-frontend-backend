import React, {useEffect, useState} from "react";
import {checkoutlist} from "../Basket";
import { Link } from 'react-router-dom';




import '../stylesheets/reset.css';
import '../stylesheets/HomePage.css';
import CustomerBasket from "./CustomerBasket";
import scrollCustomerBasket from "./CustomerBasketScroll";

import Footer from "./Footer";

import forestbackground2 from "../assets/forest-background2.jpg";

const Homepage: React.FC = () => {
    const [showCart, setShowCart] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showTitle, setShowTitle] = useState(true);



    const handleToggleCart = () => {
        if(showAbout || showTitle){
            setShowAbout(false)
            setShowTitle(false)
        }
        setShowCart(!showCart);
    }

    const handleToggleAbout = () => {
        if(showCart || showTitle){
            setShowCart(false)
            setShowTitle(false)
        }
        setShowAbout(!showAbout);
    }

    useEffect(() => {
        if (!showCart && !showAbout) {
            setShowTitle(true);
        }
    }, [showCart, showAbout]);

    // const handleToggleTitle = () => {
    //     if(showTitle){
    //         setShowCart(false)
    //         setShowAbout(false)
    //     }
    //     setShowTitle(!showTitle);
    // }

    const handleDismissBar = () => {
        const clickableBar = document.getElementById("clickable-bar");
        if (clickableBar) {
            clickableBar.style.display = "none";
        }
    };




    return (
        <div className="background">
            <div className="background_overlay">
            <header>
                <div id="clickable-bar" className="clickable-bar" onClick={handleDismissBar}>
                    Get free shipping on your first order!
                </div>

                <nav className="main-nav">


                    <ul className="main-nav__list">


                        <li className="main-nav__item1">
                            <a className="main-nav__link1" href="/">
                                <span>Home</span>
                            </a>
                            <a className="main-nav__link2" onClick={handleToggleAbout}>
                                <span className="main-nav__link2_about">About</span>
                            </a>
                            <a className="main-nav__link3" href="/Login">
                                <span>Login</span>
                            </a>
                            <a className="main-nav__link4" onClick={handleToggleCart}>
                                <span className="main-nav__link4_basket">Basket</span>
                            </a>
                        </li>


                    </ul>
                </nav>
            </header>

            <main>
                <div className="main-content" >

                    <div className="sidebar">
                        <a className="main-nav__link4" href="/checkoutform">
                            <span>Go to Checkout &rarr;</span>
                        </a>
                    </div>

                </div>


            </main>


                {Footer()}


            <div className={`pane ${showCart ? "" : "pane-hide"}`}>
                <div className= "Your_Basket">
                    You have xx items in your basket
                </div>
                        <div className= "Your_Items">

                        {scrollCustomerBasket()}

                        </div>

                <div className= "Your_Price">
                </div>
            </div>
            <div className={`About ${showAbout ? "" : "About-hide"}`}>

                <div>
                    LOPSEM
                </div>

            </div>
            <div className={`Title ${showTitle ? "" : "Title-hide"}`}>
                <div className="Title-text">
                        <span className= "Title-Firstletter">W</span>
                        <span>ARMSHOP.</span>
                </div>

            </div>

        </div>
        </div>
    )
};

export default Homepage;