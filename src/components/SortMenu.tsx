import {
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
import useGameQueryStore from "../utils/gameQueryStore";

export default function SortMenu() {
  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  const sortData = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const selectedSort = sortData.find((sort) => sort.value === sortOrder);

  return (
    <Menu>
      <HStack alignItems={"center"} whiteSpace={"nowrap"}>
        <MenuButton {...menuButtonStyle}>
          Sort By {sortOrder ? selectedSort?.label : "Relevance"}
          <Icon {...menuButtonIconStyle} />
        </MenuButton>
      </HStack>
      <MenuList>
        {sortData.map(({ value, label }) => (
          <MenuItem onClick={() => setSortOrder(value)} key={value}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
