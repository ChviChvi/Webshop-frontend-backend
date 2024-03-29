import React, {useEffect, useState} from "react";

import {Link, useNavigate} from 'react-router-dom';
import '../stylesheets/reset.css';
import '../stylesheets/basket.css';
import '../stylesheets/Validation.css';


function CustomerBasket() {


    interface Product {
        id: string;
        name: string;
        price: number;
        currency: string;
        rebateQuantity: number;
        rebatePercent: number;
        upsellProductId: string | null;
        imageUrl: string;
    }


    // fetch the data from the API
    const [checkoutlist, setCheckoutlist] = useState<Product[]>([]);
    const [counts, setCounts] = useState<number[]>([]);


    // backendserver http://130.225.170.71:3000/product

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/larsthorup/checkout-data/main/product-v2.json')
            .then(response => response.json())
            .then(data => {
                setCheckoutlist(data);
                console.log(data);
                const initialCounts = new Array(data.length).fill(1);
                localStorage.setItem('counts', JSON.stringify(initialCounts));
                setCounts(initialCounts);
            })
            .catch(error => console.error(error));
    }, []);

    // update counts in localStorage whenever counts change
    useEffect(() => {
        localStorage.setItem('counts', JSON.stringify(counts));
    }, [counts]);



    // initialize a deleteButton state which is an empty array --.
    const [deleteButton, setDeleteButton] = useState(() => {
        const storedDeleteButton = localStorage.getItem('deleteButton');
        return storedDeleteButton !== null ? JSON.parse(storedDeleteButton) : [];
    });



    //initialize state that keeps track of the price reduction!
    const [priceReduction, setPriceReduction] = useState<boolean>(false);

    useEffect(() => {
        const storedCounts = localStorage.getItem('counts');

        if (storedCounts !== null) {
            setCounts(JSON.parse(storedCounts));
        }
        const storedDeleteButton = localStorage.getItem("deleteButton");
        if (storedDeleteButton) {
            setDeleteButton(JSON.parse(storedDeleteButton));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('counts', JSON.stringify(counts));
        localStorage.setItem("deleteButton", JSON.stringify(deleteButton));
    }, [counts, deleteButton]);


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
                <button className="decrement" onClick={clickHandlerDecrement}>-</button>
                <span data-testid="count" className="count">{count}</span>
                    <button  className="increment" onClick={clickHandlerIncrement}>+</button>
            </div>
        );
    }



    let rebate=0;

    // creates the table-body
    function listItems() {
         return checkoutlist.map((item, index) => {
             // we remove the row if the index of the row is in the removed array.
             if (deleteButton.includes(index)) return null;
             // here we calculate the total price.
             const total = item.price * counts[index];
             // handling the clicks for removing the item. -> adds index to of the item in the array initialized earlier.
             const clickHandlerRemove = () => {
                 const confirmed = window.confirm(`Are you sure you want to remove "${item.name}" from your basket?`);
                 if (confirmed) {
                     setDeleteButton((removed: any) => [...removed, index]);
                 }
             };


             if (item.rebateQuantity > 0 && counts[index] >= item.rebateQuantity) {
                 rebate += total - (total * (1 - item.rebatePercent / 100))
             }


             // 1 row with every id the item has. + deleteButton (item.d/pice/count/total)
             //<tr key={item.id}>
             //                 <td>{item.name}</td>
             //                 <td>
             //                     {item.price} {item.currency}
             const upsellProduct = item.upsellProductId ? checkoutlist.find(product => product.id === item.upsellProductId) : null;

             return (

                 <tr key={item.id} className="items">

                     <td className="remove-cell">
                         <button data-testid="remove" onClick={clickHandlerRemove} className="remove-button"></button>
                     </td>

                     <td className="image-cell">
                         <img src={item.imageUrl} alt={item.name} className="cell-img"/>
                     </td>
                     <td className="name-cell">
                         {item.name.split(", ").map((name, index, array) => (
                             <React.Fragment key={index}>
                                 {name}
                                 {index !== array.length - 1 && <br/>}
                             </React.Fragment>
                         ))}
                     </td>
                     <td className="counter-cell">
                         <Counter index={index}/>
                     </td>
                     <td className="price-cell">
                         {item.rebateQuantity > 0 && counts[index] >= item.rebateQuantity ? (
                             <>
                            <span
                                className="regular-price">{total.toFixed(0)} {item.currency}
                            </span>
                                 <br/>
                                 <span className="discounted-price">
                                {(total * (1 - item.rebatePercent / 100)).toFixed(0)} {item.currency}
                            </span>
                             </>
                         ) : (
                             <>
                                 <span> {total.toFixed(2)} {item.currency} </span>
                             </>
                         )}
                     </td>


                     <td className="offer-cell">
                         {item.rebatePercent > 0 && (
                             <>
                                 Buy {item.rebateQuantity} to get {item.rebatePercent} % off.
                             </>
                         )}
                     </td>

                     <td className="recommendation-cell">
                         {upsellProduct ? (
                             upsellProduct.name.split(", ").map((name, index, array) => (
                                 <React.Fragment key={index}>
                                     {name}
                                     {index !== array.length - 1 && <br/>}
                                 </React.Fragment>
                             ))
                         ) : null}
                     </td>
                 </tr>
             );
         });
     }

    // calculates the total price of all the items which are not in the deleteButton array.
    let totalSum = 0;
    for (let i = 0; i < checkoutlist.length; i++) {
        if (deleteButton.includes(i)) continue;
        const item = checkoutlist[i];
        const count = counts[i];

        totalSum += (item.price * count);


    }

    // have to add !priceReduction here otherwise there is an infinite loop
    if (totalSum > 300&& !priceReduction){
        setPriceReduction(true);
    }
    if (totalSum <= 300&& priceReduction){
        setPriceReduction(false);
    }



    let content;
    // Renders the headers, body, and bottom row.

    if (checkoutlist.length === deleteButton.length) {
        content = (
            <div>
                <p data-testid="goodluck">  Your basket is empty, good luck :)</p>
            </div>
        );
    } else {

        let newSum=0;
        if (totalSum>300){
             newSum=(totalSum-rebate)*0.9;
        }

        const oldPrice = priceReduction || rebate>0 ? "oldPrice" : "";
        const newPrice =  "newPrice";


        const checkoutIdAndQuantity: { product_id: string; quantity: number; }[] = [];
        //const checkoutCount: number[]=[];

        function handleSumSubmit () {

            for (let i = 0; i < checkoutlist.length; i++) {
                if (deleteButton.includes(i)) {
                    continue; // Skip this iteration
                }
                const productID = checkoutlist[i].id;
                const quantity = counts[i];
                //checkoutItems.push({ product_id: productID, count: count });
                //checkoutIds.push(product.id);
                checkoutIdAndQuantity.push({ product_id: productID, quantity: quantity });
            }
            localStorage.setItem('checkoutIdAndQuantity', JSON.stringify(checkoutIdAndQuantity));
            //localStorage.setItem('checkoutCount',JSON.stringify(checkoutCount))
            //localStorage.setItem('productID', JSON.stringify(checkoutIds));
            localStorage.setItem('sum',String(newSum));
        }

        content = (
            <>

                    <table>

                        <tbody>
                        {listItems()}
                        <tr className={`rows-css ${oldPrice}`}>
                            <td colSpan={5}>Total price:</td>
                            <td colSpan={2}>
                                {totalSum.toFixed(2)} DKK
                            </td>
                        </tr>
                        {priceReduction && (
                            <>
                                <tr className={`rows-css ${newPrice}`}>
                                    <td colSpan={5}>New price!</td>
                                    <td colSpan={2}>
                                        {newSum.toFixed(2)} {checkoutlist[0].currency}
                                    </td>
                                </tr>
                                <tr className={`rows-css ${newPrice}`}>
                                    <td colSpan={5}>You saved:</td>
                                    <td colSpan={2}>{((totalSum - newSum).toFixed(2))} {checkoutlist[0].currency}</td>
                                </tr>

                            </>
                        )}
                        {!priceReduction && rebate > 0 && (

                            <>
                                <tr className={`rows-css ${newPrice}`}>
                                    <td colSpan={5}>New price!</td>
                                    <td colSpan={2}>
                                        {(totalSum - rebate).toFixed(2)} {checkoutlist[0].currency}
                                    </td>
                                </tr>
                                <tr className={`rows-css ${newPrice}`}>
                                    <td colSpan={5}>You saved:</td>
                                    <td colSpan={2}>{((rebate).toFixed(2))} {checkoutlist[0].currency}</td>
                                </tr>

                            </>
                        )}


                        </tbody>
                    </table>


                <Link to="/checkoutform">
                    <button type="submit" onClick={handleSumSubmit} className={'toCheckout'}>Go to checkout <i
                        className="fa-solid fa-arrow-right fa-icon"></i></button>
                </Link>
            </>

        );
    }


    const handleSaveData = () => {
        const data = {
            checkoutlist,
            counts,
            deleteButton,
            priceReduction
        };
        fetch('http://130.225.170.71:3000/api/save-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <main>
            <div className="table-container">
                {content}
                <button type="submit" className={'toCheckout'}><Link to="/checkoutform">Go to checkout
                    <i className="fa-solid fa-arrow-right fa-icon"></i></Link></button>
            </div>

            </main>

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

