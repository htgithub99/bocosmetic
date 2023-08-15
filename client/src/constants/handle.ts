import { IProductCard } from "./interface";

export const addProductToCart = (
  {
    quantity,
    quantity_order = 1,
    price,
    product_name,
    sale_price,
    _id,
    images,
  }: IProductCard,
  storedValue: IProductCard[],
  setNewStoredValue: (newValue: IProductCard[]) => void,
  increase_quanitty: number = 0
) => {
  const ids = storedValue?.map((item: IProductCard) => item._id) || [];
  const isDuplicate = ids.includes(_id);
  const newValue = isDuplicate
    ? storedValue?.map((i: IProductCard) => {
        if (i._id === _id && quantity_order <= quantity) {
          i.quantity_order = quantity_order + increase_quanitty;
        }
        return i;
      })
    : [
        ...storedValue,
        {
          quantity,
          quantity_order,
          price,
          product_name,
          _id,
          sale_price,
          images,
        },
      ];
  setNewStoredValue(newValue as any);
};
