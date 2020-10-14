const router = require('../routers/router.js');
const express = require('express');
// const moxios = require('moxios');
const app = require('../../index.js');
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
  })
});


// const initRouter = () => {
//   const app = express();
//   app.use(router);
//   return app;
// };

// describe('GET /convert/:query', () => {
//   beforeEach(() => {
//     moxios.install();
//   });
//   afterEach(() => {
//     moxios.uninstall();
//   });
//   test('Should return response to query '23'', async () => {
//     moxios.stubRequest(/18.133.60.101:8082\/convert\/23/, {
//       status: 200,
//       response: {
//         data: ['ad', 'ae', 'af']
//       }
//     });
//     const app = initRouter();
//     await request(app).get('/convert/23');
//     expect(moxios.requests.mostRecent().url).toBe('http://18.133.60.101:8082/convert/23');
//   });

//   // test('It should 200 and return a transformed version of GitHub response', async () => {
//   //   moxios.stubRequest(/api.github.com\/users/, {
//   //     status: 200,
//   //     response: {
//   //       blog: 'https://codewithhugo.com',
//   //       location: 'London',
//   //       bio: 'Developer, JavaScript',
//   //       public_repos: 39,
//   //     }
//   //   });
//   //   const app = initHugo();
//   //   const res = await request(app).get('/hugo');
//   //   expect(res.body).toEqual({
//   //     blog: 'https://codewithhugo.com',
//   //       location: 'London',
//   //       bio: 'Developer, JavaScript',
//   //       publicRepos: 39,
//   //   });
//   // });
// });
