const arithmetic = require('../server');

describe("Hexadecimal Arithmetic Operations", () => {
    test("addition(x, y) should return the sum of x and y", () => {
        expect(arithmetic.addition(3, 1)).toBe(4);
    });

    test("subtraction(x, y) should return the difference of x and y", () => {
        expect(arithmetic.subtraction(3, 1)).toBe(2);
    });

    test("multiplication(x, y) should return the product of x and y", () => {
        expect(arithmetic.multiplication(3, 2)).toBe(6);
    });

    test("division(x, y) should return the quotient of x and y", () => {
        expect(arithmetic.division(9, 3)).toBe(3);
    });
});