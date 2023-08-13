import { useParams } from "react-router-dom";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/single/useGame";

function GameDetails() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

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
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
}

export default GameDetails;
