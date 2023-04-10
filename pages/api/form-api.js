import axios from "./axios";

export const send = (input) => axios.post("/api/users", input);
export const get = () => axios.get("/api/users");
export const test = () => axios.get("/api/hello");
