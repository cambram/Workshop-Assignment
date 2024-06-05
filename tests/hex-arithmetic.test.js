const { addition, subtraction, multiplication, division } = require('../hex-arithmetic');

describe("Hexadecimal Arithmetic Operations", () => {
    test("addition(x, y) should return the sum of x and y", () => {
        expect(addition(3, 1)).toBe(4);
    });

    test("subtraction(x, y) should return the difference of x and y", () => {
        expect(subtraction(3, 1)).toBe(2);
    });

    test("multiplication(x, y) should return the product of x and y", () => {
        expect(multiplication(3, 2)).toBe(6);
    });

    test("division(x, y) should return the quotient of x and y", () => {
        expect(division(9, 3)).toBe(3);
    });
});