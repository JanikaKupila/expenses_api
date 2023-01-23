const { describe, expect, test } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');

// Test if GET expenses endpoint returns 200 and JSON correctly
// Problem with date/timestamp: date in table, but API call returns sort of timestamp
// Otherwise data seems correct
describe('GET expenses', () => {
  test('should return 200 and valid JSON', async () => {
    const response = await request(app)
      .get('/api/expenses')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          item: 'Movie tickets',
          shop: 'Niagara',
          category: 'Leisure',
          price: 6.00,
          date: '2023-01-22',
        }),
        expect.objectContaining({
          id: 2,
          item: 'Baby supplies',
          shop: 'OZBaby',
          category: 'Baby stuff',
          price: 127.90,
          date: '2023-01-16',
        }),
        expect.objectContaining({
          id: 3,
          item: 'Blu-rays',
          shop: 'Arrow Store',
          category: 'Leisure',
          price: 58.90,
          date: '2023-02-18',
        }),
        expect.objectContaining({
          id: 4,
          item: 'Groceries',
          shop: 'Prisma',
          category: 'Necessities',
          price: 113.78,
          date: '2023-02-01',
        }),
      ]),
    );
  });
});

// Test if GET item by ID works correctly and returns one item
// Received error, probably due date/timestamp issue
describe('GET item by ID', () => {
  test('Should return one item with correct ID', async () => {
    const response = await request(app)
      .get('/api/expenses/id/1')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
        item: 'Movie tickets',
        shop: 'Niagara',
        category: 'Leisure',
        price: 6.00,
        date: '2023-01-22',
      }),
    );
  });
});

// Test with ID not in the database, should return 404
// PASSED
describe('GET item by ID', () => {
  test('Should return 404 and Not Found', async () => {
    const response = await request(app)
      .get('/api/expenses/id/101');

    expect(response.status).toEqual(404);
    expect(response.text).toContain('Not Found');
  });
});

// Test with GET items by month returns all the correct items
// Problem with date/timestamp, otherwise data seems correct
describe('GET items by month', () => {
  test('Should return all items bought in particular month', async () => {
    const response = await request(app)
      .get('/api/expenses/month/1')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          item: 'Movie tickets',
          shop: 'Niagara',
          category: 'Leisure',
          price: 6.00,
          date: '2023-01-22',
        }),
        expect.objectContaining({
          id: 2,
          item: 'Baby supplies',
          shop: 'OZBaby',
          category: 'Baby stuff',
          price: 127.90,
          date: '2023-01-16',
        }),
      ]),
    );
  });
});

// Test with month not in the database, should return 404
// PASSED
describe('GET item by month', () => {
  test('Should return 404 and Not Found', async () => {
    const response = await request(app)
      .get('/api/expenses/month/13');

    expect(response.status).toEqual(404);
    expect(response.text).toContain('Not Found');
  });
});
