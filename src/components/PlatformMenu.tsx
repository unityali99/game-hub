import {
  Alert,
  Box,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

export default function PlatformMenu({
  onSelectPlatform,
  selectedPlatform,
}: Props) {
  const { data, isLoading, error } = usePlatforms();
  return (
    <Box mx={20} my={2}>
      <Menu>
        <HStack alignItems={"center"}>
          <MenuButton bgColor={"gray.700"} px={3.5} py={2} rounded={10}>
            {selectedPlatform ? selectedPlatform.name : "Platform"}{" "}
            <Icon fontSize={10} as={BsChevronDown as IconType} />
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
    </Box>
  );
}
