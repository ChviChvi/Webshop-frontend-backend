import React, {useState,useEffect} from "react";
import {checkoutlist} from "../Basket";
import '../stylesheets/styles.css';
import MobilePayIcon from '../assets/MP_blue.png';
import VisaIcon from '../assets/visa.svg';
import MasterIcon from '../assets/mastercard.svg';
import GiftIcon from '../assets/giftIcon.png';
import {Link, useLocation} from 'react-router-dom';


function FormResult(){
   const fname = localStorage.getItem('firstName');
   const lname = localStorage.getItem('lastName');
   const address = localStorage.getItem('Address');
   const address2 = localStorage.getItem('Address2');
   const postNumber = localStorage.getItem('postNumber');
   const city = localStorage.getItem('City');
   const country = localStorage.getItem('Country');
   const email =  localStorage.getItem('email');
   const phone = localStorage.getItem('phone');
   const company = localStorage.getItem('Company');
   const vat = localStorage.getItem('VAT');
   const comment =localStorage.getItem('Comment');


    return(
        <div className="formDiv">
            <h3 className="big">Your Information</h3>
            <p>{fname} {lname}</p>
            <p>{email}</p>
            <p>{phone}</p>

            <h3 className="big">Billing Address</h3>
            <p> {address}</p>
            <p>{postNumber} {city}</p>
            <p>{country}</p>
        </div>
    )

}
function PaymentType(){
    return(

        <form className="payment">

        <h3 className="big">Payment Method</h3>
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

            <FormResult/>
            <PaymentType/>


<div>
    <Link to="/">  <button>Return to Basket
    </button>   </Link>
</div>

<div>
    <button>Continue to Payment
         </button>   </div>

        </div>





    )
};

export default Payment;