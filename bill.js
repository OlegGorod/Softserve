let bill = [{
    name: "iphone",
    quantity: 1,
    price: 10000
},{
    name: "puma",
    quantity: 1,
    price: 3200
},{
    name: "ZARA",
    quantity: 1,
    price: 750
},{
    name: "SONY",
    quantity: 1,
    price: 2400
}];

console.log(JSON.stringify(bill, null, 2));

function overallPrice(data) {
    let total = 0;
     for (let i = 0; i < data.length; i++) {
            total += data[i].price;
        }
    return total;
}
console.log(overallPrice(bill));

function maxPrice(data) {
    let maxPrice = [];
   for (let i = 0; i < data.length; i++) {
   maxPrice.push(data[i].price);
  } return Math.max.apply(null, maxPrice);
}
console.log(maxPrice(bill));

function averagePrice(data) {
    let product = 0;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        product = data.length;
        total += data[i].price;
      }
    return total / product;
}
console.log(averagePrice(bill));



