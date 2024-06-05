const { addition, subtraction, multiplication, division } = require('../hex-arithmetic');

describe("Hexadecimal Arithmetic Operations", () => {
    test("addition(x, y) should return the sum of x and y", () => {
        expect(addition("F42", "E3")).toBe("1025");
    });

    test("subtraction(x, y) should return the difference of x and y", () => {
        expect(subtraction("F42", "E3")).toBe("e5f");
    });

    test("multiplication(x, y) should return the product of x and y", () => {
        expect(multiplication("F42", "E3")).toBe("d8786");
    });

    test("division(x, y) should return the quotient of x and y", () => {
        expect(division("F42", "E")).toBe("117");
    });
});