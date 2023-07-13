import { Game } from "../hooks/useGames";
import { CardBody, CardFooter, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import ScoreBadge from "./ScoreBadge";
import cropImageUrl from "../utils/cropImageUrl";
import CardLayout from "./CardLayout";

interface Props {
  game: Game;
}

export default function Card({ game }: Props) {
  return (
    <CardLayout>
      <Image w={"100%"} src={cropImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={30}>{game.name}</Heading>
      </CardBody>
      <CardFooter mt={-4}>
        <HStack justifyContent="space-between">
          <PlatformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <ScoreBadge score={game.metacritic} />
        </HStack>
      </CardFooter>
    </CardLayout>
  );
}
