import { HStack, Image } from "@chakra-ui/react";
import NavLogo from "../assets/logo.webp";
import ThemeSwitch from "../components/ThemeSwitch";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <HStack px={4} py={2.5}>
      <Image
        cursor={"pointer"}
        onClick={() => navigate("/")}
        src={NavLogo}
        boxSize={"60px"}
      />
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  );
}
