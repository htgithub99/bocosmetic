import { RoutePathApi } from "constants/constant";
import { sendDelete, sendGet, sendPost, sendPut } from "./axios";

export const getListProduct = (params: any) => sendGet(RoutePathApi.PRODUCT_LIST_ADMIN_PATH, params);
export const getByIdProduct = (id: number) => sendGet(`${RoutePathApi.PRODUCT_GET_BY_ID_ADMIN_PATH}/${id}`);
export const createProduct = (payload: any) =>
  sendPost(RoutePathApi.PRODUCT_CREATE_ADMIN_PATH, payload);
export const updateProduct = (id: number, payload: any) =>
  sendPut(`${RoutePathApi.PRODUCT_UPDATE_ADMIN_PATH}/${id}`, payload);
export const deleteProduct = (id: string) =>
  sendDelete(`${RoutePathApi.PRODUCT_DELETE_ADMIN_PATH}/${id}`);
  export const importProduct = (payload: any) =>
  sendPost(RoutePathApi.PRODUCT_ADD_ADMIN_PATH, payload);
