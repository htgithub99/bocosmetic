import { QueryKey } from "constants/constant";
import { useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";

export default function useToggleMenu() {
  const queryClient = useQueryClient();

  const { data: collapsed } = useQuery<boolean>(
    QueryKey.TOGGLE_MENU_KEY,
    () => false,
    { enabled: false }
  );

  const onToggleMenu = useCallback(() => {
    document.body.classList.toggle("overflow-hidden", collapsed);
    queryClient.setQueryData(
      QueryKey.TOGGLE_MENU_KEY,
      (collapsed: any) => !collapsed
    );
  }, [queryClient]);

  return { collapsed: Boolean(collapsed), onToggleMenu };
}
