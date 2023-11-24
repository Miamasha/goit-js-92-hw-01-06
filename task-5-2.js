console.log("--------- Task 2");

// Функція має повертати масив усіх користувачів із масиву users, 
// у яких є друг з іменем friendName. Якщо користувачів, у яких є такий друг
// немає, то функція має повернути порожній масив.

const getUsersWithFriend = (allUsers, friendName) => {
    return allUsers.filter(user => user.friends.includes(friendName));
}

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 }, ];
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi
// // У колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  
  console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  // [
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  // [
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []