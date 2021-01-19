import config from 'config';
import { authHeader } from '../_helpers';

export const blogService = {
    getAll,
    getPublished,
    getPaginated
};

function getAll(page) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/blogs?page=${page}`, requestOptions).then(handleResponse);
}

function getPublished(page) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/blogs/published?page=${page}`, requestOptions).then(handleResponse);
}

function getPaginated(page) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/blogs/paginated?page=${page}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        //console.log(data);
        return data;
    });
}