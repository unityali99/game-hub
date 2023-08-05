import { Fragment } from "react";
import { Alert, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Card from "../components/Card";
import CardPlaceholder from "../components/CardPlaceholder";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
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
          : data?.pages.map((fetchResult, index) => (
              <Fragment key={index}>
                {fetchResult.results.map((game) => (
                  <Card key={game.id} game={game} />
                ))}
              </Fragment>
            ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          onClick={fetchNextPage as () => void}
          disabled={isFetchingNextPage}
          my={"10"}
          display={"block"}
          mx={"auto"}
        >
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </Button>
      )}
    </>
  );
}
