console.log("--------- Task 1");

function isEnoughCapacity(products, containerSize) {
    // products = { apples: 2, grapes: 4 }

    
let quantityOfItems = 0;
const allQuantities = Object.values(products);


for (i = 0; i < allQuantities.length; i += 1) {
    quantityOfItems += allQuantities[i];
}


if (quantityOfItems <= containerSize) {
    return `${quantityOfItems}, true`;
}  else {
return `${quantityOfItems}, false`;
}

}

console.log( isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) ); // true
console.log( isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) ); // false
console.log( isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14) ); // true
console.log( isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7) ); // false