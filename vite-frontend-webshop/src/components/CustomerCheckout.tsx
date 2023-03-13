import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/Validation.css';



const CustomerCheckout: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [Address2, setAddress2] = useState('');
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
                <input type="text" id="Address" value={Address} onChange={(e) => setAddress(e.target.value)}  placeholder={"Address"} pattern="^[\p{L}\s-]+$+[0-9]+$" required/>
            </div>
            <div>
                <input type="text" id="Address2" value={Address2} onChange={(e) => setAddress2(e.target.value)}  placeholder={"Billing Address (Optional)"} pattern="^[\p{L}\s-]+$+[0-9]+$" />
            </div>
            <div>
                <input type="text" id="postNumber" value={postNumber} onChange={(e) => setpostNumber(e.target.value)}  placeholder={"PostNumber"} pattern="^[0-9]+$" minLength={4} maxLength={4} required/>
            </div>
            <div>
                <input type="text" id="City" value={City} onChange={(e) => setCity(e.target.value)}  placeholder={"City"} list="Byer" pattern="^[\p{L}\s-]+$" required/>
                <datalist id="Byer">
                    <option>København</option>
                    <option>Aarhus</option>
                    <option>Odense</option>
                    <option>Aalborg</option>
                    <option>Esbjerg</option>
                    <option>Randers</option>
                    <option>Kolding</option>
                    <option>Horsens</option>
                    <option>Vejle</option>
                    <option>Roskilde</option>
                    <option>Farum</option>
                    <option>Lyngby</option>
                </datalist>
            </div>
            <div>
                <input type="text" id="Country" value={Country} onChange={(e) => setCountry(e.target.value)}  placeholder={"Country"} list="Lande" pattern="^[\p{L}\s-]+$" required/>
                <datalist id="Lande">
                    <option>Denmark</option>
                </datalist>
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