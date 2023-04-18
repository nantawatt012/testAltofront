// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
// axios.interceptors.response.use((error) => {
//   console.error("Error:", error);
//   return Promise.reject(error);
// });
export default axios;
