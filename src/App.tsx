import { Hide, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./sections/NavBar";
import GameGrid from "./sections/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/usePlatforms";
import SortMenu from "./components/SortMenu";

export interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText?: string) =>
            setGameQuery((prev) => ({ ...prev, searchText }))
          }
        />
      </GridItem>
      <Hide below="lg">
        <GridItem area={"aside"} p={1.5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) =>
              setGameQuery((gameQuery) => ({ ...gameQuery, genre }))
            }
          />
        </GridItem>
      </Hide>
      <GridItem area={"main"}>
        <HStack
          justifyContent={{ base: "center", lg: "flex-start" }}
          mx={{ base: "5", md: "20" }}
          my={2}
          spacing={5}
        >
          <PlatformMenu
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform: Platform) =>
              setGameQuery((gameQuery) => ({ ...gameQuery, platform }))
            }
          />
          <SortMenu
            sortOrder={gameQuery.sortOrder}
            setSortOrder={(sortOrder) =>
              setGameQuery((gameQuery) => ({
                ...gameQuery,
                sortOrder,
              }))
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
