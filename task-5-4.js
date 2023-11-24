console.log("--------- Task 4");

// Функція має використовувати ланцюжок виклику методів та повертати загальний 
// баланс користувачів, стать яких збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//     return users.filter(user => user.gender === gender)
//                 .reduce((akk, user) => {return akk + user.balance;}, 0)
// }

// Best from #94 & #62:
const getTotalBalanceByGender = (users, gender) => {
    return users.filter(user => user.gender === gender)
                .reduce((akk, user) => akk + user.balance, 0)
}

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 }, ];
//   const totalScore = students.reduce((akk, student) => {
//     return akk + student.score; }, 0);

// From group #62
// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//    .filter(user => user.gender === gender)
//    .reduce((akku, user) => akku + user.balance, 0);
//  };


const NowUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(NowUsers, "male")); // 12053

console.log(getTotalBalanceByGender(NowUsers, "female")); // 8863