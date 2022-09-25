'use strict';
import data from "../dbData/data.JSON"

export const getProductsList = async (request, context, callback) => {

    try {
        const dataListString = JSON.stringify(data);
        return {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET"
            },
            statusCode: 200,
            body: JSON.stringify(dataListString),
        }

    } catch (err) {
        return {
            request: request.body,
            statusCode: 500,
            body: JSON.stringify(err)
        }
    }
};
