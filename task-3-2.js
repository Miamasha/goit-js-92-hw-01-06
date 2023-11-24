console.log("--------- Task 2");

// Якщо кількість елементів у новому масиві перевищує maxLength, 
// функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.


function makeArray(firstArray, secondArray, maxLength) {
return firstArray.concat(secondArray).slice(0, maxLength);
}


// function makeArray(firstArray, secondArray, maxLength) {
//     const union = firstArray.concat(secondArray);
//     if (union.length > maxLength) {
//         return union.slice(0, maxLength);
//     } else {
//         return union;
//     }
// }

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 7)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []