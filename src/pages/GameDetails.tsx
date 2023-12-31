import {
  Box,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Attributes from "../components/Attributes";
import ExpandableText from "../components/ExpandableText";
import useTrailers from "../hooks/list/useTrailers";
import useGame from "../hooks/single/useGame";
import Trailer from "../components/Trailer";
import useScreenShots from "../hooks/list/useScreenShots";

function GameDetails() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const { data: trailers } = useTrailers(slug!);
  const { data: screenShots } = useScreenShots(slug!);

  if (isLoading)
    return (
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.600"
        size="xl"
        boxSize={20}
        display={"block"}
        mx={"auto"}
        my={40}
      />
    );

  if (!game || error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} p={{ base: 3, lg: 5 }}>
      <GridItem px={2}>
        <Heading
          mx={{ base: 1, lg: 5 }}
          fontSize={{ base: 25, md: 35, lg: 50 }}
          my={10}
        >
          {game?.name}
        </Heading>
        <Box mx={{ base: 2, lg: 7 }}>
          <ExpandableText text={game?.description_raw} limit={500} />
        </Box>
        <SimpleGrid
          columns={{ base: 2, lg: 4 }}
          justifyItems={"center"}
          fontSize={{ base: 15, lg: 20 }}
          my={{ base: 10, lg: 20 }}
        >
          <Attributes game={game} />
        </SimpleGrid>
      </GridItem>
      <GridItem px={2}>
        {trailers && trailers.count > 0 && (
          <Trailer trailer={trailers.results[0]} />
        )}
        <SimpleGrid justifyItems={"center"} columns={{ base: 1, md: 2, xl: 3 }}>
          {screenShots &&
            screenShots.count > 0 &&
            screenShots?.results.map(({ id, image }) => (
              <Image rounded={"lg"} p={1} key={id} src={image} />
            ))}
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetails;
