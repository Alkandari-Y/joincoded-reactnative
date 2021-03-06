import axios from "axios";
import { baseUrl } from "./baseUrl";


const instance = axios.create({
  baseURL: `${baseUrl}/api`,
});

export default instance;
