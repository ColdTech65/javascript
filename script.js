"use strict";

//Решение задачи по уроку

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
/*
//Самостоятельное решение задачи
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let lastWatchedFilm = prompt("Один из последних просмотренных фильмов?");
let filmRating = prompt("На сколько оцените его?");

let personalMovieDB = {
        count: numberOfFilms,
        movies: {
            lastWatchedFilm,
            filmRating
        },
        actors: {},
        genres: [],
        privat: false
};

alert("Кол-во просмотренных фильмов: " + personalMovieDB.count + "\n" + " Последний фильм: " + personalMovieDB.movies.lastWatchedFilm + "\n" + " Оценка: " + personalMovieDB.movies.filmRating);
*/

/*const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers); */

/*
// Переменные
// "use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const pia = 1;

// number = 10;
// console.log(number);

// var name = 'Ivan';

// {
//     var result = 50;
// }

// console.log(result);

// Эксперименты с выводом массива по ID на страницу
// window.onload = function () {
//     let arr = [],
//         i, j
//     let out_arr = document.getElementById("out_arr")
//     for (let i = 0; i <= 3; i++) {

//         arr[i] = []
//         for (let j = 0; j <= 3; j++) {

//             arr[i][j] = j + 1
//         }
//     }
// }

//Эксперименты с выводом массива
// out_arr.innerHTML = arr;
// }
// let arr = [], i, j
// for (let i = 0; i <= 3; i++)
// {
//     arr[i] = []
//     for (let j = 0; j <= 3; j++)
//     {
//         arr[i][j] = j+1   
//     }
// }
// console.log(arr)


//Эксперименты с объектом
// const person = {
//     firstName: 'Alex',
//     lastName: 'Grey',
//     myChilds: ['Kate','Pavel','Felix']
// }
//const arr = ['Kate', 'Pavel', 'Felix']
//arr[arr.length] = prompt()
//alert(arr)
// alert(person.myChilds = prompt())
//person.myChilds[myChilds.length] = 'd';
//alert(person.myChilds)
*/