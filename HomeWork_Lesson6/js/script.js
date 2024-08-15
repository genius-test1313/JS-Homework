// Cтворити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні


class Abonent {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getPhone() {
        return `Name: ${this.name}, Phone: ${this.phone}`;
    }
}

const user1 = new Abonent('Alex', '123-456-7890');
const user2 = new Abonent('Mari', '098-765-4321');
const user3 = new Abonent('Ivan', '555-555-5555');

console.log(user1.getPhone()); 
console.log(user2.getPhone()); 
console.log(user3.getPhone());