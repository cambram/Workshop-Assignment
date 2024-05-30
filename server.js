const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world<h1>');
});

app.listen(3000, ()=>{
    console.log('server running on port 3000');
});

/* Hexadecimal Arithmetic Functions */
function addition(x, y){
    let result = (x+y);
    return result;
}

function subtraction(x, y){
    let result = (x-y);
    return result;
}

function multiplication(x, y){
    let result = (x*y);
    return result;
}

function division(x, y){
    if(y === 0){
        return 0;
    } else {
        let result = (x/y);
        return result;
    }
}

/* Input and Output */
function isInputLimitReached(input){
    if(input.toString().length > 3){
        return true;
    } else {
        return false;
    }
}

function isOutputLimitReached(output){
    if(output.toString().length > 6){
        return true;
    } else {
        return false;
    }
}

function doesContainNegatives(output){
    if(output < 0){
        return true;
    } else {
        return false;
    }
}

function isDecimal(output){
    if(output % 1 != 0){
        return true;
    } else {
        return false;
    }
}

let hexDictionary = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G'];
function isInvalidInputType(input){
    //?????
}

function isInvalidOutput(){

}

/* GUI */

module.exports = {addition, subtraction, multiplication, division};