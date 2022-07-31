import axios from "axios";
import { AddCategoryType, AddItem } from "../types/api-types";

const API_BASE = "http://localhost:8080/api";

export const GET_ALL_CATEGORIES_API = API_BASE + "/category/getAll";
export const GET_ALL_ITEM_API = API_BASE + "/item/getAll";
export const GET_ALL_ORDER_API = API_BASE + "/order/getAll";
export const GET_ITEMS_BY_ORDER = API_BASE + "/item/get";


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

export const getItemsByOrder = async (orderId:number) => {
  console.log("data :", orderId);
  return await axios({
    method: "GET",
    baseURL: API_BASE,
    url: `/item/get/${orderId}`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
