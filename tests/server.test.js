//const tests = require('../server');
const {app, startServer} = require('../server');
const request = require("supertest");

let server;

beforeAll(() => {
    server = startServer();
});

afterAll((done) => {
    server.close(done);
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