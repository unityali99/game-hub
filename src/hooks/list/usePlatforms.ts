import { useQuery } from "@tanstack/react-query";
import { FetchResult } from "../../services/httpService";
import { APIClient } from "../../services/APIClient";
import { Platform } from "../../models/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResult<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.fetchAll,
    staleTime: 100_000,
  });

export default usePlatforms;
