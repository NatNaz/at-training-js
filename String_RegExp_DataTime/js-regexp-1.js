/* Дана строка 'ahb acb aeb aeeb adcb axeb'. 
Напишите регулярное выражение, которое найдет строки ahb, acb, aeb 
пo шаблону: буква 'a', любой символ, буква 'b' */
let string = "ahb acb aeb aeeb adcb axeb";
console.log(string.match(/a.b/g));
