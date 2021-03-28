let arr = [10, 20, 30];

const newArray = arr.map((value, index) => {
    if (value === "10") {
        return "Ten";
    } else {
        return value;
    }
})

const newArray = arr.filter((value, index) => {
    if (value === "10") {
        return false;
    } else {
        return true;
    }
})
