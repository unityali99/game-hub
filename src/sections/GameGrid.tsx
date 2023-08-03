import { Alert, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Card from "../components/Card";
import CardPlaceholder from "../components/CardPlaceholder";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const arr = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <>
      {error && (
        <Alert
          rounded={5}
          my={10}
          justifyContent={"center"}
          w={"20%"}
          mx={"auto"}
          textAlign={"center"}
          colorScheme="red"
        >
          <Text color="red.200">{error.message}</Text>
        </Alert>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} padding={5}>
        {isLoading
          ? arr.map((n) => <CardPlaceholder key={n} />)
          : data?.results.map((game) => <Card key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
}
