import React, {useState} from "react";
import {checkoutlist} from "../Basket";
import { Link } from 'react-router-dom';
import '../stylesheets/styles.css'; // import CSS styles


function CustomerBasket() {

    // Initialize 'counts' state with 0 for each item in the basket.js
    const [counts, setCounts] = useState<number[]>(new Array(checkoutlist.length).fill(1));
    // initialize a deleteButton state which is an empty array --.
    const [deleteButton, setDeleteButton] = useState<number[]>([]);


    //initialize state that keeps track of the price reduction!
    const [priceReduction, setPriceReduction] = useState<boolean>(false);

    // Adds count button +/- and function
    function Counter({index }:{ index: number}) {
        const count = counts[index];
        const clickHandlerIncrement = () => {
            setCounts((counts: number[]) =>
                counts.map((c, i) =>(i === index ? c + 1 : c)));
        };
        const clickHandlerDecrement = () => {
            setCounts((counts: number[]) =>
                counts.map((c, i) => (i === index && c > 0 ? c - 1 : c))
            );
        };
        return (
            <div>
                <button onClick={clickHandlerDecrement}>-</button>
                <span>{count}</span>
                <button  onClick={clickHandlerIncrement}>+</button>
            </div>
        );
    }



    // creates the table-body
    const listItems = checkoutlist.map((item, index) => {
        // we remove the row if the index of the row is in the removed array.
        if (deleteButton.includes(index)) return null;
        // here we calculate the total price.
        const total = item.price * counts[index];
        // handling the clicks for removing the item. -> adds index to of the item in the array initialized earlier.
        const clickHandlerRemove = () => {
            const confirmed = window.confirm(`Are you sure you want to remove ${item.id} from your basket?`);
            if (confirmed) {
                setDeleteButton((removed) => [...removed, index]);
            }
        };
        // 1 row with every id the item has. + deleteButton (item.d/pice/count/total)
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    {item.price} {item.currency}
                </td>
                <td>
                    <Counter index={index} />
                </td>
                <td>
                    {total} {item.currency}
                </td>

                <td>
                    <button onClick={clickHandlerRemove}>Remove</button>
                </td>


            </tr>
        );
    });

    // calculates the total price of all the items which are not in the sletknap array.
    let totalSum = 0;
    for (let i = 0; i < checkoutlist.length; i++) {
        if (deleteButton.includes(i)) continue;
        const item = checkoutlist[i];
        const count = counts[i];
        totalSum += item.price * count;
    }

    // have to add !priceReduction here otherwise there is an infinite loop
    if (totalSum > 1000&& !priceReduction){
        setPriceReduction(true);
    }

    let content;
    // Renders the headers, body, and bottom row.

    if (checkoutlist.length === deleteButton.length) {
        content = (
            <div>
                <p>Your basket is empty, good luck :)</p>
            </div>
        );
    } else {

        const oldPrice = priceReduction ? "oldPrice" : "";
        const newPrice =  "newPrice";

        content = (
            <div>
                <table>
                    <thead>
                    <tr className="id-headers">
                        <td>ID</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Remove</td>
                    </tr>
                    </thead>
                    <tbody>
                    {listItems}
                    <tr className={`rows-css ${oldPrice}`}>
                        <td colSpan={4}>Total price:</td>
                        <td>
                            {totalSum} {checkoutlist[0].currency}
                        </td>
                    </tr>
                    {priceReduction == true && (
                        <tr className={`rows-css ${newPrice}`}>
                            <td colSpan={4}>New price!</td>
                            <td>
                                {totalSum * 0.90} {checkoutlist[0].currency}
                            </td>
                        </tr>
                    )}


                    </tbody>
                </table>

            </div>

        );


    }
    return (
        <div>
            {content}
            <button type="submit"><Link to="/checkoutform">Go to checkout</Link></button>
        </div>

    );
}
/*
function AllItems(){
    const listItems = checkoutlist.map((item, index) => {
       const id = item.id

    return (
        <ul>
            <li>
                {id} <button>+</button>
            </li>
        </ul>

    );
    });
    return(

    listItems);
}

function CheckoutForm(){

    return(
        <section>
            <h2>Payment information</h2>
            <p>
                <label htmlFor="card">
                    <span>Card type:</span>
                </label>
                <select id="card" name="usercard">
                    <option value="visa">Visa</option>
                    <option value="mc">Mastercard</option>
                    <option value="amex">American Express</option>
                </select>
            </p>
            <p>
                <label htmlFor="number">
                    <span>Card number:</span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input type="tel" id="number" name="cardnumber"/>
            </p>
            <p>
                <label htmlFor="expiration">
                    <span>Expiration date:</span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input
                    type="text"
                    id="expiration"
                    required="true"
                    placeholder="MM/YY"
                    pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"/>
            </p>
        </section>);

}

BELONGS IN  App() --------
 <div className="myDiv">
            <AllItems/>
        </div>
--------------------------
 */


export default CustomerBasket;