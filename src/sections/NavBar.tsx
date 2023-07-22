import { HStack, Image } from "@chakra-ui/react";
import NavLogo from "../assets/logo.webp";
import ThemeSwitch from "../components/ThemeSwitch";
import SearchInput from "../components/SearchInput";

export default function NavBar() {
  return (
    <HStack px={4} py={2.5}>
      <Image src={NavLogo} boxSize={"60px"} />
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  );
}
