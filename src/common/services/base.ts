import frontendMentorAxios from '../config/axios';

export async function getRequest(URL: any) {
  return frontendMentorAxios
    .get(`${process.env.URL_API}/${URL}`)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
}

export function postRequest(URL: string, payload: any) {
  return frontendMentorAxios
    .post(`${process.env.URL_API}/${URL}`, payload)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
}

export function patchRequest(URL: string, payload: any) {
  return frontendMentorAxios
    .patch(`${process.env.URL_API}/${URL}`, payload)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
}

export function putRequest(URL: string, payload: any) {
  return frontendMentorAxios
    .put(`${process.env.URL_API}/${URL}`, payload)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
}

export function deleteRequest(URL: string) {
  return frontendMentorAxios
    .delete(`${process.env.URL_API}/${URL}`)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
}
