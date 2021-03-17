const username = 'kyle';
let password = 'hunter1';

// ჩვენი დავალება არის მინიატურული საბანკო აპლიკაციის აწყობა.
// ჩვენი პროგრამის გაშვება იწყება askUserAge() - ით. გამოიძახეთ დასაწყისთვის სწორედ ეს ფუნქცია
// იხილეთ ამ ფაილის ბოლო



// 1.
// დაწერეთ ფუქცია printWithStars - ამ ფუნქციამ მიიღოს 1 არგუმენტი textToPrint
/* ფუნქციამ textToPrint უნდა გამოიტანოს მოცემული ფორმატით:
    ************
    **  TEXT  **
    ************
*/

function printWithStars(textToPrint) {
    console.log("************");
    console.log("**  " + textToPrint + "  **");
    console.log("************");
}

// 1.
// დაწერეთ ფუნქცია printHelloUser - ამ ფუნქციას უნდა ქონდეს 1 არგუმენტი userName
// გადმოწოდებული userName-ის მიხედვით გამოიტანეთ: 'გამარჯობა მომხმარებელო ' და შემდეგ გადმოწოდებული სახელი

function printHelloUser(userName) {
    console.log("Hello user " + userName);
}

// 3
// დაწერეთ ფუნქცია askUserAge ამ ფუნქციამ უნდა:
// 1. მოითხოვს prompt ით Enter your age
// 2. თუ ასაკი ნაკლებია 18ზე დაწერეთ You're not allowed.
// 3. თუ ასაკი მეტია თვრამეტზე გამოიძახეთ login()

function askUserAge() {
    const userAge = Number(prompt("Enter your age: "));
    
    if (userAge < 18) {
        console.log("You're not allowed.");
    } else {
        login();
    }
}

// 4. 
// დაწერეთ ფუნქცია login()
// 1. prompt-ით მოითხოვეთ Enter your user name: 
// 2. prompt-ით მოითხოვეთ Enter your password:
// შეყვანილი მონაცემები შეადარეთ username-ს და password-ს
// თუ დაემთხვა გამოიძახეთ printHelloUser და შემდეგ გამოიძახეთ ფუნქცია: runBankApp()
// თუ არ დაემთხვა დაბეჭდეთ Incorrect username or password და ამის შემდეგ გამოიძახეთ ფუნქცია login()

function login() {
    const user_name = prompt("Enter your username: ");
    const user_password = prompt("Enter your password: ");

    if (user_name === username && user_password === password) {
        printHelloUser(user_name);
        runBankApp();
    } else {
        console.log("Incorrect username or password");
        login();
    }
}

// 5.
/*
    დაწერეთ ფუნქცია runBankApp()
    გამოიძახეთ prompt: 'აირჩიეთ ოპერაცია'
    თუ ოპერაცია არის:
      calc - მოითხოვეთ 3 prompt-ით Enter starter amount money, Enter yearly percentage, Enter how many years?
             ამ 3 promt-ის შედეგებით გამოიძახეთ ფუნქცია calculateYearlyGain. შემდეგ ისევ გამოიძახეთ runBankApp() - ფუნქცია. ანუ ფუნქციამ თავისი თავი უნდა გამოიძახოს
      logout - ამ შემთხვევაში გამოიძახეთ ფუნქცია askUserAge() - ანუ პროგრამა დაიწყება თავიდან

      // ბონუსი
      changepassword - ამ შემთხვევისთვის დაწერეთ ფუნქცია changePassword() რომელიც მოითხოვს და გადაამოწმებს password-ს 
        შემდეგ ის გადააწერს ცვლად password-ს ახალ მნიშვნელობას. შემდეგ გამოიძახებს ფუნქცია login()
*/

function runBankApp() {
    const operation = prompt("Operations: \n1. calc\n2. logout\n3. changepassword\n Choose operation: ");
    if (operation === "calc" || operation === "1") {
        const starter = Number(prompt("Enter starter amount money: "));
        const percentage = Number(prompt("Enter yearly percentage: "));
        const years = Number(prompt("Enter how many years? "));
        calculateYearlyGain(starter, percentage, years);
        
        runBankApp();
    } else if (operation === "logout" || operation === "2") {
        logout(username);
        askUserAge();
    } else if (operation === "changepassword" || operation === "3") {
        changePassword();
    }
}

// 6.
/* 
    დაწერეთ ფუნქცია calculateYearlyGain - 3 არგუმენტით: starter, percentage, years
    დათვალეთ წლიური ზრდა მოცემული ფორმულით: starter * percentage / 100
    შემდეგ ზედა წლიური ზრდა გაამრავლეთ years-ზე და მიუმატეთ starter-ს
    დათვლილი ჯამი გადააწოდეთ ფუნქციას printWithStars და დაბეჭდეთ პასუხი
*/

function calculateYearlyGain(starter, percentage, years) {
    const calcRes = String((starter * percentage / 100) * years + starter);
    printWithStars(calcRes);
}

// 7.
/* 
    დაწერეთ ფუნქცია logout() - 1 არგუმენტით userName:
    გამოიტანეთ 'Goodbye ' + userName
    ამის შემდეგ გამოიძახეთ ფუნქცია askUserAge();
*/

function logout(userName) {
    console.log("Goodbye " + userName);
    askUserAge();
}

//  askUserAge - ეს არის ჩვენი აპლიკაციის სასტარტო ფუნქცია 
// askUserAge();

function changePassword() {
    const oldPassword = prompt("Enter your old password: ");
    if (oldPassword === password) {
        password = prompt("Enter your new password: ")
        login();
    } else {
        console.log("Password isn't correct! Try Again! ");
        runBankApp();
    }
}

askUserAge();
