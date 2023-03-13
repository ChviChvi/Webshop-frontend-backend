import React, { useState } from "react";
import { Link } from 'react-router-dom';

import '../stylesheets/CustomerCheckout.css';

const CustomerCheckout: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [postNumber, setpostNumber] = useState('');
    const [City, setCity] = useState('');
    const [Country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [subscribe, setSubscribe] = useState(false);

    const handleSubscribeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubscribe(event.target.checked);
    };

    return (

            <div>

                <div className="header">
                    <h1>WEBSHOP PG2</h1>
                </div>

                <div className="links">
                <button type="submit"><Link to="/">RETURN TO BASKET</Link></button>
                <button type="submit"><Link to="/checkoutform">Go to checkout</Link></button>
                </div>



                <div className="information">
                    <div className="firstname-box">
                        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={"Firstname"}/>
                        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={"Lastname"}/>
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"E-mail"}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="Address" value={Address} onChange={(e) => setAddress(e.target.value)}  placeholder={"Address"}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="City" value={City} onChange={(e) => setCity(e.target.value)}  placeholder={"City"}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="Country" value={Country} onChange={(e) => setCountry(e.target.value)}  placeholder={"Country"}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="postNumber" value={postNumber} onChange={(e) => setpostNumber(e.target.value)}  placeholder={"PostNumber"}/>
                    </div>
                    <div className="form-group">
                        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder={"Phone"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subscribe">Subscribe to our newsletter?</label>
                        <input type="checkbox" id="subscribe" checked={subscribe} onChange={handleSubscribeChange} />
                    </div>
                </div>
            </div>

    );
};

export default CustomerCheckout;