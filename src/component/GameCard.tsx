import type { Game } from "@/assets/Hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatfromIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";

interface props {
  game: Game;
}

function GameCard({ game }: props) {
  return (
    <Card.Root>
      <Image borderRadius={5} src={game.background_image} alt={game.name} />

      <Card.Body>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatfromIconList
            platfroms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
