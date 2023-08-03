import { useQuery } from "@tanstack/react-query";
import { FetchResult } from "../services/httpService";
import { APIClient } from "../services/APIClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResult<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.fetchAll,
    staleTime: 100_000,
  });

export default useGenres;
