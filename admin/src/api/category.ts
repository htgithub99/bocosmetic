import { sendGet } from "./axios";

export const getListCategory = (params: any) =>
  sendGet("/category", params);
