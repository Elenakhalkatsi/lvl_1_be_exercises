// 1.
// დაწერეთ ფუნქცია getZebra() რომელიც დაა-return-ებს სიტყვა 'zebra'-ს
// დაწერეთ ფუნქცია getRhino() რომელიც დაა-return-ებს სიტყვა 'rhino'-ს
// დაწერეთ ფუნქცია printBothAnimals() - ამ ფუნქციამ უნდა გამოიძახოს 
// getZebra და getRhino - შემდეგ დალოგოს დაბრუნებული სიტყვები

function getZebra() {
    return "zebra";
}

function getRhino() {
    return "rhino";
}

function printBothAnimals() {
    console.log(getZebra(), getRhino());
}

// 2.
// ზემოთ დაწერილი ფუნქცია გამოიძახეთ და დაბრუნებული მნიშვნელობები დალოგეთ.

printBothAnimals();

// დაწერეთ ფუნქცია sum(num1, num2)-ამ ფუნქციამ უნდა დააბრუნოს num1+num2

function sum(num1, num2) {
    return num1 + num2;
}


// 2.1 challenge
// შექმენით ფუნქცია compareSums()-ამ ფუნქციაში prompt-ით მოითხოვეთ 4 რიცხვი
// გამოიძახეთ ფუნქცია sum() ორჯერ და გაატანეთ სწორი არგუმენტენტები
// sum() -ების მიერ დაბრუნებული მნიშვნელობები შეინახეთ ცვლადებში და შეადარეთ ისინი ერთმანეთს

function compareSums() {
    const num1 = Number(prompt("Number 1: "));
    const num2 = Number(prompt("Number 2: "));
    const num3 = Number(prompt("Number 3: "));
    const num4 = Number(prompt("Number 4: "));

    const sum1_2 = sum(num1, num2);
    const sum3_4 = sum(num3, num4);

    return sum1_2 > sum3_4;
}

console.log(compareSums());



// 3.
const fruitList = ['Apple', 'Orange', 'Strawberry', 'Grape']
// დაწერეთ ფუნქცია findCitrus(arrayToFind)
// arrayToFind-ში თუ იპოვით Orange-ს დაარეთურნეთ 'Orange'.
// შეზღუდვა: დაბრუნებისას გამოიყენეთ array-ს ელემენტი
// ანუ return 'Orange' არ დაწეროთ.

function findCitrus(arrayToFind) {
    if (arrayToFind.includes('Orange')) {
        return arrayToFind[arrayToFind.indexOf('Orange')];
    }
}

console.log(findCitrus(fruitList));

// დაწერეთ ფუნქცია findCitrusIndex(arrayToFind)
// arrayToFind-ში თუ იპოვით Orange-ს დააბრუნეთ მისი ინდექსი.
// არ დაწეროთ return 1 ან return 2. გამოიყენეთ ნამდვილი ინდექსი.
// ჩათვალეთ რომ არ იცით წინასწარ რომელ ინდექსზეა Orange.

function findCitrusIndex(arrayToFind) {
    if (arrayToFind.includes('Orange')) {
        return arrayToFind.indexOf('Orange');
    }
}

console.log(findCitrusIndex(fruitList));

// დაწერეთ ფუნქცია containsCitrus(arrayToFind)
// arrayToFind-ში თუ ნახავთ Orange-ს დაარეთურნეთ true თუ არა false.

function containsCitrus(arrayToFind) {
    if (arrayToFind.includes('Orange')) {
        return true;
    }
    return false;
}

console.log(containsCitrus(fruitList));

// 4.
/*
    movie = {
        name: 'Name of the Wind',
        director: 'Spielberg',
        year: 2020,
    }
*/
let moviesDatabase = [];


// 5.
// დაწერეთ ფუნქცია addMovieToDatabase(name, director, year);
// ფუნქციაში შექმენით ახალი ობიექტი ზემოთ აღწერეილი სტრუქტურის მიხედვით
// შექმნილი ობიექტი და-push-ეთ moviesDatabase-ში.

function addMovieToDatabase(name, director, year) {
    const movie = {
        name: name,
        director: director,
        year: year,
    }
    moviesDatabase.push(movie);
}

addMovieToDatabase('movie N1', 'director', 2000);
addMovieToDatabase('movie N2', 'another director', 1996);
addMovieToDatabase('movie N3', 'director', 1990);

// 6.
// დაწერეთ ფუნქცია printAllMoviesInDb()
// მოცემულ ფუნქციაში დაბეჭდეთ ყველა ფილმის სახელი moviesDatabase-იდან

function printAllMoviesInDb() {
    moviesDatabase.forEach((value) => {
        console.log(value.name);
    })
}

printAllMoviesInDb();

// 7. challenge 
// დაწერეთ ფუნქცია: findMovie(movieName)
// moviesDabase-ში იპოვეთ ობიექტი რომლის name-property არის movieName.
// დაა-return-ეთ ნაპოვნი ობიექტი
// თუ ობიექტს ვერ იპოვნით დაარეთურნეთ false

function findMovie(movieName) {
    for (const value of moviesDatabase) {
        if (value.name === movieName) {
            return value;
        }
    }
    return false;
}

console.log(findMovie('movie N3'), findMovie('movie'));

// 8. challenge 
// დაწერეთ ფუნქცია: listMoviesByDirector(director),
// დაბეჭდეთ ყველა ფილმი გადმოწოდებული რეჟისორის მიერ.

function listMoviesByDirector(director) {
    for (const value of moviesDatabase) {
        if (value.director === director) {
            console.log(value);
        }
    }
}

listMoviesByDirector('director');