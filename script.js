"use strict";

// const Human = {
//     health: 100,
//     hands: 2,
//     legs: 2,
//     eyes: 2,
//     Talk: function() {
//         console.log('Hello, dude');
//     }
// };

// const Rick = Object.create(Human);
// console.log(Rick);

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const obj1 = {
//     a: 10,
//     b: 15,
//     c: 20
// };

// const obj2 = {
//     d: 30,
//     e: 40
// };

// const clone = Object.assign(obj1, obj2);

// console.log(clone);

/*
//Алгоритм быстрой сортировки
const arr = [9, 7, 5, 4, 3, 12];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
*/


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

/*
//Объекты и деструктуризация объектов
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);    
//             counter++;
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);
*/

/*
// Call-back функции
function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошёл этот урок!');
});
*/

//Решение задачи по практическому уроку № 4

const personalMovieDB = 
{
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) 
        {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },

    askQuestions() {
        for(let question = 1; question <= 2; question++)
        {
           const a = prompt('Один из последних просмотренных фильмов?',''),
                 b = prompt('На сколько оцените его?','');
            if (a != null && b != null && a != '' && b != '' && a.length < 50)
            {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else 
            {
                console.log('error');
                question--;
            }
        }
    },

    checkLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Ошибка');
        } 
    },

    writeYourGenres() {
        for (let question = 1; question <= 3; question++){
            let genre = prompt(`Ваш любимый жанр под номером ${question}`);

            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще.');
                i--;
            } else {
            personalMovieDB.genres[question - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.checkLevel();
personalMovieDB.askQuestions();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);