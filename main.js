
let startingDisplay = document.querySelector('#display');

let newDisplay = '0'

let num1 = 2;
let operator = '';
let num2 = 2;

let digits = document.querySelectorAll(".digits button");
digits.forEach(button => {
    button.onclick = function() {
        if (newDisplay === '0' && button.innerText !== '0') {
            newDisplay = button.innerText;
        } else {
            newDisplay += button.innerText;
        }
        startingDisplay.innerText = newDisplay
    };
});

let operators = document.querySelectorAll(".operators button");
operators.forEach(button => {
    button.onclick = function() {
        operator = button.innerText
    }
})

function add() {
    return num1 + num2
}

function subtract() {
    return num1 - num2
}

function multiply() {
    return num1 * num2
}

function divide() {
    return num1 / num2
}

clear = document.querySelector('#clear');
clear.onclick = function() {
    startingDisplay.textContent = '0'
    newDisplay = '0'
}

// console.log(add())
// console.log(subtract())
// console.log(multiply())
// console.log(divide())


function operate(num1, operator, num2) {

}