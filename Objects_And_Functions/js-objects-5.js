/*В терминале оплаты сохранено ваше имя, напишите функцию 
для определения имени в терминале(если вы ввели ваше имя, 
то привет + имя, если нет, то нет такого имени)*/
function defineName(name) {
  const savedName = "Наталия";
  if (name === savedName) {
    console.log("Привет, " + name + "!");
  } else {
    console.log("Нет такого имени.");
  }
}
defineName("Наталия");
defineName("Пётр");
