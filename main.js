
let startingNum = document.querySelector('#display');

let secondDisplay = document.querySelector('#second-display');

let newNum;
let num1;
let operator = '';
let total = 0;

let digits = document.querySelectorAll(".all-buttons button");
digits.forEach(button => {
    button.onclick = function() {
        if (newNum === undefined && button.innerText !== undefined) {
            newNum = button.innerText;
        } else {
            //Prevents multiple decimal points 
            if (button.innerText === '.' && newNum.includes('.')) {
                return;
            }
            newNum += button.innerText
        }
        startingNum.innerText = newNum
    };
});

let backspace = document.querySelector("#backspace");
backspace.onclick = function() {
    let currentText = startingNum.textContent;
    let updatedText = currentText.slice(0, -1);
    startingNum.textContent = updatedText;
    newNum = updatedText;
    // if (operator != '') {
    //     newNum = undefined
    // }
    console.log(startingNum.textContent, newNum)
}

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
function modulo() {
    return Number(num1) % Number(newNum)
}

function clear() {
    startingNum.textContent = '0';
    secondDisplay.textContent = ''
    newNum = undefined;
    operator = '';
    num1 = '0';
    total = '0';
}

let clearScrn = document.querySelector('#clear');
clearScrn.onclick = clear

function operate() {
    if (num1 === undefined) {
        num1 = '0'
    } else if (newNum === undefined){
        total = num1;
        startingNum.textContent = total;
    } else if ( operator == '÷' && newNum == '0'){
        startingNum.textContent = "Stop that";
        clear;
    } else if ( operator == '%' && newNum == '0'){
        startingNum.textContent = "Stop that";
        clear;
    } else if (operator == '+') {
        total = add();
        startingNum.textContent = total;
        console.log(num1,operator,newNum + " = " + total);
    } else if (operator == '-') {
        total = subtract();
        startingNum.textContent = total;
        console.log(num1,operator,newNum + " = " + total);
    } else if (operator == '÷') {
        total = divide();
        startingNum.textContent = total;
        console.log(num1,operator,newNum + " = " + total);
    } else if (operator == 'x') {
        total = multiply();
        startingNum.textContent = total;
        console.log(num1,operator,newNum + " = " + total);
    } else if (operator == '%') {
        total = modulo();
        startingNum.textContent = total;
        console.log(num1,operator,newNum + " = " + total);
    }
    secondDisplay.textContent = num1 + ' ' + operator + ' ' + newNum + " = ";
    num1 = String(total);

}

let equals = document.querySelector('#equals')
equals.onclick = operate;

let operators = document.querySelectorAll("#operators");
operators.forEach(button => {
    button.onclick = function() {
        if (operator == '') {
            num1 = newNum;
        } else if (operator != '') {
            if (num1 == undefined) {
                num1 = '0'
            }
            if (newNum == undefined) {
                newNum = '0'
            }
            operate();
            secondDisplay.textContent = num1 + ' ' + operator;
        }
        operator = button.innerText;
        newNum = undefined;
    }
});
