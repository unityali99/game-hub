import {
  Button,
  Divider,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
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
      {data.map((genre, index) => {
        return (
          <ListItem key={genre.id}>
            {index !== 0 && <Divider />}
            <Button variant={"ghost"} height={"100%"} py={2.5} borderRadius={0}>
              <HStack>
                <Image
                  rounded={10}
                  w={"40%"}
                  src={cropImageUrl(genre.image_background)}
                />
                <Text
                  width={20}
                  mx={1}
                  whiteSpace={"normal"}
                  fontWeight={"semibold"}
                  fontSize={15}
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Text>
              </HStack>
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}
