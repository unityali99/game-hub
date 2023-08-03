import axios from "axios";

export interface FetchResult<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: <string>import.meta.env.VITE_API_KEY },
});
