let hexDictionary = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

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

/**
 * Checks if the output is a decimal
 * 
 * @param {number} output - the output in base 10 format.
 * @returns {boolean} returns true if the input is a decimal.
 */
function isDecimal(output){
    if(output % 1 != 0){
        return true;
    } else {
        return false;
    }
}

/**
 * Checks if the input type is valid. The input type should be of type hexadecimal
 * 
 * @param {string} input - the hexadecimal input.
 * @returns {boolean} returns true for invalid input and false for valid input.
 */
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

module.exports = { isInputLimitReached, isOutputLimitReached, doesContainNegatives, 
    isDecimal, isInvalidInputType, isInvalidOutput };