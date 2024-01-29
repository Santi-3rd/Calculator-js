
let startingNum = document.querySelector('#display');

let newNum = '0'

let num1;
let operator = '';
let total = 0;

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
        if (operator == '') {
            num1 = newNum
        }
        operator = button.innerText;
        newNum = '0'
    }
});

function add() {
    return Number(num1) + Number(newNum)
}

function subtract() {
    return Number(num1) - Number(newNum)
}

function multiply() {
    return Number(num1) * Number(newNum)
}

function divide() {
    return Number(num1) / Number(newNum)
}

clear = document.querySelector('#clear');
clear.onclick = function() {
    startingNum.textContent = '0'
    newNum = '0'
    operator = ''
    num1 = '0'
    total = '0'
}


let equals = document.querySelector('#equals')
equals.onclick = function operate() {
    if (operator == '+') {
        total = add()
        startingNum.textContent = total
        console.log(num1,operator,newNum + " = " + total)
    } else if (operator == '-') {
        total = subtract()
        startingNum.textContent = total
        console.log(num1,operator,newNum + " = " + total)
    } else if (operator == '÷') {
        total = divide()
        startingNum.textContent = total
        console.log(num1,operator,newNum + " = " + total)
    } else if (operator == 'x') {
        total = multiply()
        startingNum.textContent = total
        console.log(num1,operator,newNum + " = " + total)
    }
    num1 = String(total)
}
