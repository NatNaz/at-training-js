// Создать объект car, добавить к нему свойство color со значением 'черный'
// Изменить свойство color объекта car на 'зеленый'
// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {};
car.color = 'чёрный';
car.color = 'зелёный';
car.power = (carPower) => console.log(`The engine power is ${carPower}`);
console.log(car);
car.power(100);