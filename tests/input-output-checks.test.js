const { isInputLimitReached, isOutputLimitReached, doesContainNegatives, 
    isDecimal, isInvalidInputType, isInfinity} = require('../input-output-checks');
const { division, isValidInput, isInvalidOutput } = require('../hex-arithmetic');

describe("Input and Output", () => {
    test("isInputLimitReached(x), should be false if x.length <= 3, should be true if x.length > 3", () => {
        expect(isInputLimitReached("3d4")).toBe(false);
        expect(isInputLimitReached("3d44")).toBe(true);
    });

    test("isOutputLimitReached(x), should be false if x.length <= 6, should be true if x.length > 6", () => {
        expect(isOutputLimitReached("ab34")).toBe(false);
        expect(isOutputLimitReached("ab3434e")).toBe(true);
    });

    test("doesContainNegatives(x), should be false if x >= 0, should be true if x < 0", () => {
        expect(doesContainNegatives("21")).toBe(false);
        expect(doesContainNegatives("0")).toBe(false);
        expect(doesContainNegatives("-1")).toBe(true);
    });

    test("isDecimal(x), should be false if x IS NOT a fraction, should be true if x IS a fraction", () => {
        expect(isDecimal("21")).toBe(false);
        expect(isDecimal("ab.234")).toBe(true);
    });

    test("isInvalidInputType(x), should be true if x IS NOT an invalid input type, should be false if x IS an invalid input type", () => {
        expect(isInvalidInputType("a4f")).toBe(false);
        expect(isInvalidInputType("zh5")).toBe(true);
    });

    test("isInfinity(x), should return true if answer is infinity (undefined)", () => {
        expect(isInfinity(division("4", "0"))).toBe(true);
        expect(isInfinity("Infinity")).toBe(true);
        expect(isInfinity(division("4", "2"))).toBe(false);
    });

    test("isValidInput(x), should return true if the input is valid", () => {
        expect(isValidInput("aef","aef")).toBe(true);
        expect(isValidInput("aeff","aef")).toBe(false);
        expect(isValidInput("aez","34d")).toBe(false);
    });

    test("isInvalidOutput(x), should return true if output is invalid", () => {
        expect(isInvalidOutput("ae3")).toBe(false);
        expect(isInvalidOutput("Infinity")).toBe(true);
        expect(isInvalidOutput(null)).toBe(true);
    });
});