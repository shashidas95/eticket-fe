import axios from "axios";

export const axiosInstance = axios.create({
  //baseURL: "http://localhost:7001/api/v1/",
  baseURL: "http://localhost:7001/api/v1/",
  withCredentials: true,
});

// export const axiosInstance = axios.create({
//   baseURL: "http://192.168.0.106:7001/api/v1/",
// });
