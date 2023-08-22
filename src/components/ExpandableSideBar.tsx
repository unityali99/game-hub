import {
  Box,
  HStack,
  Heading,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  setExpanded: (expanded: boolean) => void;
  children: ReactNode;
  expanded: boolean;
}

export default function ExpandableSideBar({
  expanded,
  setExpanded,
  children,
}: Props) {
  const colorModeValue = useColorModeValue("whiteAlpha.800", "gray.800");

  return (
    <Box
      opacity={"97%"}
      bgColor={colorModeValue}
      height={"100%"}
      zIndex={10}
      pos={"fixed"}
      top={0}
      left={0}
      overflowX={"hidden"}
      w={expanded ? "250px" : 0}
      transitionDuration={"0.5s"}
    >
      <HStack justifyContent={"space-between"} m={7}>
        <Heading mx={0} fontSize={30} fontWeight={"semibold"}>
          Genres
        </Heading>
        <Icon
          cursor={"pointer"}
          mt={1}
          onClick={() => setExpanded(false)}
          fontSize={30}
          as={AiOutlineClose as IconType}
        />
      </HStack>
      <Box
        width={"max-content"}
        overflowY={"auto"}
        maxHeight="calc(100% - 100px)"
      >
        {children}
      </Box>
    </Box>
  );
}
