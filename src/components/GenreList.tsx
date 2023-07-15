import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageUrl from "../utils/cropImageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export default function GenreList({ onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading)
    return <Spinner position={"absolute"} top={"50%"} size={"xl"} mx={"16"} />;
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem p={2} key={genre.id}>
            <HStack>
              <Image
                rounded={10}
                w={"40%"}
                src={cropImageUrl(genre.image_background)}
              />
              <Button
                variant={"link"}
                fontWeight={"semibold"}
                fontSize={15}
                mx={1}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
