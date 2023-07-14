import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import cropImageUrl from "../utils/cropImageUrl";

export default function GenreList() {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading)
    return <Spinner position={"absolute"} top={"50%"} size={"xl"} mx={"16"} />;
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
              <Text fontWeight={"semibold"} fontSize={15} mx={1}>
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
