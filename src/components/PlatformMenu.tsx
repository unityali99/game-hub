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
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import {
  menuButtonIconStyle,
  menuButtonStyle,
} from "../utils/MenuButtonStyles";

interface Props {
  selectedPlatform?: Platform;
  onSelectPlatform: (platform: Platform) => void;
}

export default function PlatformMenu({
  onSelectPlatform,
  selectedPlatform,
}: Props) {
  const { data, isLoading, error } = usePlatforms();

  return (
    <Menu>
      <HStack alignItems={"center"} whiteSpace={"nowrap"}>
        <MenuButton {...menuButtonStyle}>
          {selectedPlatform ? selectedPlatform.name : "Platform"}
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
            {error}
          </Alert>
        )}
        {isLoading ? (
          <Spinner display={"block"} mx={"auto"} my={2} />
        ) : (
          data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  );
}
