import axios from "axios";

const Axios = axios.create({
  baseURL: "http://192.168.1.71:8070"
});

export default Axios;