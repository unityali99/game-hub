import { HStack, Image, Text } from "@chakra-ui/react";
import NavLogo from "../assets/logo.webp";

export default function NavBar() {
  return (
    <HStack>
      <Image src={NavLogo} boxSize={"60px"} />
      <Text fontWeight={"bold"}>GameHub</Text>
    </HStack>
  );
}
