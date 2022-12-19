// Konkatenatsiya

/*const name = "Sharifjon";
const age = 20;

console.log(
  "Salom mening ismim" + " " + name + " " + "mening yoshim" + " " + age + "da"
);

console.log(`Salom mening ismim ${name}. Mening yoshim ${age}da`);//ecmascript 6 new version */

//strings

let s = "Salom, men, JavaScriptni, o'rganayapman";
console.log(s.length); // bu uzunligni aniqlab beradi
console.log(s.toLocaleUpperCase()); //bir xil pastdagi bilan
console.log(s.toUpperCase()); // bu hammasini bosh harfga o'tkazadi
console.log(s.substring(0, 5)); // bu kesib oladi
console.log(s.split(``)); // bu har bir harfni arrayga o'tkazib beradi
console.log(s.split(" ")); // orasiga probel qo'ysa har bir yozilgan so'zni qirqib beradi
console.log(s.split(", ")); // ichida belgidan keyingi har bir elementni olib beradi va bu belgi oynadi ko'rinmaydi
console.log(s.charAt(3)); // gapdagi indeksi bo'yicha 1 dona harfni kesib beradi
console.log(s.localeCompare(s)); // to'g'ri yoki noto'g'ri ekanligini bildiradi

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // bu qo'shib beradi --qavs ichiga probel tashlasa joy tashlaydi yoki biron  belgi yoki harf beriladi--
console.log(s.endsWith("o'rganayapman", 40)); // bu gapda shu so'z borligini va nechta harf borligi haqida true yoki false habarini beradi (probel hisobga olinmaydi)
