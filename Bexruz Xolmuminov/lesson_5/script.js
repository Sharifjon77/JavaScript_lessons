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

// sikl bu biron bir jarayonni yolg'on bo'lib qolmaguncha bajariladigan amal hisoblanadi
//for loop
for (let i = 0; i <= 8; i++) {
  console.log("for loop", i);
}

//while loop
let i = 0;
while (i < 8) {
  console.log("while loop", i);
  i++;
}

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}

//for of loop

for (let book of books) {
  console.log(book.title);
} // bu tepadi bilan bir xil va bu aptimal yechim

//high order array method
//forEach, map, filter asosiylari

books.forEach(function (book) {
  console.log(book.title);
});

const bookTitles = books.map(function (book) {
  return book.title;
}); // map yangi bir array qaytaradi

console.log(bookTitles);

const bookFilter = books.filter(function (book) {
  return book.id !== 1; // bu amal 1 ga teng bo'lmagan barcha ma'lumotlarni chiqarib beradi
}); //bu qandaydir bir shartni berilganda o'sha shart bajarilgandagi natijani qaytaradi va bu ham array qaytaradi
// bunda odatda o'chirish uchun ishlatiladi

console.log(bookFilter);

const bookFilter2 = books
  .filter(function (book) {
    return book.id !== 1;
  })
  .map(function (book) {
    return book.title;
  }); // nutqta qo'yib yana biron bir metodlarni bajarsa bo'ladi

console.log(bookFilter2);
