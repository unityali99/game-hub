import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

interface FetchResult<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      httpService
        .get<FetchResult<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => setData(res.data.results))
        .catch((err: AxiosError) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        })
        .finally(() => setLoading(false));

      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
