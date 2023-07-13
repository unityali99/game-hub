import { Hide, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./sections/NavBar";
import GameGrid from "./sections/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Hide below="lg">
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Hide>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
