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
        expect(subtraction("aa", "fff")).toBe(null); // negative output
        expect(subtraction("ed3", "ab3")).toBe("420");
        expect(subtraction("ed", "aaaa")).toBe(null); // input too big
    });

    test("multiplication(x, y) should return the product of x and y", () => {
        expect(multiplication("f42", "e3")).toBe("d8786");
        expect(multiplication("f42", "e3aa")).toBe(null); // input too big
        expect(multiplication("ed", "a3")).toBe("96e7");
    });

    test("division(x, y) should return the quotient of x and y", () => {s
        expect(division("f42", "e")).toBe("117");
        expect(division("f42", "e3")).toBe(null); // decimal output
        expect(division("f42", "e333")).toBe(null); // input too big
        expect(division("f42", "0")).toBe(null); // division by 0
    });
});