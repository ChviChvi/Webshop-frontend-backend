/**
import CustomerBasket from "../unused_files/CustomerBasket";
import CheckoutForm from "./CustomerCheckout";
import Payment from "./Payment";
import RegistrationForm from "./backend/UserRegistration";
import Login from "./backend/Login";
import Homepage from "./Homepage";

function App() {
    let page = location.pathname;

    console.log(page);

    window.addEventListener("hashchange", funktiehiermaken)

    function funktiehiermaken(event: any) {
        console.log(event);
    }

    if (page == '/checkoutform') {
        return <CheckoutForm/>;
    } else if (page == '/basket') {
        return <CustomerBasket/>;
    } else if (page == '/Payment') {
        return <Payment/>;
    } else if (page == '/registration') {
        return <RegistrationForm/>;
    } else if (page == '/Login') {


        return (
            <Login
                onSuccess={() =>
                    console.log('you have successfully loged in *smileyface*')
                }
            />
        );
    } else {
        return <Homepage/>;
    }
}


export default App;

*/
 import { BrowserRouter as Router,Routes, Route }
 from "react-router-dom";

 import CheckoutForm from "./CustomerCheckout";
 import Payment from "./Payment";
 import RegistrationForm from "./backend/UserRegistration";
 import Login from "./backend/Login";
 import Homepage from "./Homepage";



 function App() {
    return (
        <Router>
            <Routes>
                <Route path="/checkoutform" element={<CheckoutForm/>}/>
                <Route path="/Payment" element={<Payment/>}/>
                <Route path="/registration" element={<RegistrationForm/>}/>
                <Route path="/Login"
                       element={<Login onSuccess={() => console.log('you have successfully loged in *smileyface*')}/>}/>
                <Route path="/" element={<Homepage/>}/>
            </Routes>
        </Router>
    );
}

 export default App;
