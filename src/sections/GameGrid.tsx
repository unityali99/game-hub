import { Alert, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import CardPlaceholder from "../components/CardPlaceholder";
import useGames from "../hooks/list/useGames";
import useGameQueryStore from "../utils/gameQueryStore";

export default function GameGrid() {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const arr = Array.from({ length: 12 }, (_, index) => index + 1);
  const fetchedGamesLength =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
      <InfiniteScroll
        dataLength={fetchedGamesLength}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={
          <Spinner display={"block"} mx={"auto"} boxSize={"16"} my={"16"} />
        }
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          padding={5}
        >
          {isLoading
            ? arr.map((n) => <CardPlaceholder key={n} />)
            : games?.pages.map((fetchResult, index) => (
                <Fragment key={index}>
                  {fetchResult.results.map((game) => (
                    <Card key={game.id} game={game} />
                  ))}
                </Fragment>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}
