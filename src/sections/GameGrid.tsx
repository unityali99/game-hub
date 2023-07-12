import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Card from "../components/Card";
import CardPlaceholder from "../components/CardPlaceholder";

export default function GameGrid() {
  const { games, error, isLoading } = useGames();
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} padding={5}>
        {isLoading && arr.map((n) => <CardPlaceholder key={n} />)}
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
