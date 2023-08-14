import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/APIClient";

const apiClient = new APIClient<Game>("/games");

const useGame = (id: number | string) =>
  useQuery<Game, Error>({
    queryKey: ["game", id],
    queryFn: () => apiClient.fetch(id),
    staleTime: 100_000,
    retry: 4,
  });

export default useGame;
