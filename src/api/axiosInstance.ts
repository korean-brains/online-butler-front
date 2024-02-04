import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}`,
});

export const mockAdapter = new MockAdapter(axiosInstance);
export default axiosInstance;
