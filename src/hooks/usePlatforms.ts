import { useQuery } from "@tanstack/react-query";
import httpService, { FetchResult } from "../services/httpService";
import { APIClient } from "../services/APIClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResult<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.fetchAll,
    staleTime: 100_000,
  });

export default usePlatforms;
