let myStorePrices = {
    "body scrub": 5.99,
    "floss": 2.99,
    "edge control": 3.99,
    "holding spray": 4.99,
    "protein powder": 19.99,
    "creatine": 14.99,
    "vaseline": 3.49,
    "salicylic acid": 8.99,
};

let myShoppingCart = ["body scrub", "edge control", "floss", "protein powder","salicylic acid"];
let addition = (cart) => {
    let total = 0;
    for (let item of cart) {
        if (myStorePrices[item] !== undefined) {
            total += myStorePrices[item];
        } else {
            console.log(`Item "${item}" not found in store prices.`);
        }
    }
    return total;
}       
let totalCost = addition(myShoppingCart);
console.log("Total cost of items in the shopping cart: $" + totalCost.toFixed(2));

