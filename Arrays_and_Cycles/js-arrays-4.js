// Преобразовать числовой массив в Boolean
let numbers = [12,34,4,0,22];
let booleanNumbers = numbers.map(x => {return !!x});
console.log(booleanNumbers);