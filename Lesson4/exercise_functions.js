// დღევანდელი დავალება ძირითადად წინების გამეორება იქნება

// დავალება 1.
// ჩართეთ: https://www.youtube.com/watch?v=5qap5aO4i9A

describeYourSelf();
function describeYourSelf(){
    // const-ები არ დაგავიწყდეთ, თორე შემდეგზეც მოვა ეს დავალება 
    
    // დავალება 1:
    // 5 ცვლადში აღწერეთ თქვენი თავი. 
    const firstName = "Elene";
    const secondName = "Akhalkatsi";
    let age = 20;
    const birthDate = 2000;
    const birthPlace = "Tbilisi";

    // 5 ცვლადში აღწერეთ თქვენი ერთ-ერთი საყვარელი სიმღერა
    const nameOfSong = "To Blossom blue";
    const artistOfSong = "Lake of tears";
    const yearOfSongRelease = 1999;
    const genreOfSong = "Metal";
    const isOld = true;

    // 5 ცვლადში აღწერეთ თქვენი ერთ-ერთი საყვარელი ფილმი
    const nameOfMovie = "Primal Fear";
    const yearOfRelease = 1996;
    const genreOfMovie = "Detective";
    const directedBy = "Gregory Hoblit";
    const productionCompany = "Rysher Entertainment";

    // 5 ცვლადში აღწერეთ ბოლოს რა წიგნი წაიკითხეთ
    const nameOfBook = "Flowers for Algernon";
    const authorOfTheBook = "Daniel Keyes";
    const yearOfPublication = 1959;
    const genreOfTheBook = "Novel";
    const awardForTheBook ="Nebula Award for Best Novel";

    // 5 ცვლადში აღწერეთ ფილმი Titanic
    const nameOfTitanic = "Titanic";
    const releaseYearOfTitanic = 1997;
    const directorOFTitanic = "James Cameron";
    const genreOfTitanic = "Romance/Drama";
    const budgetOfTitanic = "200 million USD";

    // 3 ცვლადში აღწერეთ თქვენი საყვარელი საჭმელი
    const nameOfMeal = "Pizza";
    const countryOfMeal = "Italy";
    const isHot = false;

    // 5 ცვლადში აღწერეთ თქვენი საბანკო მონაცემები :) 
    const ownerOfBankAccount = "Elene Akhalkatsi";
    const totalBalance = 0;
    const isDeposit = false;

    // 5.1. წინა დავალებაში ყალბი მონაცემები შეიყვანეთ

    // 6 ცვლადში აღწერეთ თქვენი კომპიუტერი (მაგ: memory=16000 isSSD=true cpu='intel core ix' graphics:'') 
    // თან გაეცნობით თქვენს კომპიუტერს. მონაცემები გთხოვთ იყოს ზუსტი...
    const memory = 16000;
    const isSSD = true;
    const cpu = "Intel(R) Core(TM) i7-4712HQ";
    const graphicsCard = "Intel(R) HD Graphics 4600";
    

    // დავალება 2.1:
    // თქვენი საყვარელი წიგნის გამოშვების წელი შეადარეთ ფილმის გამოშვების წელს დაწერეთ რომელია უფრო მეტი
    if (yearOfRelease > yearOfPublication) {
        console.log(String(yearOfRelease));
    } else if(yearOfRelease < yearOfPublication) {
        console.log(String(yearOfPublication));
    } else {
        console.log("They are equal to each other");
    }

    // დავალება 2.2:
    // თუ თქვენი საყვარელი საჭმელი ცხარე არ არის გამოიტანეთ Food not spicy
    if (!isHot) {
        console.log("Food not spicy");
    }

    // დავალება 2.3:
    // თუ თქვენი კომპიუტერის RAM - ნაკლებია 8000-მეგაბაიტზე გამოიტანეთ. "რამი მექნება მალე დასამატებელი"
    if (memory < 8000) {
        console.log("Rami meqneba male dasamatebeli");
    }

    // დავალება 2.4
    // თუ isSSD - არ არის true მაშინ გამოიტანეთ: "სასურველია SSD - ჩავდგათ"
    if (!isSSD) {
        console.log("Sasurvelia SSD - chavdgat");
    }

    // დავალება 3:
    // თქვენი ასაკი გაზარდეთ 4-ით
    age += 4;

    // დავალება 4:
    // თუ თქვენი საყვარელი ფილმის გამოშვების წელია: 1950-დან 1970 წლამდე: დაბეჭდეთ: "ძველი ფილმია"
    // ხოლო თუ ის გამოსულია 2010-დან 2020მდე დაწერეთ: "ახალი ფილმია"
    if (yearOfRelease > 1950 && yearOfRelease < 1970) {
        console.log("Dzveli filmia");
    } else if (yearOfRelease > 2010 && yearOfRelease < 2020) {
        console.log("Axali filmia");
    }

    // დავალება 5:
    // გამოიძახეთ isAdult ფუნქცია და გადააწოდეთ მას თქვენი ასაკი. isAdult() თუ დააბრუნებს - true-ს გამოიტანეთ: "მე შემიძლია ხმის მიცემა"
    // თუ არა: ჯერ ხმის მიცემის უფლება არ მაქვს
    if(isAdult(age)) {
        console.log("Me shemidzlia xmis micema");
    } else {
        console.log("Jer xmis micemis ufleba ar maqvs");
    }

    // დავალება 6
    // დაწერეთ ფუნქცია calculateAgeBasedOnBirthYear(birthYear); - ამ ფუნქციამ 2021-ს უნდა გამოაკლოს დაბადების წელი და უკან დააბრუნოს მიღებული რიცხვი
    // calculateAgeBasedOnBirthYear()-ის მიერ დაბრუნებული რიცხვი შეადარეთ თქვენ მიერ დეკლარირებულ ასაკს
    // თუ ასაკი დაემთხვა: გამოიტანეთ: "თვლა მცდონია" თუ არა: "თვლაში მიჭირს"

    if(calculateAgeBasedOnBirthYear(birthDate) === age) {
        console.log("Tvla mcodnia");
    } else {
        console.log("Tvlashi michirs");
    }

    let first = Number(prompt('Pirveli ricxvi'))
    let sec = Number(prompt('Meore ricxvi'))
    
    // დავალება 7 დაწერეთ ფუნქცია sum() - რომელიც დააკმაყოფილებს მოცემულ გამოძახებას:
    let res = sum(first, sec);
    console.log('Sum', res);

    // დავალება 8:
    // ზემოთ დაწერილი ფუნქციის მაგვარად დაწერეთ ფუნქციები multiply, divide, subract, გამოიძახეთ ისინი და გამოიტანეთ მათი შედეგები
    // console.log()-აბი არ გამოიყენოთ არცერთ ზემოთ აღნიშნულ ფუნქციაში(multiply, divide, subract)
    alert(String(multiply(first, sec)));
    alert(String(divide(first, sec)));
    alert(String(subract(first, sec)));

    // დავალება 9
    // გამოიძახეთ ფუნქია multPositiveNumbers - რიცხვებით 10 და 20 და დაბეჭდეთ რეზულტატი
    // გამოიძახეთ ფუნქცია multPositiveNumbers - რიცხვებით -10 და 20 და დაბეჭდეთ რეზულტატი
    // გამოიძახეთ ფუნქცია multPositiveNumbers - რიცხვებით 10 და -20 და დაბეჭდეთ რეზულტატი
    // ზემოთ ფუნქციის მიერ დაბრუნებული მნიშვნელობები შეინახეთ ცვლადებში
    // შეადარეთ ცვლადები. თუ რომელიმე არ დაემთხვა რომელიმე სხვას დაბეჭდეთ "ფუნქციაში შეცდომაა"
    const pos1 = multPositiveNumbers(10, 20);
    const pos2 = multPositiveNumbers(-10, 20);
    const pos3 = multPositiveNumbers(10, -20);
    
    console.log(pos1);
    console.log(pos2);
    console.log(pos3);

    if(pos1 !== pos2 || pos1 !== pos3 || pos2 !== pos3) {
        console.log("Funqciashi shecdomaa");
    }

    // დავალება 10:
    // დაწერეთ ფუნქცია multNegative(); ამ ფუნქციის მიზანია ნამრავლი სულ უარყოფითი იყოს
    let neg1 = multNegative(5, 10);
    let neg2 = multNegative(-5, 10);
    let neg3 = multNegative(5, -10);
    let neg4 = multNegative(-5, -10);
    
    console.log('multNegative -ის შედეგები', neg1, neg2, neg3, neg4);
    // თუ რომელიმე ზემოთ გამოძახებული ცვლადი უარყოფითია, ფუნქციაში გაქვთ შეცდომა
}

function isAdult (age) {
    let isAdult = age >= 18;
    
    return isAdult; 
}

function calculateAgeBasedOnBirthYear(birthYear) {
    return 2021 - birthYear;
}

// don't forget to add arguments
function multNegative (x, y) {
    // Impelement multNegative function here
    const mult = x * y;
    if (mult <= 0) {
        return mult;
    } else {
        return mult * -1;
    }
}


function multPositiveNumbers (num1, num2) {
    if(num1 < 0){
        // if num1 is less than 0 we multiply it by 1 to always get positive number
        num1 = (num1 * -1);
    }
    if(num2 < 0){
        // if num1 is less than 0 we multiply it by 1 to always get positive number
        num2 = (num2 * -1);
    }

    // BTW: ეს არ არის საუკეთესო გადაწყვეტილება ამ ფუნქციის. გაცილებით უფრო მარტივადაც შეიძლება. 1 გამრავლებით. 

    return num1 * num2;
}

function sum(x, y) {
    return x + y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function subract (x, y) {
    return x - y;
}