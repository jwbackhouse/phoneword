const router = require('../routers/router.js');
const express = require('express');
const app = require('../../app.js');
const supertest = require('supertest');

const request = supertest(app);

describe('/GET endpoint', () => {
  test('Should return response to query "23"', async done => {
    const res = await request.get('/convert/23');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    done();
  });

  test('Should throw an error with non-numerical query', async done => {
    const res = await request.get('/convert/abc');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeEmpty;
    done();
  });
});
