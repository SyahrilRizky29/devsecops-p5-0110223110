const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('harus mengembalikan status 200 dan respon JSON', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('success');
  });
});