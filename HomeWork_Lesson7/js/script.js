// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей


// --рішення--

function Calculator() {
    this.read = function() {
        this.a = +prompt("Введіть перше значення:", 0);
        this.b = +prompt("Введіть друге значення:", 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

const calculator = new Calculator();

calculator.read();

console.log("Сума: " + calculator.sum());
console.log("Множення: " + calculator.mul());