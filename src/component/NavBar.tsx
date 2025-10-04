import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} marginRight="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
