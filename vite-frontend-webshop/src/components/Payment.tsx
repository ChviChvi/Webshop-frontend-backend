import React, {useState,useEffect} from "react";

//import '../../Test/styles.css';
import MobilePayIcon from '../assets/MP_blue.png';
import VisaIcon from '../assets/visa.svg';
import MasterIcon from '../assets/mastercard.svg';
import {postOrder} from "../APICall";
import '../stylesheets/reset.css';
import '../stylesheets/basket.css';
import '../stylesheets/Validation.css';
import '../stylesheets/Payment.css';
import Footer from "./Footer";


const FormResult: React.FC = () => {
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

   const totalsum = localStorage.getItem('sum');

    return(


        <div className="formDiv">
            <div className={'bigandsmall'}>
            <h3 className="big">Your Information</h3>
            <div className={'small'}>
                <p>{fname} {lname}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <h3 className="big">Billing Address</h3>
            <div className={'small'}>
                <p> {address}</p>
                <p>{postNumber} {city}</p>
                <p>{country}</p>
            </div>
            <h3 className="big">Total Price</h3>
            <div className={'small'}>
                <span>{totalsum} DKK</span>
            </div>
                <h3 className="big">Comment</h3>
                <div className={'small'}>
                    <p> {comment}</p>
                </div>
            </div>

        </div>


    )

}

function submitOrder(){

}

function PaymentType(){

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (event: React.MouseEvent<HTMLInputElement>) => {
        setSelectedOption(event.currentTarget.value);

    };

    function popup_and_post(e:any){
        e.preventDefault();
        if (selectedOption!=''){
        /** Backend */
        postOrder()
        /** Backend */

        alert("Your order has been send!");
        window.location.href = "/";}

    }

    return(

        <form className="payment">

            <h3 className="big">Payment Method</h3>
            <div>
                <div className={`paymentoption ${selectedOption === 'MobilePay' ? 'selected' : ''}`}>
                    <input type="radio" id="mobilepay" name="payment-option" value="MobilePay" onClick={handleOptionClick} checked={selectedOption === 'MobilePay'} />
                    <label htmlFor="mobilepay">MobilePay</label>
                    <div>
                    <img className="icon" src={MobilePayIcon}/>
                    </div>
                </div>

                <div className={`paymentoption ${selectedOption === 'Invoice' ? 'selected' : ''}`}>
                    <input type="radio" id="invoice" name="payment-option" value="Invoice" onClick={handleOptionClick} />
                    <label htmlFor="invoice">Invoice</label>
                    <div>
                        <img className="cardicon" src={VisaIcon}/>
                        <img className="cardicon" src={MasterIcon}/>
                    </div>
                </div>

                <div className={`paymentoption ${selectedOption === 'GiftCard' ? 'selected' : ''}`}>
                    <input type="radio" id="giftcard" name="payment-option" value="GiftCard" onClick={handleOptionClick} />
                    <label htmlFor="giftcard">Gift Card </label>
                    <div>
                    <i className="fa fa-gift "></i>
                    </div>
                </div>
            </div>
            <div className="buttonContainer">
                <a href="/">
                    <button className="Payment_buttons">Return to Basket</button>
                </a>

            </div>


            <div className="buttonContainer">

                <button className="Payment_buttons" onClick={popup_and_post}>Submit Order
                </button>

            </div>
        </form>

    )
}



const Payment: React.FC = () => {

    return (

        <div className="background">
            <div className="background_overlay">
                <header>
                    <nav className="main-nav">
                        <ul className="main-nav__list">
                            <li className="main-nav__item1">
                                <a className="main-nav__link1" href="/">
                                    <span>Home</span>
                                </a>
                                <a className="main-nav__link3" href="/Login">
                                    <span>Login</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <div className="main-content">
                        <div>
                            <FormResult/>
                            <PaymentType/>
                        </div>
                    </div>
                </main>
                {Footer()}
            </div>
        </div>
    )
};

export default Payment;