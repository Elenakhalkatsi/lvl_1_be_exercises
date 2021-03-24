// 1.
// შექმენით ობიექტი aboutMe: შიგნით ჩაწერეთ key-ები: name, surname, age, isStudent,
let aboutMe = {
    name: "Elene",
    surname: "Akhalkatsi",
    age: 20,
    isStudent: true
}
// 2.
// aboutMe - ობიექტში ჩაამატეთ isAdult - შეადარეთ ასაკი 18ს
aboutMe.isAdult = aboutMe.age > 18;

// 3.
// aboutMe - ში ჩაამატეთ ახალი ქვეობიექტი address, მოცემული ობიექტი უნდა შეიცავდეს: city, country, state
aboutMe.address = {
    city: "Tbilisi",
    country: "Georgia",
    state: "Georgia"
}

// 4.
// წაშალეთ isAdult aboutMe-დან
delete aboutMe.isAdult;

// 5.
// aboutMe-ში ჩაამატეთ array - favouriteMovies -> სადაც იქნება ჩამოთვლილი ფილმები
aboutMe.favouriteMovies = ["Primal Fear", "Seven"];

// 6.
// შექმენით ფუნქცია: getCreditCardInfo -> 
// გააკეთეთ 3 prompt-ი მონაცემებისთვის: ბარათის ნომერი, ვადა, კოდი
// მოცემული მონაცემებით შექმენით ახალი ობიექტი creditCardInfo -> {number, expiration, cvv} და-დაარეთურნეთ
function getCreditCardInfo() {
    const number = prompt("Card Number: ");
    const expiration = prompt("Expiration of tha card: ");
    const cvv = prompt("CVV: ");
    aboutMe.creditCardInfo = {
        number: number,
        expiration: expiration,
        cvv: cvv
    }
    return aboutMe.creditCardInfo;
}

// 7.
// გამოიაძეთ getCreditCardInfo-ორჯერ და ორივე ბარათის ობიექტი შეინახეთ ცვლადებში 
// მაგ: let cardOne = getCreditCardInfo(), let cardTwo = getCreditCardInfo()
// შექმენით ფუნქცია compareCards(card1, card2) - გადმოწოდებული ორი ობიექტი შეადარეთ ერთმანეთს შემდეგ ნაირად
// თუ card1-number-ის ბოლო 4 ციფრი უდრის card2-ის number-ის ბოლო 4 ციფრს და ორივეს cvv იდენტურია:
// დაა-return-ეთ true თუ არა დაა-return-ეთ false
let cardOne = getCreditCardInfo();
let cardTwo = getCreditCardInfo();

function compareCards(card1, card2) {
    if (cardOne.number.slice(cardOne.number.length - 4) === cardTwo.number.slice(cardTwo.number.length - 4) 
    && cardOne.cvv === cardTwo.cvv) {
        return true;
    } 
    return false;
}

// 8. Challenge 1 (ბონუსი არაა, მაგრამ შეიძლება რთული იყოს, ცადეთ ყველამ)
// შექმენით ფუნქცია printCreditInfo(card) -> 
// დაბეჭდეთ card.number-ის ბოლო 4 ციფრის გარდა ფიფქები(*), ხოლო ბოლო 4 ციფრი გამოიტანეთ.
// მაგალითად number-თუ არის 11112222333344445555 -> გამოიტანეთ ****************5555 
function printCreditInfo(card) {
    let outPut = "";
    if (card.number.length > 4) {
        for(let i = 0; i < (card.number.length - 4); i++) {
            outPut += "*";
        }
        console.log(outPut + card.number.slice(card.number.length - 4));
    }
}

printCreditInfo(cardOne);

let library = [];
// 9.
// დაწერეთ ფუნქცია addBookToLibrary() -> ფუნქციაში:
// მოითხოვეთ 3 prompt-ი Name? Author? Year?
// მოცემული 3 prompt-ით შექმენით ახალი object key-ებით: name, author, releaseYear
// შექმნილი ობიექტი დაფუშეთ library-ში
function addBookToLibrary() {
    const name = prompt("Name? ");
    const author = prompt("Author? ");
    const releaseYear = prompt("Year? ");
    let book = {
        name: name,
        author: author,
        releaseYear: releaseYear
    }
    return book;
}

library.push(addBookToLibrary());

// 10.
// დაწერეთ ფუნქცია printLibrary
// დაბეჭდეთ ყველა წიგნი library-array-იდან შემდეგი ფორმატით
/*
    თუ წიგნია:
    {
        name: 'Harry Potter',
        author: 'J.K Rowling',
        releaseYear: 1999,
    }

    გამოვიტანთ Harry Potter by J.K Rowling released: 1999
*/

function printLibrary() {
    for(let i = 0; i < library.length; i++) {
        console.log(library[i].name, "by", library[i].author, "released:", library[i].releaseYear);  
    }
}
printLibrary();

// 11. Challenge 2 (ბონუსი არაა, მაგრამ შეიძლება რთული იყოს, ცადეთ ყველამ)
// გამოიტანეთ Object.values()-ის გამოყენებით aboutMe-ს ყველა მნიშვნელობა
// გამოიტანეთ Object.keys()-ის გამოყენებით aboutMe-ს ყველა გასაღები
// გამოიტანეთ aboutMe-ს ყველა key და value შემდეგი ფორმატით: "key->value" მაგალითად: "name->Giorgi"
for (const [key, value] of Object.entries(aboutMe)) {
    console.log(`${key} -> ${value}`);
}

// Bonus დავალება 1:
// დაწერეთ ფუნქცია reverseArray(arrayToReverse) - რომლითაც:
// Array.reverse()-ის გამოიყენების გარეშე შემოატრიალეთ array. მაგალითად: [1, 2, 3, 4, 5] უნდა გახდეს [5, 4, 3, 2, 1]
// დაა-return-ეთ შემოტრიალებული array
function reverseArray(arrayToReverse) {
    const reversedArray = [];
    for(let i = arrayToReverse.length - 1; i >= 0; i -= 1) {
        reversedArray.push(arrayToReverse[i]);
    }
    return reversedArray;
}

// Bonus დავალება 2:
// დაწერეთ ფუნქცია reverseString(stringToReverse) -> რომელიც შემოატრიალებს და დაარეთურნებს string-ს მაგალითად: Hello -> olleH
function reverseString(stringToReverse) {
    let reversedString = "";
    for(let i = stringToReverse.length - 1; i >= 0; i -= 1) {
        reversedString += stringToReverse[i];
    }
    return reversedString;
}

console.log(reverseString("elene"));

// Bonus დავალება 2:
// https://www.hackerrank.com/challenges/staircase/problem
// თუ გინდათ ამავე საიტზე ამოხსენით და ჩამიგდეთ solution-ის ლინკი.

let n = Number(prompt("n: "));

function staircase(n) {
    let line = "";
    for(let i = 1; i <= n; i++) {
        line += "#";
        console.log(line);
    } 
}