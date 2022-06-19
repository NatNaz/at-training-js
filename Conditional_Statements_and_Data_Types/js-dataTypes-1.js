// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
function addition(arg1, arg2) {
  let sum = arg1 + arg2;
  console.log(
    typeof arg1 +
      " + " +
      typeof arg2 +
      " = " +
      typeof sum +
      "\n " +
      arg1 +
      " + " +
      arg2 +
      " = " +
      sum
  );
}
addition("secret ", true);
addition(false, " secret");
addition(19, true);
addition(false, 22);
addition(5, " little monkeys");
addition("Jackson ", 5);
