import { ICategory, IProductCard } from "./interface";
import { BACKGROUND_LIST_PRODUCT_TYPE } from "./json";

export const convertDataCategory = (data: ICategory[]) => {
  return data.map((item: ICategory, index: number) => ({
    ...item,
    background: BACKGROUND_LIST_PRODUCT_TYPE[index],
  }));
};

export const isDisableBtnBuy = (storedValue: IProductCard[], _id: string) => {
  return storedValue.map((item: IProductCard) => item._id).includes(_id);
};

export const converTextEditor = (rawHTML: string) =>
  rawHTML.replace(/\n/g, "").replace(/\s+/g, " ").replace(/"/g, '\\"');
