import axios from 'axios';

import { TIMEOUT_REQUEST } from '../constants';

const frontendMentorAxios = axios.create({
  baseURL: process.env.URL_API,
  timeout: TIMEOUT_REQUEST,
});

// const requestHandler = (request: any) => {
//   request.headers.authorization = `Bearer ${Cookies.get(TOKEN)}`;
//   request.headers.requestId = uuid();
//   return request;
// };

// const responseHandler = (response: AxiosResponse<any, any>) => {
//   if (response.status === HttpStatusCode.Unauthorized) {
//     window.location.href = "/";
//   }

//   return response;
// };

// const errorHandler = (error: any) => {
//   return Promise.reject(error);
// };

// bumameAxios.interceptors.request.use(
//   (request) => requestHandler(request),
//   (error) => errorHandler(error)
// );

// bumameAxios.interceptors.response.use(
//   (response) => responseHandler(response),
//   (error) => errorHandler(error)
// );

export default frontendMentorAxios;
