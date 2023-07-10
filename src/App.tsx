import { Hide, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./sections/NavBar";

function App() {
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
      <GridItem area={"main"}>main</GridItem>
    </Grid>
  );
}

export default App;
