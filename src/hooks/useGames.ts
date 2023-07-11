import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { AxiosError, CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchResult {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    httpService
      .get<FetchResult>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
