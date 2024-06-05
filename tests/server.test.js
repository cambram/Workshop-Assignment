const tests = require('../server');

describe("Hexadecimal Arithmetic Operations", () => {
    test("addition(x, y) should return the sum of x and y", () => {
        expect(tests.addition(3, 1)).toBe(4);
    });

    test("subtraction(x, y) should return the difference of x and y", () => {
        expect(tests.subtraction(3, 1)).toBe(2);
    });

    test("multiplication(x, y) should return the product of x and y", () => {
        expect(tests.multiplication(3, 2)).toBe(6);
    });

    test("division(x, y) should return the quotient of x and y", () => {
        expect(tests.division(9, 3)).toBe(3);
    });
});

describe("Input and Output", () => {
    test("isInputLimitReached(x), should be false if x.length <= 3, should be true if x.length > 3", () => {
        expect(tests.isInputLimitReached(345)).toBe(false);
        expect(tests.isInputLimitReached(3345)).toBe(true);
    });

    test("isOutputLimitReached(x), should be false if x.length <= 6, should be true if x.length > 6", () => {
        expect(tests.isOutputLimitReached(34546)).toBe(false);
        expect(tests.isOutputLimitReached(3345536)).toBe(true);
    });

    test("doesContainNegatives(x), should be false if x >= 0, should be true if x < 0", () => {
        expect(tests.doesContainNegatives(21)).toBe(false);
        expect(tests.doesContainNegatives(0)).toBe(false);
        expect(tests.doesContainNegatives(-1)).toBe(true);
    });

    test("isDecimal(x), should be false if x is NOT a fraction, should be true if x IS a fraction", () => {
        expect(tests.isDecimal(21)).toBe(false);
        expect(tests.isDecimal(0.4)).toBe(true);
    });
});

//isInputLimitReached, isOutputLimitReached, doesContainNegatives, isDecimal