import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/APIClient";
import { Trailer } from "../../models/Trailer";
import { FetchResult } from "../../services/httpService";

const useTrailers = (gameId: number | string) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery<FetchResult<Trailer>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.fetchAll,
    staleTime: 1000_000,
  });
};

export default useTrailers;
