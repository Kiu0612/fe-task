// implement API service wrapper here

import axios from "axios";
const apiClient = axios.create();

apiClient.defaults.baseURL =
    "https://us-central1-casus-fe-task.cloudfunctions.net";

apiClient.defaults.headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
};

apiClient.defaults.withCredentials = false;

export default apiClient;
