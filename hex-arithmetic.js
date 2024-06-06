const { isInputLimitReached, isOutputLimitReached, doesContainNegatives, 
    isDecimal, isInvalidInputType, isInfinity } = require('./input-output-checks');
/* ------------------- Hexadecimal Arithmetic Functions ------------------- */
/**
 * Adds two hexadecimal numbers together.
 * 
 * @param {string} x - first number.
 * @param {string} y - second number.
 * @returns {string} returns the sum of x and y in hexadecimal format.
 */
function addition(x, y){
    if(isValidInput(x, y)){
        let temp= (parseInt(x, 16) + parseInt(y, 16));
        let result = temp.toString(16);
        if(isInvalidOutput(result))
            return null;
        return result;
    } else {
        return null;
    }
}

/**
 * Subtracts two hexadecimal numbers from each other.
 * 
 * @param {string} x - first number.
 * @param {string} y - second number.
 * @returns {string} returns the difference of x and y in hexadecimal format.
 */
function subtraction(x, y){
    if(isValidInput(x, y)){
        let temp = (parseInt(x, 16) - parseInt(y, 16));
        let result = temp.toString(16);
        if(isInvalidOutput(result))
            return null;
        return result;
    } else {
        return null;
    }
}

/**
 * Multiplies two hexadecimal numbers.
 * 
 * @param {string} x - first number.
 * @param {string} y - second number.
 * @returns {string} returns the product of x and y in hexadecimal format.
 */
function multiplication(x, y){
    if(isValidInput(x, y)){
        let temp = (parseInt(x, 16) * parseInt(y, 16));
        let result = temp.toString(16);
        if(isInvalidOutput(result))
            return null;
        return result;
    } else {
        return null;
    }
}

/**
 * Divides two hexadecimal numbers.
 * 
 * @param {string} x - first number.
 * @param {string} y - second number.
 * @returns {string} returns the quotient of x and y in hexadecimal format.
 */
function division(x, y){
    if(isValidInput(x, y)){
        let temp = (parseInt(x, 16) / parseInt(y, 16));
        let result = temp.toString(16);
        if(isInvalidOutput(result))
            return null;
        return result;
    } else {
        return null;
    }
}

/**
 * Confirms the validity of input values
 * 
 * @param {string} x - first input.
 * @param {string} y - second input.
 * @returns {string} returns true if the input is valid.
 */
function isValidInput(x, y){
    return (!isInvalidInputType(x) && !isInvalidInputType(y) && !isInputLimitReached(x) && !isInputLimitReached(y));
}

/**
 * Confirms the validity of output values
 * 
 * @param {string} output - the output in hexadecimal.
 * @returns {string} returns true if the output is invalid.
 */
function isInvalidOutput(output){
    return (isOutputLimitReached(output) || doesContainNegatives(output) || isDecimal(output) || isInfinity(output));
}

module.exports = { addition, subtraction, multiplication, division };