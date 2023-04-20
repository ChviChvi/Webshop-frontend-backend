import { useState } from "react";
import { checkoutlist } from '../Basket';
import '../stylesheets/styles.css'; // import CSS styles
//<script src="https://kit.fontawesome.com/yourcode.js" crossOrigin="anonymous"></script>
import { BrowserRouter as Router,Routes, Route }
    from "react-router-dom";

import CustomerBasket from "./CustomerBasket";
import CheckoutForm from "./CustomerCheckout";
import Payment from "./Payment";
import RegistrationForm from "./UserRegistration";
import Login from "./Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/checkoutform" element={<CheckoutForm />}/>
                <Route path="/" element={<CustomerBasket/>}/>
                <Route path="/Payment" element={<Payment/>}/>
                <Route path="/Registration" element={<RegistrationForm/>}/>
                <Route path="/Login" element={<Login onSuccess={() => console.log('you have successfully loged in *smileyface*')} />} />


            </Routes>
        </Router>
    );
}

export default App;

