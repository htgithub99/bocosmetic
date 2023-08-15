import { getCategory } from "api/category";
import { ReactQueryKey } from "constants/constant";
import { convertDataCategory } from "constants/convert";
import { IParamCategory } from "constants/interface";
import { useQuery } from "react-query";

interface IHooks {
  enabled?: boolean;
  payload?: IParamCategory;
}

export default function useCategory({ enabled = false, payload }: IHooks) {
  const { data: categoryData, refetch: refetchCategory } = useQuery(
    [ReactQueryKey.GET_CATEGORY_KEY, payload],
    () =>
      getCategory({ ...payload, pageSize: 500 }).then(({ data }) => convertDataCategory(data))
  );

  return { categoryData, refetchCategory };
}
