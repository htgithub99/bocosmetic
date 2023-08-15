import { getProductByCategory } from "api/product";
import { ReactQueryKey } from "constants/constant";
import { IParamProductByCategory } from "constants/interface";
import { useQuery } from "react-query";

interface IHooks {
  enabled?: boolean;
  payload: IParamProductByCategory;
}
export default function useProduct({ enabled = false, payload }: IHooks) {
  const { data: productData, refetch: refetchProduct } = useQuery(
    [ReactQueryKey.GET_PRODUCT_BY_CATEGORY_KEY, payload],
    () => getProductByCategory({ ...payload })
  );
  return { productData, refetchProduct };
}
