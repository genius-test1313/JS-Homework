// --1--
// Перепишіть функцію використовуючи '?' або '||'

// function checkAge(age) {
//       if (age > 18) {
//        return true;
//          } else {
// return confirm ('Батьки дозволили?');
//  }
// }

// --рішення--
// -- оператор ?--
// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }
// checkAge(25);

// --оператор ||
//     function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
//     }
// checkAge(18);

// --2--
// Напишіть функцію min(a,b), яка повертає манше з двух чисел a та b

// --рішення--
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(3, 5));
// console.log(min(10, 7));
// console.log(min(4, 4));

// --3--
// Перепишіть з використанням стрілкових функцій.
// Замініть Функціональні вирази на стрілкові функції у коді нижче:

// function asc (question, yes, no) {
//    if (confirm(question)) yes ();
//     else (no);
// }
// ask (
//   "Ви згодні?",
// function() {alert("Ви погодились.");} ,
// function() {alert("Ви скасували виконання."); }
// );

// --рішення--
// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// };

// ask(
//     "Ви згодні?",
//     () => alert("Ви погодились."),
//     () => alert("Ви скасували виконання.")
// );












