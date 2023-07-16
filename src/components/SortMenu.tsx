import {
  Alert,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  menuButtonIconStyle,
  menuButtonStyle,
} from "../utils/MenuButtonStyles";

export default function SortMenu() {
  return (
    <Menu>
      <HStack alignItems={"center"}>
        <MenuButton {...menuButtonStyle}>
          Sort By A-Z
          <Icon {...menuButtonIconStyle} />
        </MenuButton>
      </HStack>
      <MenuList>
        {/* {error && (
          <Alert
            w={"75%"}
            mx={"auto"}
            justifyContent={"center"}
            rounded={10}
            colorScheme="red"
          >
            {error}
          </Alert>
        )} */}
        <MenuItem>Revelance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
}
