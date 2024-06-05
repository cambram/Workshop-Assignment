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

module.exports = { addition, subtraction, multiplication, division };