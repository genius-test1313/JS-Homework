// // --1--
// // 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// // 2) написати метод який буде виводити цю інформацію
// // 3) написати три варіанти студентів
// // 4) прикріпити знначення за допомогою call apply bind

// --рішення--

// const student = {
//   name: "Іван Іванов",
//   specialty: "Програмування",
//   averageGrade: 4.5,
//   missedClasses: 3,
//   displayInfo: function() {
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.specialty}`);
//     console.log(`Середній бал: ${this.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${this.missedClasses}`);
//   }
// };

// const student1 = {
//   name: "Анна Петрова",
//   specialty: "Математика",
//   averageGrade: 4.8,
//   missedClasses: 1
// };

// const student2 = {
//   name: "Василь Сідоров",
//   specialty: "Фізика",
//   averageGrade: 4.2,
//   missedClasses: 5
// };

// const student3 = {
//   name: "Ольга Кузьменко",
//   specialty: "Хімія",
//   averageGrade: 4.6,
//   missedClasses: 2
// };

// // метод call
// student.displayInfo.call(student1);
// student.displayInfo.call(student2);
// student.displayInfo.call(student3);

// // метод apply
// student.displayInfo.apply(student1);
// student.displayInfo.apply(student2);
// student.displayInfo.apply(student3);

// // метод bind
// const displayStudent1Info = student.displayInfo.bind(student1);
// const displayStudent2Info = student.displayInfo.bind(student2);
// const displayStudent3Info = student.displayInfo.bind(student3);

// displayStudent1Info();
// displayStudent2Info();
// displayStudent3Info();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// --рішення--

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('htmlButton').addEventListener('click', () => {
//         document.getElementById('definition').textContent = 'HTML (HyperText Markup Language) — this is the standard document markup language on the Internet.';
//     });

//     document.getElementById('cssButton').addEventListener('click', () => {
//         document.getElementById('definition').textContent = 'CSS (Cascading Style Sheets) — it is a language to describe the appearance of a document written using HTML.';
//     });
// });

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// --рішення--

// function shop(productName, pricePerKg, quantity) {
//     const totalCost = pricePerKg * quantity;
//     return `${productName}: ${totalCost} грн`;
// }
// console.log(shop("banana", 30, 4.5)); 
// console.log(shop("cherry", 58, 1.3)); 
// console.log(shop("orange", 89, 3.4)); 