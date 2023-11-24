console.log("--------- Task 4");

function getShippingCost(country) {
    
    switch (country) {
        
        case "China":
            return "Shipping to China will cost 100 credits";
            break;

        case "Chile":
            return "Shipping to Chile will cost 250 credits";
            break;

        case "Australia":
            return "Shipping to Australia will cost 170 credits";
            break;

        case "Jamaica":
            return "Shipping to China will cost 120 credits";
            break;

    default:
        return "Sorry, there is no delivery to your country";
    }

}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое 
// равенство со всеми значениями в блоках case значение по порядку, сверху вниз:

// switch (значение) {
//     case значение:
//       инструкции;
//       break;

//     case значение:
//       инструкции;
//       break;

//     default:
//       инструкции;
//   }

// 
// let product = "Droid";
// product[2] = "a";
// console.log(product); //Droid

// product.replace(`o`, `a`);
// console.log(product); //Draid

// Два масиви ніколи не дорівнюють один одному, 
// навіть якщо вони порожні або в них однакові елементи.
// Mасиви містять однакові значення, але оператор === поверне false, 
// тому що він перевіряє рівність посилань на масиви, а не самих елементів усередині масивів.
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2); // false
// console.log([] === []); // false

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1;
// arr2[2] = 1;
// console.log(arr2); //[1, 1, 1]

// Усі примітивні типи присвоюються за значенням, тобто створюється копія.
// Масиви (складний тип) присвоюються за посиланням, тобто змінна просто 
// отримує посилання (покажчик у пам'яті) на вже існуючий масив. Тепер a і b 
// вказують на один і той самий масив. Те, що зберігається в b, також змінилося, 
// тому що b, як і a, просто містить посилання на одне й те саме місце в пам'яті — масив.
// let a = 5;
// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// a = 10;
// console.log(a); // 10
// console.log(b); // 5

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]
// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]
// b[0] = "Ajax";
// console.log(a); // ["Ajax", "Jacob"]
// console.log(b); // ["Ajax", "Jacob"]
