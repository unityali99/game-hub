import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import NavLogo from "../assets/logo.webp";
import ThemeSwitch from "../components/ThemeSwitch";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Flex
      flexDir={{ base: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={4}
      py={2.5}
    >
      <HStack w={"100%"}>
        <Image
          cursor={"pointer"}
          onClick={() => navigate("/")}
          src={NavLogo}
          boxSize={"60px"}
        />
        <SearchInput />
      </HStack>
      <Box mx={3} my={{ base: 3, sm: 0 }}>
        <ThemeSwitch />
      </Box>
    </Flex>
  );
}
