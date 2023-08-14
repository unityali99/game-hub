import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGame from "../hooks/single/useGame";
import { useState } from "react";
import List from "../components/List";
import ScoreBadge from "../components/ScoreBadge";
import Attributes from "../components/Attributes";

function GameDetails() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const [expanded, setExpanded] = useState(false);

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
      <Text display={"inline-block"} noOfLines={expanded ? 0 : 3}>
        {game?.description_raw}
      </Text>
      <Button
        colorScheme="yellow"
        onClick={() => setExpanded((current) => !current)}
        display={"inline-block"}
        px={4}
        my={3}
      >
        {expanded ? "Show Less" : "Show More ..."}
      </Button>
      <SimpleGrid columns={2} fontSize={25} my={10}>
        <Attributes game={game} />
      </SimpleGrid>
    </Box>
  );
}

export default GameDetails;
