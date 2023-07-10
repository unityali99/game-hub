import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: <string>import.meta.env.API_KEY },
});
