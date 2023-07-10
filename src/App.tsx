import { Hide, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Hide below="lg">
        <GridItem bg={"gold"} area={"aside"}>
          aside
        </GridItem>
      </Hide>
      <GridItem bg={"orange"} area={"main"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
