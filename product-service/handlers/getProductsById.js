'use strict';
import data from "../dbData/data.JSON"

export const getProductsById = async (request, context, callback) => {
    try {

        const product = data.find(request.id)

        if (!product) {
            return {
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET"
                },
                statusCode: 404,
                body: JSON.stringify(`can't find product with this id ${request.id}`)
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
            body: JSON.stringify(err)
        }
    }
};
