/* Дан массив состоящий из названий фильмов, выполните перебор
массива с выводом в консоль названия каждого фильма*/
let movies = [
    "Marvel's The Avengers", 
    "Iron Man", 
    "Thor", 
    "Captain America: The Winter Soldier", 
    "Doctor Strange", 
    "Avengers: Infinity War", 
    "Eternals", 
    "Black Widow",
];
function outputMovies() {
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]);
    }
}
outputMovies();