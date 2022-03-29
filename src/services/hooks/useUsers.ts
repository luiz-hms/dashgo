import { useQuery, UseQueryOptions } from "react-query";
import { getUsers } from "../utils/getUsers";


export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(
    ["users", page], () => getUsers(page),
    {
      staleTime: 1000 * 60 * 10,
      ...options,
    }
  );
}