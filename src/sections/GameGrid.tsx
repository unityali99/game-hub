import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchResult {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    httpService
      .get<FetchResult>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err: AxiosError) => {
        setError(err.message);
        console.log(err);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
