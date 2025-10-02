import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";

function NavBar() {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>NavBar</Text>
      </HStack>
    </>
  );
}

export default NavBar;
