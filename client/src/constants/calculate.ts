import _ from "lodash";
import { IProductCard } from "./interface";

export const percentageDiscount = (price: number, salePrice: number) =>
  Math.round(((price - salePrice) / price) * 100);

export const calculateTotalMoney = (storedValue: IProductCard[]) => {
  const newValue = storedValue.map((item: IProductCard) => {
    const price = item.sale_price || item.price;
    const quantity = item.quantity_order || 1;
    return price * quantity;
  });
  return _.sum(newValue);
};

export const calculateSubTotalMoney = (storedValue: IProductCard[]) => {
  const newValue = storedValue.map((item: IProductCard) => {
    const price = item.sale_price || item.price;
    const quantity = item.quantity_order || 1;
    return price * quantity;
  });
  return _.sum(newValue);
};

export const calculateSubTotalMoneyToItem = (item: IProductCard) => {
  const price = item.sale_price || item.price;
  const quantity = item.quantity_order || 1;
  return price * quantity;
};
