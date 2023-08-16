import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/APIClient";
import { FetchResult } from "../../services/httpService";
import ScreenShot from "../../models/ScreenShot";

const useScreenShots = (gameId: number | string) => {
  const apiClient = new APIClient<ScreenShot>(`games/${gameId}/screenshots`);

  return useQuery<FetchResult<ScreenShot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.fetchAll,
    staleTime: 100_000,
    retry: 4,
  });
};

export default useScreenShots;
