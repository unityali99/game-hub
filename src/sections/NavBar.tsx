import { HStack, Image, Text } from "@chakra-ui/react";
import NavLogo from "../assets/logo.webp";
import ThemeSwitch from "../components/ThemeSwitch";

export default function NavBar() {
  return (
    <HStack justifyContent={"space-between"} px={4} py={2.5}>
      <HStack alignItems={"center"}>
        <Image src={NavLogo} boxSize={"60px"} />
        <Text fontWeight={"bold"}>GameHub</Text>
      </HStack>
      <ThemeSwitch />
    </HStack>
  );
}
