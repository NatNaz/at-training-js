/* В try catch конструкцию завернуть код: console.log(a), let a = 3. 
И вывести ошибку – ‘let перед использованием нужно объявить’. 
При выполнении 1/0  выводить ошибку 'на ноль делить нельзя' */
try {
  console.log(a);
  let a = 3;
} catch (e) {
  if ((e.name = "ReferenceError")) {
    console.log("let перед использованием нужно объявить");
  } else {
    throw e;
  }
}

function exercise() {
  let b = 1 / 0;
  if (b === Infinity) {
    throw new TypeError("Infinity");
  } else {
    console.log(b);
  }
}
try {
  exercise();
} catch (e) {
  if (e.name == "TypeError") {
    console.log("На ноль делить нельзя");
  } else {
    throw e;
  }
}
