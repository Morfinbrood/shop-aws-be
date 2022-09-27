'use strict';

jest.mock('../db-service/db-service', () => ({
  __esModule: true,
  getProductsDB: jest.fn(() =>
    [
      {
        "count": 133,
        "description": "Book YDKJS: Up & Going",
        "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        "price": 21,
        "title": "YDKJS Scopes and Closures",
        "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/up%20%26%20going/cover.jpg"
      },
      {
        "count": 353,
        "description": "Book YDKJS: Scope & Closures",
        "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
        "price": 22,
        "title": "YDKJS: Scope & Closures",
        "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/scope%20%26%20closures/cover.jpg"
      },
      {
        "count": 123,
        "description": "Book YDKJS: This & Object Prototypes",
        "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
        "price": 23,
        "title": "YDKJS: This & Object Prototypes",
        "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/this%20%26%20object%20prototypes/cover.jpg"
      },
      {
        "count": 4,
        "description": "Book YDKJS: Types & Grammar",
        "id": "7567ec4b-b10c-48c5-9345-fc73348a80a1",
        "price": 24,
        "title": "YDKJS: Types & Grammar",
        "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/types%20%26%20grammar/cover.jpg"
      },
      {
        "count": 45,
        "description": "Book YDKJS: Async & Performance",
        "id": "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
        "price": 25,
        "title": "YDKJS: Async & Performance",
        "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/async%20%26%20performance/cover.jpg"
      },
      {
        "count": 45,
        "description": "Book YDKJS: ES6 & Beyond",
        "id": "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
        "price": 25,
        "title": "YDKJS: Types & Grammar",
        "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/es6%20%26%20beyond/cover.jpg"
      }
    ]
  ),
}));


import { getProductsList } from "../handlers/getProductsList";
import data from "../db-service/data.json";

describe('getProductsList', () => {

  it('Should return correct product list', async () => {
    const getProductsListResponse = await getProductsList();
    expect(getProductsListResponse.statusCode).toBe(200);
    expect(JSON.parse(getProductsListResponse.body)).toEqual(data);
  })

})