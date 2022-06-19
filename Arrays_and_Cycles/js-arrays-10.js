// Реализовать цикл, который выводит в консоль нечетные числа
function logOddNumbersFromTo(fromNumber, toNumber) {
  odd: for (let i = fromNumber; i <= toNumber; i++) {
    if (i % 2 == 0) continue odd;
    console.log(i);
  }
}
logOddNumbersFromTo(12, 27);
