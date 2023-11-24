console.log("--------- Task 2");

// Створи клас Storage, який створюватиме об'єкти для управління складом
// товарів. Клас очікує один аргумент — початковий масив товарів,
// який записується до створеного об'єкта в приватну властивість items.
// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів
// у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і
// видаляє його з масиву товарів у приватній властивості items об'єкта.

class Storage {
    // #items = [];
    #items
    constructor (items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        // this.#items.filter(item => item != itemToRemove);
        this.#items = this.#items.filter(item => item !== itemToRemove);
        
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// const values = [51, -3, 27, 21, -68, 42, -37];
// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color)
//     };

// const getUsersWithAge = (users, minAge, maxAge) => {
//     let usersWithAge = users.filter(user => user.age >= minAge && user.age <= maxAge);
//       return usersWithAge;  
//     };