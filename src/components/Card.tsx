import { CardBody, CardFooter, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import ScoreBadge from "./ScoreBadge";
import cropImageUrl from "../utils/cropImageUrl";
import CardLayout from "./CardLayout";
import { useNavigate } from "react-router-dom";
import Game from "../models/Game";

interface Props {
  game: Game;
}

export default function Card({ game }: Props) {
  const navigate = useNavigate();

  return (
    <CardLayout onClick={() => navigate("/" + game.slug)}>
      <Image w={"100%"} src={cropImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={30}>{game.name}</Heading>
      </CardBody>
      <CardFooter mt={-4}>
        <HStack w={"100%"} justifyContent="space-between">
          <PlatformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <ScoreBadge score={game.metacritic} />
        </HStack>
      </CardFooter>
    </CardLayout>
  );
}
