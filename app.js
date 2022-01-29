//declare main variables SELECTORS
const displayer = document.querySelector('.input');
const acum = document.querySelector('.input-one');
const clear = document.querySelector('.btn-clear');
const dlt = document.querySelector('.btn-delete');
const para = document.querySelector('.input');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiplier = document.querySelector('.multiply');
const divider = document.querySelector('.divide');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');


//declare my general object.

const myNumbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    plus: '+',
    minus: '-',
    multiply: 'x',
    divide: '÷',
    dot: '.'
}

const firstNumber = [];
let operator = '';
const secondNumber = [];
const tempArray = [];

/* BASIC MATH OPERATIONS FUNCTION */

//THE MATH

//SUM CALCULATION

const add = (firstNumber, secondNumber) => {
return parseFloat(firstNumber) + parseFloat(secondNumber);
};

//SUBTRACT CALCULATION 

const subtract = (firstNumber, secondNumber) => {
return parseFloat(firstNumber) - parseFloat(secondNumber);
};
  
//MULTIPLY CALCULATION

const multiply = (firstNumber, secondNumber) => {
return parseFloat(firstNumber) * parseFloat(secondNumber);
};


//DIVIDE CALCULATION

const divide = (firstNumber, secondNumber) => {
return parseFloat(firstNumber) / parseFloat(secondNumber);
};


/* MAIN BUTTONS */

//CLEAR BUTTON EVENT LISTENER
const clearScreen = () => {
clear.addEventListener('click', () => {
   let confirmation = confirm('Are you sure you want to delete?');
    if(confirmation === true) {
    displayer.innerText = '0';
    acum.innerText = '';
    firstNumber.length = 0;
    secondNumber.length = 0; 
    operator = '';
    tempArray.length = 0;
    }
});
};

clearScreen();

//DELETE BUTTON EVENT LISTENER

const deleteSpace = () => {
dlt.addEventListener('click', () => {
    tempArray.pop();
    displayer.innerText = firstNumber.join('');
});
};

deleteSpace();


//CLICK EVENT LISTENERS

const myEventListeners = () => {

seven.addEventListener('click', () => {
    tempArray.push(myNumbers['seven']);
    displayer.innerText = tempArray.join('');
});

eight.addEventListener('click', () => {
    tempArray.push(myNumbers['eight']);
    displayer.innerText = tempArray.join('');
});

nine.addEventListener('click', () => {
    tempArray.push(myNumbers['nine']);
    displayer.innerText = tempArray.join('');
});

four.addEventListener('click', () => {
    tempArray.push(myNumbers['four']);
    displayer.innerText = tempArray.join('');
});

five.addEventListener('click', () => {
    tempArray.push(myNumbers['five']);
    displayer.innerText = tempArray.join('');
});

six.addEventListener('click', () => {
    tempArray.push(myNumbers['six']);
    displayer.innerText = tempArray.join('');
});

one.addEventListener('click', () => {
    tempArray.push(myNumbers['one']);
    displayer.innerText = tempArray.join('');
});

two.addEventListener('click', () => {
    tempArray.push(myNumbers['two']);
    displayer.innerText = tempArray.join('');
});

three.addEventListener('click', () => {
    tempArray.push(myNumbers['three']);
    displayer.innerText = tempArray.join('');
});

zero.addEventListener('click', () => {
    tempArray.push(myNumbers['zero']);
    displayer.innerText = tempArray.join('');
});

dot.addEventListener('click', () => {
    tempArray.push(myNumbers['dot']);
    displayer.innerText = tempArray.join('');
})

equal.addEventListener('click', () => {
    if(firstNumber.length > 0) {
        secondNumber.push(tempArray.toString().replace(/,/g,''));
        acum.innerText = `${firstNumber}  ${operator}  ${secondNumber}`;
    if(operator === myNumbers['plus']) {
            let result = add(firstNumber,secondNumber)
            displayer.innerText = result;
            firstNumber.shift();
            firstNumber.push(result);
            tempArray.length = 0;
            secondNumber.length = 0;
        } else if (operator === myNumbers['minus']) {
            let result = subtract(firstNumber,secondNumber)
            displayer.innerText = result;
            firstNumber.pop();
            firstNumber.push(result);
            tempArray.length = 0;
            secondNumber.length = 0;
            operator = '';
        } else if (operator === myNumbers['multiply']) {
            let result = multiply(firstNumber,secondNumber);
            displayer.innerText = result;
            firstNumber.pop();
            firstNumber.push(result);
            tempArray.length = 0;
            secondNumber.length = 0;
            operator = '';
        } else if (operator === myNumbers['divide']) {
            let result = divide(firstNumber,secondNumber);
            displayer.innerText = result;
            firstNumber.pop();
            firstNumber.push(result);
            tempArray.length = 0;
            secondNumber.length = 0;
            operator = '';
        }
    }
});

/* OPERATORS */

plus.addEventListener('click', () => {
    if(firstNumber.length > 0) {
        secondNumber.push(tempArray.toString().replace(/,/g,''));
        operator = myNumbers['plus'];
        acum.innerText = `${firstNumber}  ${operator}  ${secondNumber}`;
        let result = add(firstNumber,secondNumber)
        displayer.innerText = result;
        firstNumber.push(result);
        firstNumber.pop();
        tempArray.length = 0;
        secondNumber.length = 0;

    } 
    else {
        firstNumber.push(tempArray.toString().replace(/,/g,""));
        tempArray.length = 0;
        operator = myNumbers['plus'];
        acum.innerText = `${firstNumber} ${operator}`
        displayer.innerText = '0';
    }
});

minus.addEventListener('click', () => {
    if(firstNumber.length > 0) {   
        secondNumber.push(tempArray.toString().replace(/,/g,''));
        operator = myNumbers['minus'];
        acum.innerText = `${firstNumber}  ${operator}  ${secondNumber}`;
        let result = subtract(firstNumber,secondNumber)
        displayer.innerText = result;
        firstNumber.push(result);
        firstNumber.pop();
        tempArray.length = 0;
        secondNumber.length = 0;

    } 
    else {
        firstNumber.push(tempArray.toString().replace(/,/g,""));
        tempArray.length = 0;
        operator = myNumbers['minus'];
        acum.innerText = `${firstNumber} ${operator}`
        displayer.innerText = '0';
    }
});

multiplier.addEventListener('click', () => {
    if(firstNumber.length > 0) {
        
        secondNumber.push(tempArray.toString().replace(/,/g,''));
        operator = myNumbers['multiply'];
        acum.innerText = `${firstNumber}  ${operator}  ${secondNumber}`;
        let result = multiply(firstNumber,secondNumber);
        displayer.innerText = result;
        firstNumber.push(result);
        firstNumber.pop();
        tempArray.length = 0;
        secondNumber.length = 0;

    } 
    else {
        firstNumber.push(tempArray.toString().replace(/,/g,""));
        tempArray.length = 0;
        operator = myNumbers['multiply'];
        acum.innerText = `${firstNumber} ${operator}`
        displayer.innerText = '0';
    }
});

divider.addEventListener('click', () => {
    if(firstNumber.length > 0) { 
        secondNumber.push(tempArray.toString().replace(/,/g,''));
        operator = myNumbers['divide'];
        acum.innerText = `${firstNumber}  ${operator}  ${secondNumber}`;
        let result = divide(firstNumber,secondNumber)
        displayer.innerText = result;
        firstNumber.push(result);
        firstNumber.pop();
        tempArray.length = 0;
        secondNumber.length = 0;

    } 
    else {
        firstNumber.push(tempArray.toString().replace(/,/g,""));
        tempArray.length = 0;
        operator = myNumbers['divide'];
        acum.innerText = `${firstNumber} ${operator}`
        displayer.innerText = '0';
    }
});

};

myEventListeners();