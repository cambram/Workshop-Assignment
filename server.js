const express = require('express');
const app = express();
let hexDictionary = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

app.get('/', (req, res) => {
    res.send('<h1>Hello World<h1>');
});

const startServer = () => {
    return app.listen(3000, ()=>{
        console.log('server running on port 3000');
    });
};

/* ------------------- Hexadecimal Arithmetic Functions ------------------- */
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

/* ------------------- Input and Output ------------------- */
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

function isInvalidInputType(input){
    for(var i = 0; i < input.length; i++){
        if(!containsHex(input.charAt(i))){
            return true;
        }
    }
    return false;
}

function containsHex(x){
    let contains = false;
    for(var i = 0; i < 16; i++){
        if(x == hexDictionary[i]){
            contains = true;
            break;
        }
    }
    return contains;
}

function isInvalidOutput(output){
    if(output == undefined || output == Infinity)
        return true;
    else
        return false;
}

/* GUI */

module.exports = {app, startServer, addition, subtraction, multiplication, division, 
    isInputLimitReached, isOutputLimitReached, doesContainNegatives, isDecimal, isInvalidInputType, isInvalidOutput};