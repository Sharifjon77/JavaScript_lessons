//Object

const user = {
  name: "Sharifjon",
  lastName: "Yulchiboev",
  age: 20,
  hobbies: ["football", "music", "computer games"],
  adress: {
    street: "Semurg'",
    city: "Namangan",
  },
};

console.log(user);
console.log(user.name); // aynan bir key ni olish usuli
console.log(user.hobbies[0]); //obyekt ichidagi arraydan bir donasini olish
console.log(user.adress.city); // object ichidagi objectdan bir dona elementni olish usuli

//DESTRUKTURIZATSIYA

const {
  name,
  lastName,
  age,
  adress: { city },
} = user; //obyekni ichidagi keylarni o'zida jamlab oladi
console.log(city);

user.email = "sharifjon@gmail.com"; // obyektga yangi ma'lumot qo'shish

console.log(user);

const books = [
  {
    id: 1,
    title: "JavaScript",
    isRead: false,
  },
  {
    id: 2,
    title: "Python",
    isRead: true,
  },
  {
    id: 3,
    title: "Java",
    isRead: false,
  },
];

console.log(books[1].title);

let booksJSON = JSON.stringify(books); // json formatga o'tkazib beradi
let book2JSON = JSON.parse(booksJSON); // json formatdagi faylni obyektga aylantirib beradi

console.log(booksJSON);
console.log(book2JSON);
