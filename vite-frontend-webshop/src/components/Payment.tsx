import React, {useState,useEffect} from "react";
import {checkoutlist} from "../Basket";
import MobilePayIcon from '../assets/MP_blue.png';
import VisaIcon from '../assets/visa.svg';
import MasterIcon from '../assets/mastercard.svg';
import GiftIcon from '../assets/giftIcon.png';
import { Link } from 'react-router-dom';



function PaymentType(){
    return(

        <form className="payment">

        <h3>Payment Method</h3>
            <div className="paymentoption">
        <input className="methodtest" type="radio" id="mobilepay" name="fav_language" value="MobilePay"/>
          <label htmlFor="mobilepay">MobilePay</label>
            <img className="icon" src={MobilePayIcon}/></div>

            <div className="paymentoption">
        <input type="radio" id="invoice" name="fav_language" value="Invoice"/>
                <label htmlFor="invoice">Invoice</label>
                <div><img className="cardicon" src={VisaIcon}/>
               <img className="cardicon" src={MasterIcon}/></div></div>

            <div className="paymentoption">
        <input type="radio" id="giftcard" name="fav_language" value="GiftCard"/>
                <label htmlFor="giftcard">Gift Card</label>
                <i className="fa fa-gift "></i></div>


    </form>
    )
}

const Payment: React.FC = () => {

    return (
        <div>
            <h1> Here will come the Payment site</h1>

            <PaymentType/>

<div>
    <Link to="/">  <button>Return to Basket
    </button>   </Link>
</div>

<div>
    <Link to="/">  <button>Continue to Payment
         </button>   </Link></div>



        </div>

    )
};

export default Payment;