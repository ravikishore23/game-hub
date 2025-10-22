import type { Platform } from "@/assets/Hooks/useGames";
import usePlatforms from "@/assets/Hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatfrom }: props) => {
  const { Data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown /> {selectedPlatfrom?.name || "Platfrom"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {Data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
