import { useQuery } from "@tanstack/react-query";
import httpService from "../services/httpService";
import { FetchResult } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<FetchResult<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      httpService.get<FetchResult<Genre>>("/genres").then((res) => res.data),
    staleTime: 100_000,
  });
};

export default useGenres;
