import { DOMAIN_URL } from './RequestConstants';
import axiosClient from 'axios';

export function getRequest(URL) {  
     URL = DOMAIN_URL + URL;
     return axiosClient.get(`${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
     URL = DOMAIN_URL + URL;
     return axiosClient.post(`${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
     URL = DOMAIN_URL + URL;
     return axiosClient.patch(`${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
     URL = DOMAIN_URL + URL;
     return axiosClient.delete(`${URL}`).then(response => response);
}