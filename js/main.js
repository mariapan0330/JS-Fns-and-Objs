/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.
        C(9/5) + 32 = F
        C = (5/9)*(F-32)


    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelcius(tempF) {
    return (5/9)*(tempF-32)
}

console.log(toCelcius(32)) // 0
console.log(toCelcius(212)) // 100
console.log(toCelcius(50)) // 10

// practicing arrow func
var toCelc = F => (5/9)*(F-32)
console.log(toCelc(32)) // 0
console.log(toCelc(98)) // 36.67
console.log(toCelc(97)) // 36.11



/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    change_password(oldPw, newPw) {
        if (oldPw == this.password) {
            this.password = newPw
            console.log('Password has been changed.');
        } else {
            console.log('Old password is incorrect. Please try again.');
        }
    }
}


let jekyll = new User('Dr. Jekyll', 'abc123')
jekyll.change_password('abc123','cba321') // works
jekyll.change_password('whfdsn2','cba321') // doesn't work


/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods
    -- (concat, forEach, map, filter, etc)

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

let nums1 = [-10, -3, 4, -2, 8, 9, -3] 
let nums2 = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]
let nums3 = [2, 4, 6, 8, 10]


function squareNegs(nums) {
    return nums.filter(num => num < 0).map(x => x**2)
}


console.log(squareNegs(nums1)); // [100, 9, 4, 9]
console.log(squareNegs(nums2)); // [25, 16, 9, 4, 1]
console.log(squareNegs(nums3)); // []