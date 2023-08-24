import type { RcFile } from "antd/es/upload/interface";
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

export const getBase64 = (originFileObj: RcFile) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(originFileObj as RcFile);
    reader.onload = () => resolve(reader.result as string);
  }) as any;
};
