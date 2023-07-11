import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { FaWindows } from "react-icons/fa";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
  platforms: Platform[];
}

export default function PlatformList({ platforms }: Props) {
  return (
    <>
      {/* {platforms.map((platform) => ( */}
      <HStack>
        <Icon color={"gray.500"} as={FaWindows as IconType} />
        <Icon color={"gray.500"} as={FaWindows as IconType} />
        <Icon color={"gray.500"} as={FaWindows as IconType} />
        <Icon color={"gray.500"} as={FaWindows as IconType} />
        <Icon color={"gray.500"} as={FaWindows as IconType} />
      </HStack>
      {/* ))} */}
    </>
  );
}
