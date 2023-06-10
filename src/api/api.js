import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const buscar = async (url, setData) => {
  const res = await api.get(url);
  setData(res.data);
};
