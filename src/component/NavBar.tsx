import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";

import { SearchInput } from "./SearchInput";
import { ColorModeButton } from "@/components/ui/color-mode";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} gap={"20px"}>
      <Image marginLeft={5} src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeButton marginRight={5} />
    </HStack>
  );
}

export default NavBar;
