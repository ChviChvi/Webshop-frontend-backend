import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/Validation.css';
import '../stylesheets/CustomerCheckout.css'

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

    const [subscribe, setSubscribe] = useState(false);

    const handleSubscribeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubscribe(event.target.checked);
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

    return (
        <html>

        <title>
            WEBSHOP PG2
        </title>

        <body>

        <div className = "header">
            <h2>
                WEBSHOP PG2
            </h2>
        </div>
        <button type="submit"><Link to="/">RETURN TO BASKET</Link></button>

        <form>

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
                <input
                    type="text"
                    id="postNumber"
                    value={postNumber}
                    onChange={(e) => setpostNumber(e.target.value)}
                    placeholder={"PostNumber"}
                    pattern="^[0-9]+$"
                    minLength={4}
                    maxLength={4}
                    required
                    onBlur={handlePostalCodeBlur}
                />
            </div>

            <div>
                <input
                    type="text"
                    id="City"
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    pattern="^[\p{L}\s-]+$"
                    required
                />
            </div>

            <div>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder={"Phone"} minLength={8} maxLength={8} required/>
            </div>
            <label htmlFor="n1"> If company order please fill out</label>
            <div>
                <input type="text" id="company" value={Company} onChange={(e) => setCompany(e.target.value)}  placeholder={"Company name"} pattern="^[\p{L}\s-]+$"/>
            </div>
            <div>
                <input type="tel" id="VAT" value={VAT} onChange={(e) => setVAT(e.target.value)}  placeholder={"VAT.NO"} minLength={8} maxLength={8}/>
            </div>
            <div>
                <label htmlFor="subscribe">Subscribe to our newsletter?</label>
                <input type="checkbox" id="subscribe" checked={subscribe} onChange={handleSubscribeChange} />
            </div>
            <div>
                <button>Submit</button>
            </div>

        </form>

        </body>


        </html>
    );
};

export default CustomerCheckout;