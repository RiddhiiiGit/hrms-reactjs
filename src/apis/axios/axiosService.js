import axios from "./axios";

export const AxiosAuthServices = {
  async get(url, params) {
    return this.handleGetRequest(url, params);
  },

  async post(url, data, headers = {}) {
    return this.handlePostRequest("post", url, data, headers);
  },

  async put(url, data, headers = {}) {
    return this.handlePostRequest("put", url, data, headers);
  },

  async delete(url, params) {
    return this.handleDeleteRequest(url, params);
  },

  async handlePostRequest(method, url, data = null, headers = {}) {
    const rawToken = localStorage.getItem("serviceToken") || "";
    const serviceToken = `Bearer ${rawToken}`;
    const response = await axios[method](url, data, {
      headers: { Authorization: serviceToken, ...headers },
    });
    return response;
  },

  async handleGetRequest(url, params = null) {
    const rawToken = localStorage.getItem("serviceToken") || "";
    const serviceToken = `Bearer ${rawToken}`;
    const config = {
      headers: { Authorization: serviceToken },
      params,
    };
    const response = await axios.get(url, config);
    return response;
  },

  async handleDeleteRequest(url, params = null) {
    const rawToken = localStorage.getItem("serviceToken") || "";
    const serviceToken = `Bearer ${rawToken}`;
    const config = {
      headers: { Authorization: serviceToken },
      params,
    };
    const response = await axios.delete(url, config);
    return response;
  },
};

export const AxiosServices = {
  get(url, params) {
    return this.handleRequest("get", url, { params });
  },
  post(url, data) {
    return this.handleRequest("post", url, data);
  },
  put(url, data) {
    return this.handleRequest("put", url, data);
  },
  delete(url, data) {
    return this.handleRequest("delete", url, data);
  },

  async handleRequest(method, url, data = null) {
    try {
      const response = await axios({ method, url, data });
      return response;
    } catch (error) {
      console.error(
        `Error in ${method.toUpperCase()} request to ${url}:`,
        error
      );
      throw error;
    }
  },
};
