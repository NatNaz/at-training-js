function definePrime (number) {
    let numberToCheck = {
    value: number,
    prime: true
    };
    let dividers = [];
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        dividers.push(i);
    } 
        check:
    for (let a = 0; a <= dividers.length; a++) {
        let rest = number % dividers[a];
        if (rest !== 0) {
            continue check;
        } else {
            numberToCheck.prime = false;
          console.log('The number is composite');
        }
    }
    if (numberToCheck.prime != false) {
        console.log( 'The number is prime');
    }  
}