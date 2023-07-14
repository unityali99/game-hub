import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import cropImageUrl from "../utils/cropImageUrl";

export default function GenreList() {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => {
        console.log(genre);
        return (
          <ListItem p={2}>
            <HStack>
              <Image
                rounded={10}
                w={"40%"}
                src={cropImageUrl(genre.image_background)}
              />
              <Text fontSize={15} mx={1}>
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
