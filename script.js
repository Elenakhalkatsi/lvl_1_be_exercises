function calc() {
    firstNum = Number(prompt("First Number: "));
    secondNum = Number(prompt("Second Number: "));
    operation = prompt("Operation: ");
    let result;

    if (operation === "+") {
        result = sum(firstNum, secondNum);
    } else if (operation === "-") {
        result = sub(firstNum, secondNum);
    } else if (operation === "*") {
        result = mult(firstNum, secondNum);
    } else if (operation === "/") {
        result = div(firstNum, secondNum);
    } else {
        result = "Try again";
    }

    prettyOutput(result);
}

function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function dev(num1, num2) {
    return num1 / num2;
}

function prettyOutput(result) {
    console.log("Your result: ");
    console.log("/////// " + result + " ///////");
}

function anotherOutput(result) {
    console.log("Your result: ");
    console.log("******* " + result + " *******");
}

calc();