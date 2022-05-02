// Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
function dividion (arg1,arg2) {
    let result = arg1 / arg2;
    console.log (typeof(arg1) + ' / ' + typeof(arg2) + ' = ' + typeof(result) + '\n ' + arg1 + ' / ' + arg2 + ' = ' + result);
    }
    dividion ('secret ',true);
    dividion (false, ' secret');
    dividion (19, true);
    dividion (false, 22);
    dividion (5,' little monkeys');
    dividion ('Jackson ', 5);