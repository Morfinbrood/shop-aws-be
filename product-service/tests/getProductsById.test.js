'use strict';

jest.mock('../db-service/db-service', () => ({
    __esModule: true,
    getProductDBById: jest.fn((targetId) => {
        if (targetId === "7567ec4b-b10c-48c5-9445-fc73c48a80a2")
            return {
                "count": 45,
                "description": "Book YDKJS: Async & Performance",
                "id": "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
                "price": 25,
                "title": "YDKJS: Async & Performance",
                "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/async%20%26%20performance/cover.jpg"
            }
        else {
            return undefined;
        }
    }),
}));


import { getProductsById } from "../handlers/getProductsById";

describe('getProductsById', () => {

    it('Should return correct product by its id', async () => {
        const expectedProduct = {
            "count": 45,
            "description": "Book YDKJS: Async & Performance",
            "id": "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
            "price": 25,
            "title": "YDKJS: Async & Performance",
            "image": "https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/async%20%26%20performance/cover.jpg"
        };

        const getProductsByIdResponse = await getProductsById(
            {
                pathParameters: {
                    id: expectedProduct.id
                }
            });

        expect(getProductsByIdResponse.statusCode).toBe(200);
        expect(JSON.parse(getProductsByIdResponse.body)).toMatchObject(expectedProduct);
    })

    it('Should return 404 eror when product not found with this ID', async () => {
        const testId = 'invalidID';
        const getProductsByIdResponse = await getProductsById(
            {
                pathParameters: {
                    productId: testId
                }
            });

        expect(getProductsByIdResponse.statusCode).toBe(404);
        expect(getProductsByIdResponse.body).toBe('Product not found');
    })
})