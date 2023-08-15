import { getResources } from "api/resources";
import { ReactQueryKey } from "constants/constant";
import { IParamResources } from "constants/interface";
import { useQuery } from "react-query";

interface IHooks {
  enabled?: boolean;
  payload?: IParamResources;
}

export default function useResources({ enabled = false, payload }: IHooks) {
  const { data: resourcesData, refetch: refetchResources } = useQuery(
    [ReactQueryKey.GET_RESOURCES_KEY],
    () => getResources({ ...payload }),
    { enabled }
  );

  return { resourcesData, refetchResources };
}
