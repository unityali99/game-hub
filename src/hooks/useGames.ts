import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import httpService, { FetchResult } from "../services/httpService";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResult<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      httpService
        .get<FetchResult<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
