import request from 'supertest';
import app from '../app';

describe('Test PingController', () => {
  it("Request /ping should return {status: 'OK'}", async () => {
    const result = await request(app).get('/ping').send();

    expect(result.status).toBe(200);
    expect(result.body.data.status).toBe('OK');
  });
});
