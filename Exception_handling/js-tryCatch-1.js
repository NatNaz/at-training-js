/* В try catch конструкцию завернуть код: console.log(a), let a = 3. 
И вывести ошибку – ‘let перед использованием нужно объявить’. 
При выполнении 1/0  выводить ошибку 'на ноль делить нельзя' */
function exercise() {
  try {
    console.log(a);
    let a = 3;
    let b = 0;
    console.log(1 / b);
  } catch (e) {
    if ((e.name = "ReferenceError")) {
      console.log("let перед использованием нужно объявить");
    } else {
      throw e;
    }
  }
}
try {
  exercise();
  if (b === 0) {
    throw new TypeError("Infinity");
  }
} catch (e) {
  if (e.name == "TypeError") {
    console.log("На ноль делить нельзя");
  } else {
    throw e;
  }
}
