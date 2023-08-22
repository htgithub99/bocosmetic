import { ICategory } from "./interface";

export const convertDataQueryInfinite = (data: any): any[] => {
  return data?.pages?.flatMap((page: any) => page.data) ?? [];
};

export const convertDataCategoryToOptions = (data: ICategory[]) => {
  return data
    ?.filter((item: ICategory) => !item.parent_id)
    ?.map(({ category_name, _id }: ICategory) => ({
      value: _id,
      label: category_name,
    }));
};
