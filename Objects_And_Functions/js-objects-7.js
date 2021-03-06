// Напишите функцию, которая определяет является ли число простым или нет

function definePrime(number) {
  if (number <= 1) {
    console.log(number + " can't be defined as prime.");
  } else {
    let numberToCheck = {
      value: number,
      prime: true,
    };

    check: for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
      let rest = number % i;
      if (rest !== 0) {
        continue check;
      } else {
        numberToCheck.prime = false;
        console.log(
          "The number is composite! " + number + " divides by " + i + "."
        );
      }
    }
    if (numberToCheck.prime !== false) {
      console.log("The number is prime!");
    }
  }
}
definePrime(23);
definePrime(137);
definePrime(4);
