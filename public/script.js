let input1 = '';
let input2 = '';
let operator = '';
let removeOperatorDisplay = true;

const display = document.getElementById('answer-text'); // get doc access to the display to manipulate it

function appendInput(input){
    if(removeOperatorDisplay){ // if the user is entering the second operator, remove previous text to show the next input
        display.textContent = '';
        removeOperatorDisplay = false;
    }

    if(display.textContent.length < 3){ // don't allow inputs larger than 3 digits
        display.textContent += input; // append each input to the display
    }
}

function clearDisplay() { // clear the display
    display.textContent = '';
    input1 = '';
    input2 = '';
    currentOperation = null;
}

function setOperator(input){
    removeOperatorDisplay = true; // allow for the operation to diaplay but then delete it for input 2
    input1 = display.textContent; //save input 1
    operator = input; // save the operator
    switch(input){ // display the operation on the display
        case 'add':
            display.textContent = '+';
            break;
        case 'sub':
            display.textContent = '−';
            break;
        case 'mul':
            display.textContent = '×';
            break;
        case 'div':
            display.textContent = '÷';
            break;
        default:
            break;
    }
}

function equals(){ // calculate the equation
    input2 = display.textContent;
}