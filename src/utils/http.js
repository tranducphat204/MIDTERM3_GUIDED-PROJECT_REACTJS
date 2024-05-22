import axios, { AxiosInstance } from "axios";

class Http {
    constructor() {
        this.Http = axios.create({
          baseURL: "https://api.github.com/",
          headers: {
            "Content-Type": "application/json",
          },
        });
    }
}

const http = new Http();

export default http;