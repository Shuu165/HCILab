// Question 1
// While Loop

let num = 11; // first number > 10

while (num <= 40) {
    console.log(num);
    num += 2;
}

// For Loop

for (let i = 11; i <= 40; i += 2) {
    console.log(i);
}

// Question 2

function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//Example:
printReverse([d, a, b, s]); // Outputs: s, b, a, d

// Question 3

const movies = [
    { title: "In Bruges", rating: 5, hasWatched: true },
    { title: "Frozen", rating: 4.5, hasWatched: false },
    { title: "Mad Max Fury Road", rating: 5, hasWatched: true },
    { title: "Les Miserables", rating: 3.5, hasWatched: false }
];

movies.forEach(movie => {
    let message = `You have ${movie.hasWatched ? "watched" : "not seen"} "${movie.title}" - ${movie.rating} stars`;
    console.log(message);
});

// Question 4

function isUniform(arr) {
    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== firstElement) {
            return false;
        }
    }
    return true;
}

//Example:
console.log(isUniform([1, 1, 1, 1])); // output = true
console.log(isUniform([1, 2, 1, 1])); // output = false

// Question 5

function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

//Example:
console.log(sumArray([10, 22, 35])); // 67

// Question 6

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Examples:
console.log(palindrome("hannah")); // output = true
console.log(palindrome("hellaur")); // output = false
