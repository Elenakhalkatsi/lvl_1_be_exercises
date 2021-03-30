// შექმენით ცვლადები name, surname, height, age, birthyear - გამოიყენეთ ან let ან const იმის მიხედვით თუ გგონიათ მოცემული ცვლადი შეიცვლება თუ არა.
const name = 'Elene';
const surname = 'Akhalkatsi';
const height = 160;
let age = 20;
let birthyear = 2000;

// შექმენით ცვლადი isStudent და მიუთითეთ true ან false თქვენი სტატუსის მიხედვით
let isStudent = true;

// თქვენი მონაცემების მიხედვით რა მნიშვნელობა ექნება isTall-ს
let isTall = height > 190; 
// height = 160, 160 < 190 => isTall = false

// თქვენი მონაცემების მიხედვით დაწერეთ isAdult ანუ ასაკი შეადარეთ 18ს
let isAdult = age > 18;

// შექმენით ორი ცვლადი firstNum secondNum და მიანიჭეთ მათ რაიმე მნიშვნელობა
let firstNum = 126;
let secondNum = 6;

// შექმენით ცვლადი sum, sub (გამოკლება), mult (გამრავლება), division (გაყოფა) - და firstNum secondNum -ის მიხედვით დაწერეთ ამ ცვლადების მნიშვნელობა
// მაგალითად sum იქნება 
let sum = firstNum + secondNum;
let sub = firstNum - secondNum;
let mult = firstNum * secondNum;
let division = firstNum / secondNum;

// ზემოთ დეკლარირებულ ცვლად age-ს შეუცვალეთ მნიშვნელობა: გაზარდეთ ერთით
age += 1;

// ზემოთ დეკლარირებულ ცვლად birthyear-ს შეუცვალეთ მნიშვნელობა: დააკელით ერთი
birthyear -= 1;

// იმის შემდეგ რაც შევცვალეთ age თქვენი აზრით isAdult true იქნება თუ false
age = 10;
console.log(isAdult);
//isAdult = true 