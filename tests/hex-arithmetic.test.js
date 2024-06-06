const { addition, subtraction, multiplication, division } = require('../hex-arithmetic');

describe("Hexadecimal Arithmetic Operations", () => {
    test("addition(x, y) should return the sum of x and y", () => {
        expect(addition("f42", "e3")).toBe("1025");
        expect(addition("34f", "2d34")).toBe(null); //input too big
        expect(addition("35d", "2ab")).toBe("608");
        expect(addition("zgf", "2ab")).toBe(null); //invalid type
    });

    test("subtraction(x, y) should return the difference of x and y", () => {
        expect(subtraction("f42", "e3")).toBe("e5f");
    });

    test("multiplication(x, y) should return the product of x and y", () => {
        expect(multiplication("f42", "e3")).toBe("d8786");
    });

    test("division(x, y) should return the quotient of x and y", () => {
        expect(division("f42", "e")).toBe("117");
    });
});