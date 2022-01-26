import apiClient from "./api";

export function getRequest(URL) {
    return apiClient.get(`${URL}`).then((response) => response);
}

export function postRequest(URL, payload) {
    return apiClient.post(`${URL}`, payload).then((response) => response);
}
