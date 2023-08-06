import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export default function Title({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const currentGenre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const currentPlatform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  return (
    <Heading
      as={"h2"}
      fontSize={{ base: 30, sm: 40, lg: 50 }}
      whiteSpace={"nowrap"}
    >
      {currentPlatform?.name} {currentGenre?.name} Games
    </Heading>
  );
}
