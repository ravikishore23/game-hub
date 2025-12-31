import type { Platform } from "@/assets/Hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface props {
  platfroms: Platfrom[];
}

function PlatfromIconList({ platfroms }: props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    web: BsGlobe,
    mac: FaApple,
  };
  return (
    <>
      <HStack>
        {platfroms.map((platfrom) => (
          <Icon
            key={platfrom.id}
            as={iconMap[platfrom.slug]}
            color="gray.500"
          />
        ))}
      </HStack>
    </>
  );
}

export default PlatfromIconList;
