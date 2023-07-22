import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack whiteSpace={"nowrap"}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
}
