//1.
// იპოვეთ bug-ები(1 ან რამდენიმე) და გაასწორეთ:

let listOfGreatestLeaders = ['JFK', 'Mao', 'FDR', 'შევარდნაძე'];

// მოცემულმა ფუნქციამ უნდა დააბრუნუს true როდესაც იპოვის ჭეშმარიტ კოლორიტს და ლიდერს
function findGreatestAmongLeaders(arrayToFind){
    let isGreatestLeader = false;
    arrayToFind.forEach((leader) => {   //forEach მდე ეწერა listOfGreatestLeaders, arrayToFind ის ნაცვლად, return forEach ში არ მუშაობს, და ცვლადით განვსაზღვრე
        if(leader === 'შევარდნაძე'){
            isGreatestLeader = true;
        }
    });
    return isGreatestLeader;
}

console.log(findGreatestAmongLeaders(listOfGreatestLeaders));
//2.
// იპოვეთ bug-ები(1 ან რამდენიმე) და გაასწორეთ

function addNewLeaderToDb(name, country, yearBorn){
    const newLeader = {   //ცვლადი დეკლარირებული იყო როგორც გლობალური (დავუმატე const)
        name,
        country,
        year: yearBorn,
    }
    listOfGreatestLeaders.push(newLeader);
}

addNewLeaderToDb('Elene', 'Georgia', 2000);
console.log(listOfGreatestLeaders);


//3. challenge
// დაწერეთ ფუნქცია appendTitleToLeader(listOfLeaders)
// გადმოწოდებულ ფუნქციაში ყველა პრეზიდენტს სახელის წინ დაუმატეთ: მისი აღმატებულება
//3.1 challenge within a challenge
// გაითვალისწინეთ რომ პრეზიდენტი შეიძლება ხან ობიექტი იყოს ხან სტრინგი.

function appendTitleToLeader(listOfLeaders) {
    listOfLeaders = listOfLeaders.map((value, index) => {
        if (typeof(value) === "string") {
            return "misi aghmatebuleba " + value;
        } else if (typeof(value) === "object") {
            value.name = "misi aghmatebuleba " + value.name;
            return value;
        } 
    })
    return listOfLeaders;
}

console.log(appendTitleToLeader(listOfGreatestLeaders));

//4. 
// compareArray(arr1, arr2)
// თუ arr1[i] === arr2[i] -ყველა ელემენტისთვის დააბრუნეთ true თუ არა false

function compareArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

//5. challenge
// დაწერეთ compareArrayValues(arr1, arr2)
// აწი ინდექსი არ არის გარანტირებული რომ დაემთხვეს მაგალითად
// compareArrayValues(['obj1', 'obj2'], ['obj2', 'obj1']]) უნდა დააბრუნოთ true
// იმიტომ რომ index-ის მიუხედავად მნიშვნელობები ემთხვევა.

function compareArrayValues(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i]) || !arr1.includes(arr2[i])) {
                return false;
            } 
        }  
        return true;  
    }
    return false;
}

console.log(compareArrayValues(['1', '2'], ['2', '1', '5']));
console.log(compareArrayValues(['1', '2'], ['2', '1']));

// 6. challenge
// დაწერეთ ფუნქცია: drawSquare(squareSize)
// კონსოლ ლოგის საშუალებით დაბეჭდეთ # სიმბოლოთი შედგენილი კვადრატი
// მაგალითად:
/* drawSquare(2)
     ##
     ##
*/
/* drawSquare(4)
     ####
     ####
     ####
     ####
*/

function drawSquare(squareSize) {
    for (let i = 0; i < squareSize; i++) {   
        console.log("#".repeat(squareSize));
    }
}
drawSquare(5);

// Bonus 1.
const warringLeaders = [
    {
        name: 'hitler',
        foughtWith: 'stalin'
    },
    {
        name: 'stalin',
        foughtWith: 'hitler',
    },
    {
        name: 'FDR',
        foughtWith: 'hitler',
    },
    {
        name: 'Truman',
        foughtWith: 'stalin',
    },
    {
        name: 'მიხეილ სააკაშვილი',
        foughtWith: 'შევარდნაძე'
    },
    {
        name: 'შევარდნაძე',
        foughtWith: 'მიხეილ სააკაშვილი',
    },

];

function leaderWars(leaderToFind) {
    let enemies = '';
    warringLeaders.forEach((leader) => {
        if (leader.name === leaderToFind && !enemies.includes(leader.foughtWith)) {
            enemies += ', ' + leader.foughtWith;
        } else if (leader.foughtWith === leaderToFind && !enemies.includes(leader.name)) {
            enemies += ', ' + leader.name;
        } 
    })

    if (enemies.length > 0) {
        console.log(enemies.replace(',',''));
    } else {
        console.log("Aravin");
    }
}

leaderWars('stalin');

// დაწერეთ ფუნქცია leaderWars - დაბეჭდეთ ყველა ლიდერსთვის ვის ეომებოდნენ ისინი
// მაგალითად ზემო ობიექტში hitler-ის მტრებად დაბეჭდეთ: stalin, fdr
// სტალინის მტრად FDR,Truman
// FDR-ის მტრად დაბეჭდეთ: 'არავინ'
// და ა.შ

// Bonus 2
// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
    const divisors = [];
    nString = String(n);
    for (let i = 0; i < String(n).length; i++) {
        if (Number(nString[i]) === 0) {
            continue;
        } else if (n % Number(nString[i]) === 0) {
            divisors.push(Number(nString[i]));
        } else {
            continue;
        }
    }
    console.log(divisors.length);
}

findDigits(12345);