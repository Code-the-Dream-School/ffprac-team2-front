/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';

// note: not used, but could be used with GET with params
const getData = async (url: string, params: AxiosRequestConfig<any> | undefined) => {
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
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error, `error - getAllData in ${url} route`);
  }
};

export { getData, getAllData };
