import { ListItem, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode[] | ReactNode;
}

function List({ title, children }: Props) {
  return (
    <UnorderedList listStyleType={"none"}>
      <ListItem color={"whiteAlpha.400"} fontWeight={"bold"}>
        {title}
      </ListItem>
      {children}
    </UnorderedList>
  );
}

export default List;
