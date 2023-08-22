import {
  Hide,
  Grid,
  GridItem,
  HStack,
  Box,
  Heading,
  Icon,
} from "@chakra-ui/react";
import GameGrid from "../sections/GameGrid";
import GenreList from "../sections/GenreList";
import PlatformMenu from "../components/PlatformMenu";
import SortMenu from "../components/SortMenu";
import Title from "../components/Title";
import { AiOutlineMenu } from "react-icons/ai";
import { IconType } from "react-icons";
import { Fragment, useState } from "react";
import ExpandableSideBar from "../components/ExpandableSideBar";

function GamesPage() {
  const [genreListExpanded, setGenreListExpanded] = useState(false);

  return (
    <Fragment>
      <Hide above="lg">
        <ExpandableSideBar
          expanded={genreListExpanded}
          setExpanded={setGenreListExpanded}
        >
          <GenreList />
        </ExpandableSideBar>
      </Hide>
      <Grid
        templateAreas={{ base: `"main"`, lg: `"aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <Hide below="lg">
          <GridItem area={"aside"} p={1.5}>
            <Box>
              <Heading m={7} fontSize={30} fontWeight={"semibold"}>
                Genres
              </Heading>
              <GenreList />
            </Box>
          </GridItem>
        </Hide>
        <GridItem area={"main"}>
          <Box
            textAlign={{ base: "center", lg: "start" }}
            mx={{ lg: 20 }}
            my={7}
          >
            <Title />
          </Box>

          <HStack
            justifyContent={{ base: "center", lg: "flex-start" }}
            mx={{ base: "5", md: "20" }}
            my={2}
            spacing={5}
          >
            <PlatformMenu />
            <SortMenu />
          </HStack>
          <HStack
            display={{ base: "flex", lg: "none" }}
            mx={10}
            my={5}
            cursor={"pointer"}
            onClick={() => setGenreListExpanded((prevValue) => !prevValue)}
          >
            <Icon mx={0.5} fontSize={30} as={AiOutlineMenu as IconType} />
            <Heading fontSize={25}>Genres</Heading>
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </Fragment>
  );
}

export default GamesPage;
