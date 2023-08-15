import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Attributes from "../components/Attributes";
import ExpandableText from "../components/ExpandableText";
import useTrailers from "../hooks/list/useTrailers";
import useGame from "../hooks/single/useGame";

function GameDetails() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const { data: trailers } = useTrailers(slug!);

  console.log(trailers);

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
    <Box p={5}>
      <Heading my={10}>{game?.name}</Heading>
      <ExpandableText text={game.description_raw} limit={500} />
      <SimpleGrid columns={2} fontSize={25} my={10}>
        <Attributes game={game} />
      </SimpleGrid>
    </Box>
  );
}

export default GameDetails;
