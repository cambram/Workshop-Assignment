//const tests = require('../server');
const {app, startServer, addition, subtraction, multiplication, division, 
    isInputLimitReached, isOutputLimitReached, doesContainNegatives, isDecimal, isInvalidInputType, isInvalidOutput} = require('../server');
const request = require("supertest");

let server;

beforeAll(() => {
    server = startServer();
});

afterAll((done) => {
    server.close(done);
});

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
        expect(isInvalidInputType("A4F")).toBe(false);
        expect(isInvalidInputType("ZH5")).toBe(true);
    });

    test("isInvalidOutput(x), should return true if answer is undefined", () => {
        expect(isInvalidOutput(4/0)).toBe(true);
        expect(isInvalidOutput(4/2)).toBe(false);
    });
});

describe('GET requests', () => {
    it('should respond with a button for input', async () => {
      await request(app).get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toContain('<button>1</button>');
      });
    });
  });