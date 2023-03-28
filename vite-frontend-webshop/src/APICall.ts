
export function postOrder (){
/*
    const formData = {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        Address: localStorage.getItem('Address'),
        Address2: localStorage.getItem('Address2'),
        postNumber: localStorage.getItem('postNumber'),
        City: localStorage.getItem('City'),
        Country: localStorage.getItem('Country'),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        Company: localStorage.getItem('Company'),
        VAT: localStorage.getItem('VAT'),
        Comment: localStorage.getItem('Comment'),
        Subscribe: localStorage.getItem('subscribe'),
        Conditions: localStorage.getItem('conditions'),
        ProductIDs: localStorage.getItem('productID'),
        CheckoutCount:localStorage.getItem('checkoutCount'),
        Sum: localStorage.getItem('sum'),
    };

    fetch('http://130.225.170.71:3000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Display success message
        })
        .catch(error => {
            console.error(error); // Handle error
        });

 */


    const formData = {
        firstName: localStorage.getItem('firstName' ),
        lastName: localStorage.getItem('lastName' ),
        Address: localStorage.getItem('Address' ),
        Address2: localStorage.getItem('Address2' ),
        postNumber: localStorage.getItem('postNumber' ),
        City: localStorage.getItem('City' ),
        Country: localStorage.getItem('Country' ),
        email: localStorage.getItem('email' ),
        phone: localStorage.getItem('phone' ),
        Company: localStorage.getItem('Company' ),
        VAT: localStorage.getItem('VAT' ),
        Comment: localStorage.getItem('Comment'),
        Subscribe: localStorage.getItem('subscribe' ),
        Conditions: localStorage.getItem('conditions' ),
        Sum: localStorage.getItem('sum'),
        items: localStorage.getItem('checkoutIdAndQuantity' )
    };


// fetching from localhost http://localhost:3000/order

// fetching from backend server http://130.225.170.71:3000/order

    fetch('http://130.225.170.71:3000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Display success message
        })
        .catch(error => {
            console.error(error); // Handle error
        });


}

