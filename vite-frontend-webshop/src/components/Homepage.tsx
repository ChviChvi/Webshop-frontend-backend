import React, {useEffect, useState} from "react";

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
    const [showShop, setShowShop] = useState(false);



    const handleToggleCart = () => {
        if(showAbout || showTitle || showShop){
            setShowAbout(false)
            setShowTitle(false)
            setShowShop(false)
        }
        setShowCart(!showCart);
    }

    const handleToggleAbout = () => {
        if(showCart || showTitle || showShop){
            setShowCart(false)
            setShowTitle(false)
            setShowShop(false)
        }
        setShowAbout(!showAbout);
    }
    const handleToggleShop = () => {
        if(showAbout || showTitle || showCart){
            setShowAbout(false)
            setShowTitle(false)
            setShowCart(false)
        }

        setShowShop(!showShop);
    }

    useEffect(() => {
        if (!showCart && !showAbout && !showShop) {
            setShowTitle(true);
        }
    }, [showCart, showAbout, showShop]);

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


    const [itemamount, setitemamount] = useState<number>(0);

    useEffect(() => {


        const countString = localStorage.getItem('counts');
        const count_array = countString ? JSON.parse(countString) : [];
        const count_length = count_array.length;

        const anticountString = localStorage.getItem('deleteButton');
        const anticount_array = anticountString ? JSON.parse(anticountString) : [];
        const anticount_length = anticount_array.length;

        setitemamount(count_length - anticount_length);
    }, [localStorage.getItem('counts'), localStorage.getItem('deleteButton')]);



    const [expanded_electronics, setExpanded_electronics] = useState(false);

    const handle_shopexpansion_electronics = () => {
        setExpanded_electronics(!expanded_electronics);
    };
    const [expanded_clothes, setExpanded_clothes] = useState(false);

    const handle_shopexpansion_clothes = () => {
        setExpanded_clothes(!expanded_clothes);
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
                            <a className="main-nav__link5" onClick={handleToggleShop}>
                                <span className="main-nav__link5_shop">Shop </span>
                            </a>
                            <a className="main-nav__link4" onClick={handleToggleCart}>
                                <span className="main-nav__link4_basket">Basket ({itemamount}) </span>
                            </a>
                            <a className="main-nav__link2" onClick={handleToggleAbout}>
                                <span className="main-nav__link2_about">About</span>
                            </a>
                            <a className="main-nav__link3" href="/Login">
                                <span>Login</span>
                            </a>




                        </li>


                    </ul>
                </nav>
            </header>

            <main>
                <div className="main-content" >

                    <div className="sidebar">

                    </div>

                </div>


            </main>


                {Footer()}


            <div className={`pane ${showCart ? "" : "pane-hide"}`}>
                <div className= "Your_Basket">
                    You have {itemamount} items in your basket
                </div>
                        <div className= "Your_Items">

                        {scrollCustomerBasket()}

                        </div>


            </div>


                <div className={`Shop ${showShop ? "" : "Shop-hide"}`}>

                    <div className="Shop_box">
                        <div onClick={handle_shopexpansion_electronics}>
                            <div className='category'>Electronics (Click me!)</div>
                            {expanded_electronics && (
                                <div className='subcategories'>
                                    <div className='coolflow'>Computers</div>
                                    <div className='coolflow2'>Coffee Grinders</div>
                                    <div className='coolflow3'>Phones</div>
                                    <div className='coolflow4'>Wires</div>
                                </div>
                            )}
                        </div>
                        <div onClick={handle_shopexpansion_clothes}>
                            <div className='category'>Clothes (Click me!)</div>
                            {expanded_clothes && (
                                <div className='subcategories'>
                                    <div className='coolflow'>Hoodies</div>
                                    <div className='coolflow2'>Pants</div>
                                    <div className='coolflow3'>Socks</div>
                                    <div className='coolflow4'>Shoes</div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>


            <div className={`About ${showAbout ? "" : "About-hide"}`}>

                <div className="About_box">
                    <div className="About_header">
                        About WarmShop
                    </div>
                    <div className="About_text1">
                        Welcome to WarmShop, your one-stop destination for all kinds of products!
                        As a team of young and dynamic web developers, we created WarmShop with
                        the goal of making online shopping more convenient and enjoyable for everyone.
                        Our passion for technology and customer satisfaction drives us to offer a wide
                        range of products at competitive prices, while our user-friendly platform ensures a fantastic shopping experience from start to finish.
                        We understand that shopping for the things you need should be easy, and we're committed to making it that way.
                    </div>
                    <div className="About_text2">
                        Thank you for choosing WarmShop, and we look forward to serving you!
                    </div>
                </div>

            </div>
                <div className={'Title-Container'}>
            <div className={`Title ${showTitle ? "" : "Title-hide"}`}>
                <div className="Title-text">
                    <div>
                        <span >W</span>
                        <span>ARM</span>
                    </div>
                    <div className='shopword'>
                        <span >S</span>
                        <span>HOP</span>

                    </div>
                </div>
            </div>
            </div>

        </div>
        </div>
    )
};

export default Homepage;