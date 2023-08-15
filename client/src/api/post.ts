import { IParamPost } from "constants/interface";
import { sendGet } from "./axios";

// eslint-disable-next-line import/prefer-default-export
export const getPost = (params?: IParamPost) => sendGet("/post", params);
export const getPostById = (blogId: string) => sendGet(`/post/${blogId}`);
