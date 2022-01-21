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
    const plus = document.querySelector('.plus');




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
        multiplier: '*',
        divide: '÷',
        dot: '.'
    }

    const finalResult = [];

//CLEAR BUTTON EVENT LISTENER
const clearScreen = () => {
    clear.addEventListener('click', () => {
        displayer.innerText = '';
        acum.innerText = '';
        finalResult.length = 0;
    });
};

clearScreen();

//DELETE BUTTON EVENT LISTENER

const deleteSpace = () => {
    dlt.addEventListener('click', () => {
        finalResult.pop();
        displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
};
deleteSpace();


//NUMBER 7 EVENT LISTENER

const sevenNum = () => {
    seven.addEventListener('click', () => {
       finalResult.push(myNumbers['seven']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

sevenNum();


//NUMBER 8 EVENT LISTENER
const eightNum = () => {
    eight.addEventListener('click', () => {
       finalResult.push(myNumbers['eight']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

eightNum();

//NUMBER 9 EVENT LISTENER

const nineNum = () => {
    nine.addEventListener('click', () => {
       finalResult.push(myNumbers['nine']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

nineNum();


//NUMBER 4 EVENT LISTENER
const fourNum = () => {
    four.addEventListener('click', () => {
       finalResult.push(myNumbers['four']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

fourNum();

//NUMBER 5 EVENT LISTENER
const fiveNum = () => {
    five.addEventListener('click', () => {
       finalResult.push(myNumbers['five']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

fiveNum();

//NUMBER SIX EVENT LISTENER

const sixNum = () => {
    six.addEventListener('click', () => {
       finalResult.push(myNumbers['six']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

sixNum();

//NUMBER ONE EVENT LISTENER

const oneNum = () => {
    one.addEventListener('click', () => {
       finalResult.push(myNumbers['one']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

oneNum();

//NUMBER TWO EVENT LISTENER

const twoNum = () => {
    two.addEventListener('click', () => {
       finalResult.push(myNumbers['two']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

twoNum();
//NUMBER THREE EVENT LISTENER

const threeNum = () => {
    three.addEventListener('click', () => {
       finalResult.push(myNumbers['three']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}

threeNum();

// SUM EVENT LISTENER
const plusOperator = () => {
    plus.addEventListener('click', () => {
       finalResult.push(myNumbers['plus']);
       displayer.innerText = finalResult.toString().replace(/,/g,"");
    });
}


plusOperator();




// const check = () => {
//     const para = document.querySelector('.input')
  


// }
