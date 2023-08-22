import { getListCategory } from "api/category";
import { QueryKey } from "constants/constant";
import { IParamCategory } from "constants/interface";
import { useQuery } from "react-query";

interface IHooks {
  enabled?: boolean;
  payload?: IParamCategory;
}

export default function useCategory({ enabled = false, payload }: IHooks) {
  const { data: categoryData, refetch: refetchCategory } = useQuery(
    [QueryKey.GET_CATEGORY_KEY, payload],
    () => getListCategory({ ...payload, pageSize: 500 })
  );

  return { categoryData, refetchCategory };
}
