'use strict';
import { getProductDBById } from "../db-service/db-service";

export const getProductsById = async (request, context, callback) => {
    try {
        const targetId = request.pathParameters.id;
        const product = await getProductDBById(targetId);

        if (!product) {
            return {
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET"
                },
                statusCode: 404,
                body: `Product not found`
            }
        }
        return {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET"
            },
            statusCode: 200,
            body: JSON.stringify(product)
        }
    } catch (error) {
        return {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET"
            },
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
};
