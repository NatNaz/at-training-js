// Напишите функцию вычисления типа аргумента и вывод типа в консоль
function defineTypeOfArgument(argument) {
  console.log(typeof argument);
}
defineTypeOfArgument("string");
defineTypeOfArgument(23);
defineTypeOfArgument(true);
defineTypeOfArgument(defineTypeOfArgument);
defineTypeOfArgument(undefined);
