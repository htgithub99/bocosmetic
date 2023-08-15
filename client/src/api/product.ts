import {
  IParamProductByCategory,
  IParamProductTopPage,
} from "constants/interface";
import { sendGet } from "./axios";

// eslint-disable-next-line import/prefer-default-export
export const getProductByCategory = (params: IParamProductByCategory) =>
  sendGet("/product/get-product-by-category", params);
export const getProductTopPage = (params: IParamProductTopPage) =>
  sendGet("/product/get-product-top-page", params);
export const getProductById = (productId: string) =>
  sendGet(`/product/${productId}`);
export const getFilterByProduct = (params: IParamProductByCategory) =>
  sendGet("/product/get-filter-by-product", params);
