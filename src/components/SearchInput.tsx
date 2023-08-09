import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "../utils/gameQueryStore";

export default function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search Games" variant={"filled"} ref={searchRef} />
      <Button onClick={() => setSearchText(searchRef.current?.value)} mx={1}>
        Search
      </Button>
    </InputGroup>
  );
}
