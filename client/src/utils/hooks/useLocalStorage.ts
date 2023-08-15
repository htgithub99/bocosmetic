import { ReactQueryKey } from "constants/constant";
import { useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";

export const useLocalStorage = (keyName: string, defaultValue: any) => {
  const queryClient = useQueryClient();

  const { data: storedValue, isLoading } = useQuery<any>(
    ReactQueryKey.LOCAL_STRORAGE_KEY,
    () => {
      try {
        const value = window.localStorage.getItem(keyName);
        if (value) {
          return JSON.parse(value);
        } else {
          window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (err) {
        return defaultValue;
      }
    },
    { enabled: true }
  );

  const setNewStoredValue = useCallback(
    (newValue: any) => {
      try {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {}
      queryClient.setQueryData(
        ReactQueryKey.LOCAL_STRORAGE_KEY,
        () => newValue
      );
    },
    [queryClient]
  );
  return {
    storedValue: isLoading ? defaultValue : storedValue,
    setNewStoredValue,
  };
};
