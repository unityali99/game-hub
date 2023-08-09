import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/single/useGenre";
import usePlatform from "../hooks/single/usePlatform";
import useGameQueryStore from "../utils/gameQueryStore";

export default function Title() {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading
      as={"h2"}
      fontSize={{ base: 30, sm: 40, lg: 50 }}
      whiteSpace={"nowrap"}
    >
      {genre?.name} {platform?.name} Games
    </Heading>
  );
}
