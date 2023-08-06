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
import usePlatform from "../hooks/single/usePlatform";
import usePlatforms from "../hooks/list/usePlatforms";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatformId: (platformId: number) => void;
}

export default function PlatformMenu({
  onSelectPlatformId,
  selectedPlatformId,
}: Props) {
  const { data: platforms, isLoading, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

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
