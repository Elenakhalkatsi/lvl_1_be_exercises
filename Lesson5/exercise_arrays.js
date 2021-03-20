// 1. 
// შექმენით array computerParts - შიგნით ჩაწერეთ 5 კომპიუტერის ნაწილი.
const computerParts = ["Motherboard", "Processor", "RAM", "Keyboard", "Web Camera"];

// 2.
// გამოიტანეთ computerParts-ის პირველი და მესამე ელემენტი
console.log(computerParts[0], computerParts[2]);

// 3.
// computerParts -ს დაუმატეთ კიდევ ერთი ნაწილი "wifi module"
computerParts.push("wifi module");

// 4.
// წაშალეთ ბოლო ელემენტი
computerParts.pop();

// 5.
// წაშალეთ პირველი ელემენტი
computerParts.shift();

// 6.
// computerParts-ის დასაწყისში დაამატეთ ახალი ელემენტი Gigabit Network
computerParts.unshift("Gigabit Network");

// 7. წაშალეთ computerParts-ის მეორე ელემენტი
computerParts.splice(1, 1);

// 8.
// დაწერეთ ფუნქცია listAllArrayElements(arrayToList) - გადმოწოდებული array-ს ყველა მნიშვნელობა გამოიტანეთ console.log-ით
// გამოიყენეთ for loop-ი ან forEach-ი
function listAllArrayElements(arrayToList) {
    arrayToList.forEach(element => {
        console.log(element);
    });
}

// 9.
const popularFoods = ['Burger', 'Pizza', 'Steak', 'xashlama', 'Ceasars Salad'];
// დაწერეთ ფუნქცია containsGeorgianFood(foodArray) - შეამოწმეთ გადმოწოდებულ array-ში არის თუ არა ('ხაშლამა ან ხაში')
// თუ ხაშლამა ან ხაში არის foodArray-ში დაა-return-ეთ true
// გამოძახებისას გამოიყენეთ popularFoods - array
function containsGeorgianFood(foodArray) {
    foodArray.forEach(food => {
        if (food === 'xashlama' || food === 'ხაში') {
            return true;
        }
    });
    return false;
}

// 10.
// თუ containsGeorgianFood - დააბრუნებს true-ს დაბეჭდეთ: 'ქართული საჭმელიც პოპულარულია' სხვა შემთხვევაში 'ქართული საჭმელი არაა პოპულარული'
if (containsGeorgianFood(popularFoods)) {
    console.log("Qartuli sachmelic popularulia");
} else {
    console.log("Qartuli sachmeli araa popularuli");
}

// 11.
// დაბეჭდეთ ლუწი რიცხვები 1-დან 100მდე
for (let i = 1; i < 100; i+=1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 12.
// დაბეჭდეთ კენტი რიცხვები 1-დან 75მდე
for (let i = 1; i < 75; i += 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 13.
// დაწერეთ ფუნქცია printAllEven(from, to) - ამ ფუნქციამ from და თუ რიცხვებს შორის უნდა დაბეჭდოს ყველა ლუწი რიცხვი
// გამოიძახეთ printAllEven() - შემდეგი რიცხვებით (51, 71), (100, 155), (100001), (100005)
// აუცლებლეია შეამოწმოთ რომ from ნაკლები იყოს to-ზე, თუ ნაკლები არაა დაბეჭდეთ "from has to be less than to" შემდეგ გააკეთეთ ცარიელი return
function printAllEven(from, to) {
    if (from < to) {
        for (let i = from; i < to; i+=1) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    } else {
        console.log("from has to be less than to");
        return;
    }
}

printAllEven(51, 71);
printAllEven(100, 155);
printAllEven(100001, 100005);

// 14.
// დაწერეთ ფუნქცია arrayContainsNumbers(arrayToCheck) - ამ ფუნქციამ უნდა დაა-return-ოს true თუ გადმოწოდებული array-ის ერთი ელემენტი მაინც რიცხვია.
function arrayContainsNumbers(arrayToCheck) {
    for(let i = 0; i < arrayToCheck.length; i++){
        if (typeof(arrayToCheck[i]) === Number) {
            console.log(arrayToCheck[i]);
        }
    }

}

const arrayToCheck = ["bla", "bla", 1, "bla"];
arrayContainsNumbers(arrayToCheck);

// ბონუს დავალება 1
// customRound(numToRound) - თუ რიცხვის არამთელი მხარე ნაკლებია 0.8 -ზე რიცხვი დაამრგვალეთ ქვემოთ ხოლო სხვა შემთხვევაში დაამრგვალეთ ზემოთ
// შედეგი დაა-return-ეთ
// მაგალითად თუ რიცხვია 2.7 - უნდა დააბრუნოთ 2, 3.8 - დააბრუნეთ 3, 29.56 -დააბრუნეთ 28, 100.81 დააბრუნეთ 101, 205.91 - დააბრუნეთ 206
function customRound(numToRound) {
    if(numToRound - Math.floor(numToRound) < 0.8) {
        return Math.floor(numToRound);
    } else {
        return Math.round(numToRound);
    }
}
console.log(customRound(2.7));
console.log(customRound(3.8));

// ბონუს დავალება 2
// https://leetcode.com/problems/fizz-buzz/
// მარტივად რომ ვთქვათ დავალება შემდეგია: 
// 1-დან N -რიცხვამდე დალოგეთ რიცხვები:
// მაგრამ თუ რიცხვი იყოფა 3-ზე დაბეჭდეთ რიცხვის მაგივრად სიტყვა fizz
// ხოლო თუ რიცხვი იყოფა 3-ზე და 5ზე ერთად მაშინ გამოიტანეთ fizz buzz

function bonusTask(N) {
    for (let i = 1; i < N; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizz buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}

bonusTask(30);