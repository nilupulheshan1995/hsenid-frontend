import axios from "axios";
import { AddCategoryType, AddItem } from "../types/api-types";

const API_BASE = "http://localhost:8080/api";

export const GET_ALL_CATEGORIES_API = API_BASE + "/category/getAll";

export const addCategories = async (data: AddCategoryType) => {
  console.log("data :", data);
  return await axios({
    method: "POST",
    baseURL: API_BASE,
    url: "/category/add",
    data: data,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addItem = async (data: AddItem) => {
  console.log("data :", data);
  return await axios({
    method: "POST",
    baseURL: API_BASE,
    url: "/item/add",
    data: data,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
