import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/APIClient";

const apiClient = new APIClient("/games");

const useTrailers = (gameId: number | string) => {
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => apiClient.fetch(`${gameId}/movies`),
    staleTime: 1000_000,
  });
};

export default useTrailers;
