// Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
function division(arg1, arg2) {
  let result = arg1 / arg2;
  console.log(
    typeof arg1 +
      " / " +
      typeof arg2 +
      " = " +
      typeof result +
      "\n " +
      arg1 +
      " / " +
      arg2 +
      " = " +
      result
  );
}
division("secret ", true);
division(false, " secret");
division(19, true);
division(false, 22);
division(5, " little monkeys");
division("Jackson ", 5);
