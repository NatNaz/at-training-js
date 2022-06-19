// Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
function multiplication(arg1, arg2) {
  let product = arg1 * arg2;
  console.log(
    typeof arg1 +
      " * " +
      typeof arg2 +
      " = " +
      typeof product +
      "\n " +
      arg1 +
      " * " +
      arg2 +
      " = " +
      product
  );
}
multiplication("secret ", true);
multiplication(false, " secret");
multiplication(19, true);
multiplication(false, 22);
multiplication(5, " little monkeys");
multiplication("Jackson ", 5);
