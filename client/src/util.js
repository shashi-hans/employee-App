const baseURL = (window.location.hostname === "localhost") ?
          "http://localhost:4000" : "https://employee-app-oezp.onrender.com";
const endpoint = '/api/employees';
export const fullURL = `${baseURL}${endpoint}`;
