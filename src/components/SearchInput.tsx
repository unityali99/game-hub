import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
interface Props {
  onSearch: (searchText?: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search Games" variant={"filled"} ref={searchRef} />
      <Button onClick={() => onSearch(searchRef.current?.value)} mx={1}>
        Search
      </Button>
    </InputGroup>
  );
}
