import {
  Alert,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import {
  menuButtonIconStyle,
  menuButtonStyle,
} from "../utils/MenuButtonStyles";
import usePlatforms from "../hooks/list/usePlatforms";
import useGameQueryStore from "../utils/gameQueryStore";
import usePlatform from "../hooks/single/usePlatform";

export default function PlatformMenu() {
  const { data: platforms, isLoading, error } = usePlatforms();
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
  const platform = usePlatform(platformId);

  return (
    <Menu>
      <HStack alignItems={"center"} whiteSpace={"nowrap"}>
        <MenuButton {...menuButtonStyle}>
          {platformId ? platform?.name : "Platform"}
          <Icon {...menuButtonIconStyle} />
        </MenuButton>
      </HStack>
      <MenuList>
        {error && (
          <Alert
            w={"75%"}
            mx={"auto"}
            justifyContent={"center"}
            rounded={10}
            colorScheme="red"
          >
            {error.message}
          </Alert>
        )}
        {isLoading ? (
          <Spinner display={"block"} mx={"auto"} my={2} />
        ) : (
          platforms?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  );
}
