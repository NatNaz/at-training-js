// Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let today = new Date;
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
console.log ('Date: ' + date);
console.log ('Month: ' + (month+1));
console.log ('Year: ' + year);