// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let a = 1;
// let b = 0;
// let c = -3;

// (a>0) ? console.log(true) : console.log(false);
// (b>0) ? console.log(true) : console.log(false);
// (c>0) ? console.log(true) : console.log(false);


// Якщо змінна ="test" - виведіть true,
// Перевірте це на варіантах  'test', "qwerty", true

// let a = 'test'
// let b = "qwerty"
// let c = true

// if (a === "test") {
//     console.log(true);
// }
// if (b === "test") {
//     console.log(true);
// }
// if (c === "test") {
//     console.log(true);
// }


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let a = 1;
// let b = 10;
// let c = 13;

// if (a > 10) {
//     a = a - 5;
// } else if (a < 10) {
//     a = a + 5;
// }
// console.log(a);

// if (b > 10) {
//     b = b - 5;
// } else if (b < 10) {
//     b = b + 5;
// }
// console.log(b);

// if (c > 10) {
//     c = c - 5;
// } else if (c < 10) {
//     c = c + 5;
// }
// console.log(c);


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Ввeдіть число відповідне місяцю:");

// if (month === "1") {
//     console.log("Січень");
// } else if (month === "2") {
//     console.log("Лютий");
// } else if (month === "3") {
//     console.log("Березень");
// } else if (month === "4") {
//     console.log("Квітень");
// } else if (month === "5") {
//     console.log("Травень");
// } else if (month === "6") {
//     console.log("Червень");
// } else if (month === "7") {
//     console.log("Липень");
// } else if (month === "8") {
//     console.log("Серпень");
// } else if (month === "9") {
//     console.log("Вересень");
// } else if (month === "10") {
//     console.log("Жовтень");
// } else if (month === "11") {
//     console.log("Листопад");
// } else if (month === "12") {
//     console.log("Грудень");
// } else {
//     console.log("Невірний номер місяця");
// } 


// Зробіть сервіс який отримує тризначне число
// Поверніть користувачу сумму цих чисел

// const number = prompt("Введіть тризначне число:");

// if (number.length === 3 && !isNaN(number)) {
//     const digit1 = Number(number[0]);
//     const digit2 = Number(number[1]);
//     const digit3 = Number(number[2]);

//     const sum = digit1 + digit2 + digit3;

//     console.log("Сума цифр:", sum);
// } else {
//     console.log("Будь ласка, введіть коректне тризначне число.");
// }


