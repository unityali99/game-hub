import { Game } from "../hooks/useGames";
import { CardBody, Card as ChakraCard, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

export default function Card({ game }: Props) {
  return (
    <ChakraCard border={10} overflow={"hidden"}>
      <Image w={"100%"} src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </ChakraCard>
  );
}
