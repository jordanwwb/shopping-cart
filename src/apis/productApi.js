import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchProductsByCategory = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/category/${category}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchProductCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products/categories`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}