import { Hide, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./sections/NavBar";
import GameGrid from "./sections/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Hide>
      <GridItem area={"main"}>
        <PlatformMenu />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
