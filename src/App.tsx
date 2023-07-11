import { Hide, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./sections/NavBar";
import GameGrid from "./sections/GameGrid";

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Hide below="lg">
        <GridItem area={"aside"}>aside</GridItem>
      </Hide>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
