import axios, { AxiosRequestConfig } from 'axios';

const token = localStorage.getItem('token');

export const headers = {
    Authorization: `Bearer ${token}`,
};
export const getHeaders = () => {
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return headers;
};

// note: not used, but could be used with GET with params
const getData = async (url: string, params: AxiosRequestConfig) => {
    try {
        const res = await axios.get(url, params);
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error, `error - getData in ${url} route`);
    }
};

const getAllData = async (url: string) => {
    try {
        const res = await axios.get(url, { headers });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error, `error - getAllData in ${url} route`);
    }
};

export { getData, getAllData };
