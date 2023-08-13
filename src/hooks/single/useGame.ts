import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/APIClient";
import { Platform } from "../list/usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}

const apiClient = new APIClient<Game>("/games");

const useGame = (id: number | string) =>
  useQuery<Game, Error>({
    queryKey: ["game", id],
    queryFn: () => apiClient.fetch(id),
    staleTime: 100_000,
    retry: 4,
  });

export default useGame;
