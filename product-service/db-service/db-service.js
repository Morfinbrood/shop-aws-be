'use strict';
import data from "./data.json";

export const getProductsDB = async () => {
    return Promise.resolve(data);
};

export const getProductDBById = async (targetId) => {
    return Promise.resolve(data.find(product => product.id === targetId));
};
