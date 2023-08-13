import { AxiosRequestConfig } from "axios";
import httpService, { FetchResult } from "./httpService";

export class APIClient<T> {
  private endpoint: string;

  constructor(endPoint: string) {
    this.endpoint = endPoint;
  }

  fetchAll = (config?: AxiosRequestConfig) =>
    httpService
      .get<FetchResult<T>>(this.endpoint, config)
      .then((res) => res.data);

  fetch = (id: number | string, config?: AxiosRequestConfig) =>
    httpService
      .get<T>(`${this.endpoint}/${id}`, config)
      .then((res) => res.data);
}
