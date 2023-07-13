import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { AxiosError, CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface FetchResult {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    httpService
      .get<FetchResult>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
