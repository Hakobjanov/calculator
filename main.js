let digitBtns = document.querySelectorAll('.digit');
let firstNum;
let toBeFirst;
let operator;


function inputDigit(event) {
    if (toBeFirst || inputScreen.value === '0') {
        inputScreen.value = '';
        toBeFirst = false;
    }

    inputScreen.value += event.target.innerText/*value?*/
    blink(event.target);
}

function blink(btn) {
    btn.classList.add('active');
    setTimeout(() => {btn.classList.remove('active')}, 100)
}

digitBtns.forEach(btn => btn.onclick = inputDigit)

function handle(op) {
    if (firstNum && !toBeFirst) {
        result();
    }

    operator = op;

    firstNum = +inputScreen.value;
    toBeFirst = true;

}

// sum.onclick = () => handle('+'); 
// sub.onclick = () => handle('-'); 
// mult.onclick = () => handle('*'); 
// div.onclick = () => handle('/'); 

[sum, sub, mult, div].forEach(btn => btn.onclick = function () { handle(this.innerText), blink(this) })

function result() {
    // if (operator === '+') {
    //     inputScreen.value = firstNum + +inputScreen.value;  
    // } else if (operator === '-') {
    //     inputScreen.value = firstNum - inputScreen.value;
    // } else if (operator === '*') {
    //     inputScreen.value = firstNum * inputScreen.value;
    // } else if (operator = '/') {
    //     inputScreen.value = firstNum / inputScreen.value;
    // }
    if (!firstNum || !operator || !inputScreen.value) return

    inputScreen.value = eval(`firstNum ${operator} +inputScreen.value`)

    firstNum = 0;
    toBeFirst = true;

    blink(equal);
}

equal.onclick = result;

clear.onclick = clearAll;

function clearAll() {
    inputScreen.value = '0';
    operator = '';

    blink(clear);

}

del.onclick = () => {
    inputScreen.value = inputScreen.value.slice(0, -1) || 0;
    blink(del);
    // if (inputScreen.value === ''){
    //     inputScreen.value = '0';
    // }
}

dot.onclick = () => {
    if (!inputScreen.value.includes('.')) {
        inputScreen.value += '.';
    }

    blink(dot);
}

document.body.onkeydown = (e) => {
    switch (e.key) { 
        case '1': one.onclick({target: one});
        break
        
    }
}

// zero.onclick = () => {
//     if (toBeFirst) {  
//         inputScreen.value = '';
//         toBeFirst = false;
//     }
// }

/* deleteBtn .remove
inputScreen = ''*/