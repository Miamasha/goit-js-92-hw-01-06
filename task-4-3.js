console.log("--------- Task 3");

// Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName 
// та змінювати значення властивості username на нове. Нічого не повертає.

// Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours 
// та збільшити на нього значення властивості playTime. Нічого не повертає.

// Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, 
// де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.

// Для звернення до властивостей об’єкта в його методах використовується this

const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        // if (newName) {
            this.username = newName;
            // console.log(this.username);
        // }
    },

    updatePlayTime(hours) {
        this.playTime += hours; 
        // console.log(this.playTime);
    },

    getInfo() {
        // console.log(`${this.username} has ${this.playTime} active hours!`);
        return `${this.username} has ${this.playTime} active hours!`;
    },
};
// profile.changeUsername("John");
// profile.updatePlayTime(8)
// profile.getInfo()


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"