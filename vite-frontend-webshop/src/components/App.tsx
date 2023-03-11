import { useState } from "react";
import { checkoutlist } from '../Basket';
import '../stylesheets/styles.css'; // import CSS styles
import { BrowserRouter as Router,Routes, Route }
    from "react-router-dom";

import CustomerBasket from "./CustomerBasket";
import CheckoutForm from "./CustomerCheckout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/checkoutform" element={<CheckoutForm />}/>
                <Route path="/" element={<CustomerBasket/>}/>
            </Routes>
        </Router>
    );
}

export default App;

