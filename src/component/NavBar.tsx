import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";

interface Props {
  onSearch: (searchText: string | number) => void;
}

import { SearchInput } from "./SearchInput";
import { ColorModeButton } from "@/components/ui/color-mode";
function NavBar({ onSearch }: Props) {
  return (
    <HStack paddingTop={3} justifyContent={"space-between"} gap={"20px"}>
      <Image marginLeft={5} src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton marginRight={5} />
    </HStack>
  );
}

export default NavBar;
