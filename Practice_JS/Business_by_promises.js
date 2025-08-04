// Simulated database calls using promises

// product detain
function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Laptop', 'Phone', 'Watch', 'Tab', 'Speaker']);
        }, 1000);
    });
}

// order the product
function placeOrder(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product) {
                resolve(`Order placed for ${product}`);
            } else {
                reject('Product not found');
            }
        }, 1000);
    });
}

// Flow using promise chaining

//check abality of product
fetchProducts()
    .then(products => {
        console.log('Products:', products);
        return placeOrder(products[2]);
    })
    .then(confirmation => {
        console.log(confirmation);
    })
    .catch(err => {
        console.error(err);
    });