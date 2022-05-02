// Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

// Вариант 1:
let cars = ['Volkswagen Auto Group (VAG)', 'Toyota Motor Corp.', 'Компания Honda.', 'Концерн Groupe PSA.', 'Альянс Renault-Nissan-Mitsubishi.', 'Концерн General Motors.', 'Компания Ford.', 'Концерн Fiat.',];
let strCars = cars.join('; ');
let newCars = strCars.split('; ');
console.log(strCars);
console.log(newCars);

// Вариант 2:
let cars = ['Volkswagen Auto Group (VAG)', 'Toyota Motor Corp.', 'Компания Honda.', 'Концерн Groupe PSA.', 'Альянс Renault-Nissan-Mitsubishi.', 'Концерн General Motors.', 'Компания Ford.', 'Концерн Fiat.',];
functionCars = (carsArr) => console.log(cars.join('; ').split('; '));
functionCars(cars);