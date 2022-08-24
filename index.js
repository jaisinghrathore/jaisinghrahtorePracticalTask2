// 1. --- Write a function that takes two numbers (a and b) as Sum a and Return the result
const sum = (a, b) => {
    return a + b;
};

// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result
const string = (value) => {
    return value.slice(-3);
};

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.
const spl = (value) => {
    const arr = [];

    for (let val of value.toString()) {
        arr.push(Number(val));
    }
    return arr;
};

// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a
const lastN = (arr, n) => {
    return arr.slice(-n);
};

// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

const merge = (arr1, arr2) => {
    const arr = [...arr1, ...arr2];
    const obj = {};
    arr.forEach((val) => {
        obj[val] = val; //HAS O(n) Time complexity
    });
    const nonDublicateArr = Object.keys(obj);
    return nonDublicateArr;
};

// 6. Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

const six = (obj, n) => {
    if (obj[n]) {
        return true;
    } else {
        return false;
    }
};

