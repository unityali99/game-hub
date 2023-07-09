import { Hide, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem bg={"lightblue"} area={"nav"}>
        nav
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
