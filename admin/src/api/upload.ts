import { sendPost } from "./axios";
import { RoutePathApi } from "../constants/constant";

// eslint-disable-next-line import/prefer-default-export
export const uploadMultiple = (payload: any) =>
  sendPost(RoutePathApi.UPLOAD_ADMIN_MULTIPLE_PATH, payload);
export const upload = (payload: any) =>
  sendPost(RoutePathApi.UPLOAD_ADMIN_PATH, payload);
