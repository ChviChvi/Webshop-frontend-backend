import { BrowserRouter as Router,Routes, Route }
    from "react-router-dom";

import CustomerBasket from "./CustomerBasket";
import CheckoutForm from "./CustomerCheckout";
import Payment from "./Payment";
import RegistrationForm from "./UserRegistration";
import Login from "./Login";
import Homepage from "./Homepage";






function App() {
    let page = location.pathname;

    console.log(page);

    window.addEventListener("hashchange",funktiehiermaken)

    function funktiehiermaken(event:any){
        console.log(event);
    }

    if (page == '/checkoutform') {
        return <CheckoutForm />;
    } else if (page == '/basket') {
        return <CustomerBasket />;
    } else if (page == '/Payment') {
        return <Payment />;
    } else if (page == '/registration') {
        return <RegistrationForm />;
    } else if (page == '/Login') {



        return (
            <Login
                onSuccess={() =>
                    console.log('you have successfully loged in *smileyface*')
                }
            />
        );
    } else {
        return <Homepage />;
    }
}


export default App;

