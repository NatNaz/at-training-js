function narcissistic(value) {
    // Code me to return true or false
  let arrOfValueDigits = Array.from(value.toString());
  console.log(arrOfValueDigits)
  let arrOfPoweredNumbers = [];
  for (let i = 0; i < arrOfValueDigits.length; i++) {
  arrOfPoweredNumbers.push(arrOfValueDigits[i] ** arrOfValueDigits.length)}
  console.log(arrOfPoweredNumbers);
  let sumOfPoweredNumbers = 0;
  for (let a = 0; a < arrOfPoweredNumbers.length; a++) {
  sumOfPoweredNumbers += arrOfPoweredNumbers[a];
  }
  console.log(sumOfPoweredNumbers);
  if (value === sumOfPoweredNumbers) {
  console.log(true);
  return(true);
  } else {
  console.log(false);
  return(false)
  }
  }
  narcissistic(371);