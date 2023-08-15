import { getProductTopPage } from "api/product";
import { ReactQueryKey } from "constants/constant";
import { IParamProductTopPage } from "constants/interface";
import { useQuery } from "react-query";

interface IHooks {
  enabled?: boolean;
  payload: IParamProductTopPage;
}

export default function useProductTopPage({
  enabled = false,
  payload,
}: IHooks) {
  const { data, refetch: refetchProductTopPage } = useQuery(
    [ReactQueryKey.GET_PRODUCT_TOP_PAGE_KEY, payload],
    () => getProductTopPage({ ...payload }),
    { enabled }
  );

  return { data, refetchProductTopPage };
}
