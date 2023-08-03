import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import httpService, { FetchResult } from "../services/httpService";
import { Platform } from "./usePlatforms";
import { APIClient } from "../services/APIClient";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResult<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.fetchAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
