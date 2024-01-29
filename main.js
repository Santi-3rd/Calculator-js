
let startingNum = document.querySelector('#display');

let newNum = '0'

let num1;
let operator = '';
let total = 0;
// let num2;

let digits = document.querySelectorAll(".digits button");
digits.forEach(button => {
    button.onclick = function() {
        if (newNum === '0' && button.innerText !== '0') {
            newNum = button.innerText;
        } else {
            newNum += button.innerText;
        }
        startingNum.innerText = newNum
    };
});


let operators = document.querySelectorAll(".operators button");
operators.forEach(button => {
    button.onclick = function() {
        num1 = newNum
        operator = button.innerText;
        newNum = '0'
    }
});


function add() {
    return Number(num1) + Number(newNum)
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
    startingNum.textContent = '0'
    newNum = '0'
}

// console.log(add())
// console.log(subtract())
// console.log(multiply())
// console.log(divide())

let equals = document.querySelector('#equals')
equals.onclick = function operate(num1, operator, newNum) {
    console.log(add())
}
