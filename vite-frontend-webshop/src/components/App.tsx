
import { BrowserRouter as Router,Routes, Route }
    from "react-router-dom";

import CustomerBasket from "./CustomerBasket";
import CheckoutForm from "./CustomerCheckout";
import Payment from "./Payment";
import RegistrationForm from "./UserRegistration";
import Login from "./Login";
import Homepage from "./Homepage";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/checkoutform" element={<CheckoutForm/>}/>
                <Route path="/Basket" element={<CustomerBasket/>}/>
                <Route path="/Payment" element={<Payment/>}/>
                <Route path="/Registration" element={<RegistrationForm/>}/>
                <Route path="/Login"
                       element={<Login onSuccess={() => console.log('you have successfully loged in *smileyface*')}/>}/>
                <Route path="/" element={<Homepage/>}/>

            </Routes>
        </Router>
    );
}

export default App;

