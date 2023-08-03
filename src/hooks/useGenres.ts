import { useQuery } from "@tanstack/react-query";
import httpService, { FetchResult } from "../services/httpService";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResult<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      httpService.get<FetchResult<Genre>>("/genres").then((res) => res.data),
    staleTime: 100_000,
  });

export default useGenres;
