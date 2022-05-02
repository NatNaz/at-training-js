/* Написать функцию, которая принимает два параметра - 
массив и число и выводит индекс элемента массива равный числу*/

// Вариант 1:
let arrNumbers = [1,6,7,8,3,4,5,6];
function findIndex(arr, number) {
    return(arr.indexOf(number))
};
findIndex(arrNumbers, 6);

// Вариант 2:
let arrOfNumbers = [1,6,7,8,3,4,5,6];
let defineIndex = (array, numberToFind) => array.indexOf(numberToFind);
defineIndex(arrOfNumbers, 7);
