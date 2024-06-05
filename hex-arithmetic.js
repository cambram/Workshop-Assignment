const { isInputLimitReached, isOutputLimitReached, doesContainNegatives, 
    isDecimal, isInvalidInputType, isInvalidOutput } = require('./input-output-checks');

/* ------------------- Hexadecimal Arithmetic Functions ------------------- */
/**
 * Adds two hexadecimal numbers together.
 * 
 * @param {string} x - first number.
 * @param {string} y - second number.
 * @returns {string} returns the sum of x and y in hexadecimal format.
 */
function addition(x, y){
    if(!isInvalidInputType(x) && !isInvalidInputType(y)){
        let temp= (parseInt(x, 16) + parseInt(y, 16));
        let result = temp.toString(16);
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
    if(!isInvalidInputType(x) && !isInvalidInputType(y)){
        let temp = (parseInt(x, 16) - parseInt(y, 16));
        let result = temp.toString(16);
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
    if(!isInvalidInputType(x) && !isInvalidInputType(y)){
        let temp = (parseInt(x, 16) * parseInt(y, 16));
        let result = temp.toString(16);
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
    if(!isInvalidInputType(x) && !isInvalidInputType(y)){
        let temp = (parseInt(x, 16) / parseInt(y, 16));
        let result = temp.toString(16);
        return result;
    } else {
        return null;
    }
}

module.exports = { addition, subtraction, multiplication, division };