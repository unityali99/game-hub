import { useQuery } from "@tanstack/react-query";
import httpService from "../services/httpService";
import { FetchResult } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResult<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      httpService
        .get<FetchResult<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 100_000,
  });
};

export default usePlatforms;
