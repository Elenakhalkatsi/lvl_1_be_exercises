const adminUser = {
    userName: 'patroni',
    password: '123456',
    role: 'admin',
};

const regularUser1 = {
    userName: 'kyle',
    password: 'hunter2',
    role: 'user',
}

const regularUser2 = {
    userName: 'bomba',
    password: 'drakula',
    role: 'user',
}

const moderatorUser = {
    userName: 'mod',
    password: 'asdasd',
    role: 'moderator',
}

const usersDatabase = [adminUser, regularUser1, regularUser2, moderatorUser];

start();
function start(){
    let operation = prompt('login or register');
    switch(operation){
        case 'login':
            login();
            break;
        case 'register':
            register();
            break;
        default:
            console.log('უცნობი ოპერაცია');
            break;
    }
}

function createNewUser(name, password, role){
    // ზემოთ აღწერილი ობიექტების მსგავსად შექმენით ახალი ობიექტი
    // ეს ობიექტი და-push-ეთ usersDatabase-ში

    let createOrNot = true;
    for (let i = 0; i < usersDatabase.length; i++) {
        if(usersDatabase[i].userName === name || usersDatabase[i].password === password) {
            createOrNot = false;
        }
    }

    if(createOrNot) {
        const regularUser3 = {
            userName: name,
            password: password,
            role: role
        }
        usersDatabase.push(regularUser3);
    } else {
        console.log("Your username or password is already used, Try Again!");
        register();
    }
}

function register(){
    // გამოიძახეთ 3 prompt-ი და შეინახეთ ცვლადებში
    // შემდეგ გამოიძახეთ createNewUser() - და გადააწოდეთ თქვენი შემოტანილი ცვლადები
    // შემდეგ გამოიძახეთ login();

    const name = prompt("Name: ");
    const password = prompt("Password: ");
    const role = prompt("Role: ");
    createNewUser(name, password, role);
    login();
}

function login(){
    // გამოიძახეთ 2 prompt userName, password
    // შეამოწმეთ ყველა მომხამრებელი usersDatabase-ში
    // თუ მომხმარებლის სახელი და პაროლი ემთხვევა:
    // დაბეჭდეთ 'გამარჯობა: ' + მომხმარებლის username
    // გამოიძახეთ runApp-და გადააწოდეთ ამ ფუნქციას usersDatabase-ში ნაპოვნი ობიექტი

    const userName = prompt("Username: ");
    const password = prompt("Password: ");

    usersDatabase.forEach(element => {
        if(element.userName === userName && element.password === password) {
            console.log(`Hello ${element.userName}!`);
            runApp(element);
        }
    });   
}

function runApp(currentUser){
    // switch-case-ის მეშვეობით შეამოწმეთ მომხმარებლის role-ი
    // გამოიტანეთ სხვადასხვა ტექსტები

    switch (currentUser.role) {
        case "admin":
            console.log("You're Admin");
            break;
        case "moderator":
            console.log("You're Moderator");
            break;
        case "user":
            console.log(`Hello user N${usersDatabase.indexOf(currentUser) + 1}`);
        default:
            break;
    }
}

// challenge 1:
// createNewUser-ფუნქციაში შეამოწმეთ მოცემული მომხმარებელი არსებობს თუ არა.
// შექმენით ახალი მომხმარებელი მხოლოდ იმ შემთხვევაში თუ მომხმარებელი თავისუფალია

//კოდშივე წერია ზემოთ :D


// bonus 1:
// დაწერეთ ფუნქცია compareObjects - გადმოგეცემათ 2 უცნობი ობიექტი
// Object.keys()-ის გამოყენებით 
// შეამოწმეთ ემთხვევა თუ არა ორივე ობიექტის ყველა key-value ერთმანეთს

function compareObjects(obj1, obj2) {
    const objLengthToUse = Object.keys(obj1).length === Object.keys(obj2).length ? Object.keys(obj1).length : 0;
    for(let i = 0; i < objLengthToUse; i++){
        if(Object.keys(obj1)[i] === Object.keys(obj2)[i] && Object.values(obj1)[i] === Object.values(obj2)[i]){
            if(i === objLengthToUse-1) {
                console.log("Key-Value pairs are the same");
            } else {
                continue;
            }
        } else {
            console.log("Key-Value pairs aren't same");
            break;
        }
    }
}

// bonus 2:
// დაწერეთ ფუნქცია compareObjectValues - გადმოგეცემეთ 2 უცნობი ობიექტი
// Object.values()-ის გამოყენებით 
// შეამოწმეთ ემთხვევა თუ არა ორივე ობიექტის ყველა value ერთმანეთს
// გაითვალისწინეთ key-ები შეიძლება განსხვავებული იყოს
// მაგალითად
let obj1 = {
    name: 'Giorgi',
    lastName: 'Andriadze',
    age: 45,
}

let obj2 = {
    goalsScored: 45, 
    fathersName: 'Giorgi',
    surName: 'Andriadze',
}

function compareObjectValues(obj1, obj2) {
    const objLengthToUse = Object.keys(obj1).length === Object.keys(obj2).length ? Object.keys(obj1).length : 0;
    let sameValues = true;
    for(let i = 0; i < objLengthToUse; i++){
        if(Object.values(obj2).includes(Object.values(obj1)[i])){
            continue;
        } else {
            sameValues = false;
            break;
        }
    }
    return sameValues;
}
// თქვენმა ფუნქციამ უნდა დააბრუნოს true-რახან value-ები ერთმანეთს ემთხვევა
// 1 value მაინც თუ არ ემთხვევა დააბრუნეთ false

compareObjects(obj1, obj2);
console.log(compareObjectValues(obj1, obj2));