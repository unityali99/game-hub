import { useQuery } from "@tanstack/react-query";
import httpService, { FetchResult } from "../services/httpService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResult<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      httpService
        .get<FetchResult<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 100_000,
  });

export default usePlatforms;
