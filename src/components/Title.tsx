import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

export default function Title({ gameQuery }: Props) {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: 30, sm: 40, lg: 50 }}
      whiteSpace={"nowrap"}
    >
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
}
