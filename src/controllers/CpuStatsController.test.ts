import request from 'supertest';
import app from '../app';

describe('Test CPU stats endpoint', () => {
  it('Request /api/cpu-stats should return the server cpu stats', async () => {
    const result = await request(app).get('/api/cpu-stats').send();

    expect(result.status).toBe(200);

    expect(result.body.data).toEqual(
      expect.objectContaining({
        currentUsage: expect.any(Number),
        currentTime: expect.any(Number),
        loadAverage: expect.any(Number),
        uptime: expect.any(Number),
      })
    );
  });
});
