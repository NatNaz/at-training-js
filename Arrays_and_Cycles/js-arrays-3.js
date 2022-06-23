// Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let friends = ["Mary", "Kate", "John", "Nelly", "Adam", "Lex"];
let greetingFriends = friends.map((x) => {
  return "Hello " + x;
});
console.log(greetingFriends);
