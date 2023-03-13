import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/Validation.css'; // import CSS styles


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
        <form>
            <button type="submit"><Link to="/">RETURN TO BASKET</Link></button>
            <div>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={"Firstname"} pattern="^[\p{L}\s-]+$" required/>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={"Lastname"} pattern="^[\p{L}\s-]+$" required/>
            </div>
            <div>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"E-mail"} required/>
            </div>
            <div>
                <input type="text" id="Address" value={Address} onChange={(e) => setAddress(e.target.value)}  placeholder={"Address"} required/>
            </div>
            <div>
                <input type="text" id="City" value={City} onChange={(e) => setCity(e.target.value)}  placeholder={"City"} pattern="^[\p{L}\s-]+$" required/>
            </div>
            <div>
                <input type="text" id="Country" value={Country} onChange={(e) => setCountry(e.target.value)}  placeholder={"Country"} pattern="^[\p{L}\s-]+$" required/>
            </div>
            <div>
                <input type="text" id="postNumber" value={postNumber} onChange={(e) => setpostNumber(e.target.value)}  placeholder={"PostNumber" } minLength={4} maxLength={4} required/>
            </div>
            <div>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder={"Phone"} minLength={8} maxLength={8} required/>
            </div>
            <div>
                <label htmlFor="subscribe">Subscribe to our newsletter?</label>
                <input type="checkbox" id="subscribe" checked={subscribe} onChange={handleSubscribeChange} />
            </div>
            <div>
                <button>Submit</button>
            </div>

        </form>
    );
};

export default CustomerCheckout;