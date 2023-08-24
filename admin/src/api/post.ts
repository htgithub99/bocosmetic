import { sendDelete, sendGet, sendPost, sendPut } from "./axios";

export const getListPost = (params: any) => sendGet("/post", params);
export const getByIdPost = (id: number) => sendGet(`/post/${id}`);
export const createPost = (payload: any) => sendPost("/post/create", payload);
export const updatePost = (id: number, payload: any) =>
  sendPut(`/post/update/${id}`, payload);
export const deletePost = (id: string) => sendDelete(`/post/delete/${id}`);
