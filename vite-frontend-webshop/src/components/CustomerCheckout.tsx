import React, {useEffect, useState} from "react";
import { Link, useNavigate} from 'react-router-dom';
import '../stylesheets/reset.css';
import '../stylesheets/Validation.css';
import '../stylesheets/CustomerCheckout.css';
import '../stylesheets/HomePage.css';

import Footer from "./Footer";

import scrollCustomerBasket from "./CustomerBasketScroll";

interface CityData {
    navn: string;
    postnr: string;
}


const CustomerCheckout: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [Address2, setAddress2] = useState('');
    const [postNumber, setpostNumber] = useState('');
    const [City, setCity] = useState('');
    const [Country, setCountry] = useState('Denmark');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [Company, setCompany] = useState('');
    const [VAT, setVAT] = useState('');
    const [Comment, setComment] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [conditions, setConditions] = useState(false);

    const handleSubscribeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubscribe(event.target.checked);
    };
    const handleConditionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setConditions(event.target.checked);
    };

    const handlePostalCodeBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (Country === "Denmark") {
            fetch(`https://api.dataforsyningen.dk/postnumre?nr=${inputValue}`)
                .then((response) => response.json())
                .then((data: CityData[]) => {
                    if (data.length > 0) {
                        // If the API returns a city, update the state with the city
                        setCity(data[0].navn);
                    } else {
                        // If the API doesn't return a city, clear the input field and city
                        setCity("");
                    }
                })
                .catch((error) => console.error(error));
        }
    };
    const CustomerCheckout = () => {
        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            city: "",
            country: "",
            zipCode: "",
        });




    };

    const [showCart, setShowCart] = useState(true);




    const handleToggleCart = () => {

        setShowCart(!showCart);
    }
    //const navigate = useNavigate();

  function handleFormSubmit() {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('Address', Address);
      localStorage.setItem('Address2', Address2);
      localStorage.setItem('postNumber', postNumber);
      localStorage.setItem('City', City);
      localStorage.setItem('Country', Country);
      localStorage.setItem('email',email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('Company', Company);
      localStorage.setItem('VAT', VAT);
      localStorage.setItem('Comment', Comment);
      localStorage.setItem('subscribe', String(subscribe));
      localStorage.setItem('conditions', String(conditions));
      return;
      }


    function fetchhandleFormSubmit() {




      handleFormSubmit();

        const formData = {
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            Address: localStorage.getItem('Address'),
            Address2: localStorage.getItem('Address2'),
            postNumber: localStorage.getItem('postNumber'),
            City: localStorage.getItem('City'),
            Country: localStorage.getItem('Country'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            Company: localStorage.getItem('Company'),
            VAT: localStorage.getItem('VAT'),
            Comment: localStorage.getItem('Comment'),
        };

        fetch('http://130.225.170.71:3000/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Display success message
            })
            .catch(error => {
                console.error(error); // Handle error
            });
    }

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
                                <Link className="main-nav__link3" to="/Login">
                                    <span>Login</span>
                                </Link>
                                <a className="main-nav__link4" onClick={handleToggleCart} >
                                    <span>Basket</span>
                                </a>
                            </li>


                        </ul>
                    </nav>
                </header>


                <main>
                <div className="main-content">
                    <div className="form-container">

                        <form className="form" action={'/Payment'} onSubmit={fetchhandleFormSubmit} >
                            <div>
                                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={"Firstname"} pattern="^[\p{L}\s-]+$" required/>
                                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={"Lastname"} pattern="^[\p{L}\s-]+$" required/>
                            </div>
                            <div>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"E-mail"} required/>
                            </div>
                            <div>
                                <input type="text" id="Address" value={Address} onChange={(e) => setAddress(e.target.value)}  placeholder={"Address"} pattern="^[\p{L}\s-]+$+[0-9]+$" required/>
                            </div>
                            <div>
                                <input type="text" id="Address2" value={Address2} onChange={(e) => setAddress2(e.target.value)}  placeholder={"Billing Address (Optional)"} pattern="^[\p{L}\s-]+$+[0-9]+$" />
                            </div>

                            <div>
                                <input type="text" id="Country" value={Country} onChange={(e) => setCountry(e.target.value)}  placeholder={"Country"} list="Lande" pattern="^[\p{L}\s-]+$" required/>
                                <datalist id="Lande">
                                    <option>Denmark</option>
                                    <option>Sweden</option>
                                    <option>Norway</option>
                                </datalist>
                            </div>

                            <div>
                                <input type="text" id="postNumber" value={postNumber} onChange={(e) => setpostNumber(e.target.value)} placeholder={"PostNumber"} pattern="^[0-9]+$" minLength={4} maxLength={4} required onBlur={handlePostalCodeBlur}/>
                            </div>

                            <div>
                                <input type="text" id="City" value={City} onChange={(e) => setCity(e.target.value)} placeholder="City" pattern="^[\p{L}\s-]+$" required/>
                            </div>

                            <div>
                                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder={"Phone"} pattern="^[0-9]+$" minLength={8} maxLength={8} required/>
                            </div>
                            <div>
                                <label htmlFor="n1" className="labels_form"> Notice! </label>
                            </div>
                            <label htmlFor="n2" className="labels_form"> ↓ If company order please fill out ↓ </label>
                            <div>
                                <input type="text" id="company" value={Company} onChange={(e) => setCompany(e.target.value)}  placeholder={"Company name"} pattern="^[\p{L}\s-]+$"/>
                            </div>
                            <div>
                                <input type="tel" id="VAT" value={VAT} onChange={(e) => setVAT(e.target.value)}  placeholder={"VAT.NO"} pattern="^[0-9]+$" minLength={8} maxLength={8}/>
                            </div>
                            <textarea  rows={4} cols={30} value={Comment} onChange={(e) => setComment(e.target.value)} placeholder="Leave a comment"></textarea>
                            <div>
                                <label htmlFor="subscribe" className="labels_form">Subscribe to our newsletter?</label>
                                <input type="checkbox" id="subscribe" checked={subscribe} onChange={handleSubscribeChange} />
                            </div>
                            <div>
                                <label htmlFor="conditions" className="labels_form">I Accept The Terms & Conditions</label>
                                <input type="checkbox" id="conditions" checked={conditions} required onChange={handleConditionChange} />
                            </div>
                            <div>

                                <button type="submit" className="payment_submitbutton" onClick={fetchhandleFormSubmit}> Go to Payment Methods</button>

                            </div>
                        </form>

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


            </div>

        </div>


    );
};

export default CustomerCheckout;

