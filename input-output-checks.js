let hexDictionary = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

/* ------------------- Input and Output ------------------- */
/**
 * Checks if the output is a decimal
 * 
 * @param {string} input - the input in hexadecimal format.
 * @returns {boolean} returns true if the input length is longer than 3 digits.
 */
function isInputLimitReached(input){
    if(input.length > 3)
        return true;
    else 
        return false;
}

/**
 * Checks if the output is a decimal
 * 
 * @param {string} output - the output in hexadecimal format.
 * @returns {boolean} returns true if the output length is longer than 6 digits.
 */
function isOutputLimitReached(output){
    if((output !== "Infinity" || output !== null) && output.length > 6){
        return true;
    } else {
        return false;
    }
}

/**
 * Checks if the output is a decimal
 * 
 * @param {string} output - the output in hexadecimal format.
 * @returns {boolean} returns true if the output is negative.
 */
function doesContainNegatives(output){
    if((output !== "Infinity" || output !== null) && parseInt(output, 16) < 0)
        return true;
    else 
        return false;
    
}

/**
 * Checks if the output is a decimal
 * 
 * @param {string} output - the output in hexadecimal format.
 * @returns {boolean} returns true if the input is a decimal.
 */
function isDecimal(output){
    if((output !== "Infinity" || output !== null) && output.includes('.')){
        return true;
    }else 
        return false;
    
}

/**
 * Checks if the input type is valid. The input type should be of type hexadecimal
 * 
 * @param {string} input - the hexadecimal input.
 * @returns {boolean} returns true for invalid input and false for valid input.
 */
function isInvalidInputType(input){
    for(var i = 0; i < input.length; i++){
        if(!containsHex(input.charAt(i)))
            return true;
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

/**
 * Checks if the output is a valid output (no divison by 0)
 * 
 * @param {string} output - the hexadecimal input.
 * @returns {boolean} returns true for invalid output.
 */
function isInfinity(output){
    if(output == "Infinity" || output == null)
        return true;
    else
        return false;
}

module.exports = { isInputLimitReached, isOutputLimitReached, doesContainNegatives, 
    isDecimal, isInvalidInputType, isInfinity };