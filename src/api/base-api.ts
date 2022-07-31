import axios from "axios";

const API_BASE = "http://localhost:8080/api";

export const GET_ALL_CATEGORIES_API = API_BASE +  "/category/getAll"

export const getAllCategories = async () => {
  return await axios({
    method: "GET",
    baseURL: API_BASE,
    url: "/category/getAll",
    data: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
