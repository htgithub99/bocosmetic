import { sendGet, sendPost, sendPut } from "./axios";

export const getOrder = (params: any) => sendGet("/order", params);

export const createOrder = (payload: any) => sendPost("/order/create", payload);

export const getByIdOrder = (orderId: string) => sendGet(`order/${orderId}`);

export const updateOrder = (orderId: string, payload: any) =>
  sendPut(`order/update/${orderId}`, payload);
