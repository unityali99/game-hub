import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/list/useGenres";
import cropImageUrl from "../utils/cropImageUrl";
import useGameQueryStore from "../utils/gameQueryStore";

export default function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const { setGenreId } = useGameQueryStore();

  if (error) return null;
  if (isLoading)
    return <Spinner position={"absolute"} top={"30%"} size={"xl"} mx={"16"} />;
  return (
    <List>
      {genres.results.map((genre, index) => {
        return (
          <ListItem key={genre.id} onClick={() => setGenreId(genre.id)}>
            {index !== 0 && <Divider />}
            <Button
              bgColor={genre.id === genreId ? "rgba(128,128,128,0.2)" : ""}
              variant={"ghost"}
              width={"100%"}
              height={"100%"}
              py={2.5}
              borderRadius={0}
            >
              <HStack>
                <Box
                  position={"relative"}
                  w={"75px"}
                  pt={"35%"}
                  overflow={"hidden"}
                >
                  <Image
                    rounded={10}
                    position={"absolute"}
                    top={0}
                    left={0}
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    src={cropImageUrl(genre.image_background)}
                  />
                </Box>
                <Text
                  width={20}
                  mx={1}
                  whiteSpace={"normal"}
                  fontWeight={"semibold"}
                  fontSize={15}
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
