import { useQuery, UseQueryOptions } from "react-query";
import { getUsers } from "../utils/getUsers";


export function useUsers(page: number) {
  return useQuery(
    ["users", page], () => getUsers(page),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
}

//