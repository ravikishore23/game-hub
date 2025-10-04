import { useColorMode } from "@/components/ui/color-mode";

import { HStack, Switch } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root checked={colorMode === "dark"} onChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control />
        {colorMode === "dark" ? (
          <Switch.Label>Dark Mode</Switch.Label>
        ) : (
          <Switch.Label> Light Mode</Switch.Label>
        )}
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;
