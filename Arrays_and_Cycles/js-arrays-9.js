// Реализовать цикл, который выводит в консоль простые числа
function logPrimeNumbersFromTo(fromNumber, toNumber) {
  prime: for (let i = fromNumber; i < toNumber; i++) {
    for (let a = 2; a < i; a++) {
      if (i % a == 0) continue prime;
    }
    console.log(i);
  }
}

logPrimeNumbersFromTo(4, 27);
