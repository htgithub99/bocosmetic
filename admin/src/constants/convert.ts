export const convertDataQueryInfinite = (data: any): any[] => {
  return data?.pages?.flatMap((page: any) => page.data) ?? [];
};
