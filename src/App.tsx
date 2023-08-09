import { Hide, Grid, GridItem, HStack, Box, Heading } from "@chakra-ui/react";
import NavBar from "./sections/NavBar";
import GameGrid from "./sections/GameGrid";
import GenreList from "./sections/GenreList";
import PlatformMenu from "./components/PlatformMenu";
import SortMenu from "./components/SortMenu";
import Title from "./components/Title";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Hide below="lg">
        <GridItem area={"aside"} p={1.5}>
          <Heading m={7} fontSize={30} fontWeight={"semibold"}>
            Genres
          </Heading>
          <GenreList />
        </GridItem>
      </Hide>
      <GridItem area={"main"}>
        <Box textAlign={{ base: "center", lg: "start" }} mx={{ lg: 20 }} my={7}>
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
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
