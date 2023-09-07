/**
 * [A function that calculates the total price of all products after applying a discount.]
 *
 * @param {object} data - [Includes the amount of discount and infos of products include name and price]
 * @returns {number} [The total price of all products after applying a discount]
 */



function calculate(data) {
    // 1. Calculate the total price
    let totalPrice = 0;
    for (let i = 0; i < data.products.length; i++) {
        totalPrice += data.products[i].price;
    }

    // 2. Apply the discount
    return totalPrice * (1 - data.discount);
}

const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});

console.log(discountedPrice)
