import axios from "axios";

const instance = axios.create({
    baseURL: "http://duongtt-001-site1.ctempurl.com/",
    timeout: 100000,
})

instance.interceptors.response.use((response) => {
    return response.data;
  });
  
export default instance;