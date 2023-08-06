import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/single/useGenre";
import usePlatform from "../hooks/single/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

export default function Title({ gameQuery }: Props) {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  return (
    <Heading
      as={"h2"}
      fontSize={{ base: 30, sm: 40, lg: 50 }}
      whiteSpace={"nowrap"}
    >
      {selectedGenre?.name} {selectedPlatform?.name} Games
    </Heading>
  );
}
