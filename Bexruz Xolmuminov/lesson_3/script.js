//Array - o'z ichida ko'plab o'zgaruvchilarni qabul qiladigan o'zgaruvchi

const arr = new Array(1, 2, 3, 4);
const cars = ["BMW", "Mercedes", "Tayota"];

console.log(cars.push("Nexia")); // bu oxiridan qo'shadi
console.log(cars.pop()); //bu doim oxiridagi elementni ayirib tashlaydi
console.log(cars.unshift("Ford")); // bu boshidan qo'shib beradi
console.log(cars.shift()); // bu boshidan o'chirib beradi
console.log(cars[1]); // bu aynan bittasini olib beradi indexsi bo'yicha
console.log((cars[4] = "Tesla")); // bu oxirgi indexsini ko'rib olinadi va shunga 1 ni qo'shib unga bironta elementni biriktirib qo'yiladi
console.log(Array.isArray(cars)); // bu arrayning protatipi va bu aynan array yoki arraymasligini aniqlab beradi true yoki false orqali
console.log(cars.indexOf("Nexia")); // bu aynan qaysi index da ekanligini aniqlab beradi va berilayotgan ma'lumot bir xil yozilishi kerak
console.log(cars.length); // bu uzunligini aniqlab beradi
console.log(cars.reverse()); //  bu arrayni teskari tartibda yozib beradi

const books = ["Alximik", "451 gradus Farangeyt"];
console.log(cars.concat(books)); // bu 2 ta arrayni umumiy bitta arrayga aylantirib qo'shib beradi

console.log(Object.keys(cars)); // bu indexlarini ko'rsatib beradi
cars.forEach((e) => console.log(e)); // bu har birini aylanib chiqadi va alohida ko'rsatib beradi
console.log(cars.filter((w) => w.length !== 4)); //bu qandaydir bir shartni berilganda o'sha shart bajarilgandagi natijani qaytaradi va bu ham array qaytaradi
console.log(cars);

console.log(cars.splice(4, 1, "Matiz"));
// console.log(cars.splice(0, 3));// bu kesib beradi index bo'yicha
console.log(cars.sort());
