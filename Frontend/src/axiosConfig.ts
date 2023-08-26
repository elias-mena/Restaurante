import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.defaults.headers.common["api-key"] = "123456";

export default instance;
