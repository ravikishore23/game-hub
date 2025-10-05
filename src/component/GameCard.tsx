import type { Game } from "@/assets/Hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface props {
  game: Game;
}

function GameCard({ game }: props) {
  return (
    <Card.Root width={300} height={340} padding={5}>
      <Image borderRadius={5} src={game.background_image} alt={game.name} />

      <Card.Body>
        <Heading>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
