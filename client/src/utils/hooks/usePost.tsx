import { getPost } from "api/post";
import { ReactQueryKey } from "constants/constant";
import { IParamPost } from "constants/interface";
import { useQuery } from "react-query";

interface IHooks {
  enabled?: boolean;
  payload: IParamPost;
}

export default function usePost({ enabled = false, payload }: IHooks) {
  const { data, refetch: refetchGetPost } = useQuery(
    [ReactQueryKey.GET_POST_KEY, payload],
    () => getPost({ ...payload }),
    { enabled }
  );

  return { data, refetchGetPost };
}
