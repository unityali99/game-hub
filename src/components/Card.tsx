import { Game } from "../hooks/useGames";
import {
  CardBody,
  Card as ChakraCard,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import ScoreBadge from "./ScoreBadge";

interface Props {
  game: Game;
}

export default function Card({ game }: Props) {
  return (
    <ChakraCard border={10} overflow={"hidden"}>
      <Image w={"100%"} src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <ScoreBadge score={game.metacritic} />
        </HStack>
      </CardBody>
    </ChakraCard>
  );
}
