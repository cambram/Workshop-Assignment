const { isInputLimitReached, isOutputLimitReached, doesContainNegatives, 
    isDecimal, isInvalidInputType, isInvalidOutput } = require('../input-output-checks');

describe("Input and Output", () => {
    test("isInputLimitReached(x), should be false if x.length <= 3, should be true if x.length > 3", () => {
        expect(isInputLimitReached(345)).toBe(false);
        expect(isInputLimitReached(3345)).toBe(true);
    });

    test("isOutputLimitReached(x), should be false if x.length <= 6, should be true if x.length > 6", () => {
        expect(isOutputLimitReached(34546)).toBe(false);
        expect(isOutputLimitReached(3345536)).toBe(true);
    });

    test("doesContainNegatives(x), should be false if x >= 0, should be true if x < 0", () => {
        expect(doesContainNegatives(21)).toBe(false);
        expect(doesContainNegatives(0)).toBe(false);
        expect(doesContainNegatives(-1)).toBe(true);
    });

    test("isDecimal(x), should be false if x IS NOT a fraction, should be true if x IS a fraction", () => {
        expect(isDecimal(21)).toBe(false);
        expect(isDecimal(0.4)).toBe(true);
    });

    test("isInvalidInputType(x), should be true if x IS NOT an invalid input type, should be false if x IS an invalid input type", () => {
        expect(isInvalidInputType("a4f")).toBe(false);
        expect(isInvalidInputType("zh5")).toBe(true);
    });

    test("isInvalidOutput(x), should return true if answer is undefined", () => {
        expect(isInvalidOutput(4/0)).toBe(true);
        expect(isInvalidOutput(4/2)).toBe(false);
    });
});