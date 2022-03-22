function definePrime (number) {
    let numberToCheck = {
    value: number,
    prime: true
    };
    check:
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
               let rest = number % i;
        if (rest !== 0) {
            continue check;
        } else {
            numberToCheck.prime = false;
          console.log('The number is composite! ' + number + ' divides by ' + i + '.');
        }
    }
    if (numberToCheck.prime != false) {
        console.log( 'The number is prime!');
    }  
}