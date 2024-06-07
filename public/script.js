let input1 = '';
let input2 = '';
let operator = '';
let calculationCompleted = false;
let removeOperatorDisplay = false;

const display = document.getElementById('answer-text'); // get doc access to the display to manipulate it

function appendInput(input){
    if(removeOperatorDisplay){ // if the user is entering the second operator, remove previous text to show the next input
        display.textContent = '';
        removeOperatorDisplay = false;
    }
    if(calculationCompleted){ 
        clearDisplay();
        calculationCompleted = false;
        display.className = "";
    }

    if(display.textContent.length < 3){ // don't allow inputs larger than 3 digits
        display.textContent += input.toUpperCase(); // append each input to the display
    }
}

function clearDisplay() { // clear the display
    display.textContent = '';
    input1 = '';
    input2 = '';
    currentOperation = '';
}

function setOperator(input){
    removeOperatorDisplay = true; // allow for the operation to diaplay but then delete it for input 2
    input1 = display.textContent.toLowerCase(); //save input 1
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

async function equals(){ // calculate the equation
    input2 = display.textContent.toLowerCase(); //save input 2
    let data = {
        operation: operator,
        x: input1,
        y: input2
    };

    const response = await fetch('/equals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if(result.result == null){
        display.textContent = 'INVALID';
        display.className = "invalid";
    } else {
        display.textContent = result.result.toUpperCase();
    }
    calculationCompleted = true;
}