// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
let string = '2+3 223 2223';
let result = string.match(/2\+3/); // или: string.match(/2.3/);
console.log(result);