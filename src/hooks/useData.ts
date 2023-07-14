import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { AxiosError, CanceledError } from "axios";

interface FetchResult<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    httpService
      .get<FetchResult<T>>(endpoint, { signal: controller.signal })
      .then((res) => setData(res.data.results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useData;
