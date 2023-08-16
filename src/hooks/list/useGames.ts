import { useInfiniteQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/APIClient";
import { FetchResult } from "../../services/httpService";
import { GameQuery } from "../../utils/gameQueryStore";
import { Game } from "../../models/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResult<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.fetchAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam as number,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    retry: 4,
  });

export default useGames;
