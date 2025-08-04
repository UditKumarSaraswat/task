// Simulated database calls using callbacks

// the product detail which product is abalable.

function fetchProducts(callback) {
    setTimeout(() => {
        const products = ['Laptop', 'Phone', 'Watch', 'Tab', 'Speaker'];
        callback(null, products);
    }, 1000);
}

//place the order for the product. 

function placeOrder(product, callback) {
    setTimeout(() => {
        if (product) {
            callback(null, `Order placed for ${product}`);
        } else {
            callback('Product not found');
        }
    }, 1000);
}

// Flow

// check the product abality

fetchProducts((err, products) => {
    if (err) return console.error(err);

    console.log('Products:', products);

    placeOrder(products[0], (err, confirmation) => {
        if (err) return console.error(err);

        console.log(confirmation);
    });
});