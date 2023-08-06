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
import usePlatforms from "../hooks/usePlatforms";
import {
  menuButtonIconStyle,
  menuButtonStyle,
} from "../utils/MenuButtonStyles";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatformId: (platformId: number) => void;
}

export default function PlatformMenu({
  onSelectPlatformId,
  selectedPlatformId,
}: Props) {
  const { data: platforms, isLoading, error } = usePlatforms();
  const currentPlatform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <HStack alignItems={"center"} whiteSpace={"nowrap"}>
        <MenuButton {...menuButtonStyle}>
          {currentPlatform ? currentPlatform.name : "Platform"}
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
              onClick={() => onSelectPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  );
}
